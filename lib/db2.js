import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  port: 3306,
  password: process.env.DB_PASSWORD,
  socketPath: "/tmp/mysql.sock",
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
