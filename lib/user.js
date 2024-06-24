import { executeQuery, pool } from "./db2";

export async function createUser(email, password, date) {
  try {
    const sql = "INSERT INTO users (email, password, date) VALUES (? , ?, ?)";
    const result = await executeQuery(sql, [email, password, date]);
    return result;
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      return { errors: { error: "Email already exists" } };
    }
  }
}

export async function getUserByEmail(email) {
  try {
    const sql = "SELECT * FROM users WHERE email = ?";
    const result = await executeQuery(sql, [email]);
    // result[0][0]는 유저객체
    return result[0][0];
  } catch {}
}

export async function getUserById(id) {
  try {
    const sql = "SELECT * FROM users WHERE id = ?";
    const result = await executeQuery(sql, [id]);

    return result[0][0];
  } catch {}
}
