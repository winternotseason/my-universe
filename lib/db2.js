import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: '127.0.0.1',
  user: 'root',
  port: 3306,
  password: process.env.DB_PASSWORD,
  database: "universe",
  connectionLimit: 500,
  namedPlaceholders: true,
});

export async function executeQuery(sql, params) {
  try {
    const result = await pool.execute(sql, params);

    return result;
  } catch (err) {
    console.error("Database error:", err);
    throw err;
  }
}
