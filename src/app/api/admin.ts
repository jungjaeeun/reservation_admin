import type { NextApiRequest, NextApiResponse } from "next";
import pool from "@lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { username, password, email, companyId } = req.body;

    try {
      const [result] = await pool.query(
        "INSERT INTO admin (username, password, email, company_id) VALUES (?, ?, ?, ?)",
        [username, password, email, companyId]
      );

      res.status(201).json({
        id: (result as any).insertId,
        username,
        email,
        companyId,
      });
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(500).json({ error: errorMessage });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
