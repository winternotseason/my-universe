import { executeQuery } from "./db2";

export async function createUser(email, password, date) {
  try {
    const sql = "INSERT INTO users (email, password, date) VALUES (? , ?, ?)";
    const result = await executeQuery(sql, [email, password, date]);
    return result;
  } catch (err) {
    return { message: "이미 존재하는 이메일입니다." };
  }
}

export async function getUserByEmail(email) {
  try {
    const sql = "SELECT * FROM users WHERE email = ?";
    const result = await executeQuery(sql, email);
    return result[0];
  } catch {}
}
