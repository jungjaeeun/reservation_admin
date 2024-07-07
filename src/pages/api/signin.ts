import type { NextApiRequest, NextApiResponse } from "next";
import { RowDataPacket } from "mysql2";
import jwt from "jsonwebtoken";
import { verifyPassword } from "@lib/hashPassword";
import pool from "@lib/db";
import errors from "@error";

const SECRET_KEY = process.env.SECRET_KEY as string;

interface SignInData {
  email: string;
  password: string;
  autoLogin: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password, autoLogin }: SignInData = req.body;

    try {
      const [users] = (await pool.query(
        "SELECT * FROM admin WHERE email = ? LIMIT 1",
        [email]
      )) as unknown as [RowDataPacket[]];

      if (users.length === 0) {
        return res.status(401).json({
          code: errors["INVALID_EMAIL_PASSWORD"]?.code,
          message: errors["INVALID_EMAIL_PASSWORD"]?.message,
        });
      }

      const user = users[0];
      const isPasswordValid = await verifyPassword(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({
          code: errors["INVALID_EMAIL_PASSWORD"]?.code,
          message: errors["INVALID_EMAIL_PASSWORD"]?.message,
        });
      }

      let expiresIn = "1h";
      if (autoLogin) {
        expiresIn = "30d";
      }

      const token = jwt.sign(
        { userId: user.id, userEmail: user.email },
        SECRET_KEY!,
        { expiresIn }
      );

      res.status(200).json({
        token,
        expiresIn,
        id: user.id,
        email: user.email,
        username: user.username,
      });
    } catch (error) {
      console.error("로그인 오류:", error);
      res.status(500).json({
        code: errors["SERVER_ERROR"]?.code,
        message: errors["SERVER_ERROR"]?.message,
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
