import type { NextApiRequest, NextApiResponse } from "next";
import pool from "@lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, address, contactNumber } = req.body;

    try {
      const [result] = await pool.query(
        "INSERT INTO company (name, address, contact_number) VALUES (?, ?, ?)",
        [name, address, contactNumber]
      );

      res.status(201).json({
        id: (result as any).insertId,
        name,
        address,
        contactNumber,
      });
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(500).json({ error: errorMessage });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
