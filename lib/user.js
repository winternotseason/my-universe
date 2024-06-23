import db from "./db";

export function createUser(email, password, date) {
  const result = db.prepare("INSERT INTO users (email, password, date) VALUES (? , ?, ?)").run(email, password, date);
  return result.lastInsertRowid // 새로 생성된 사용자의 아이디
}

export function getUserByEmail(email) {
  return db.prepare('SELECT * FROM users WHERE email = ?').get(email);
}

export function getUserById(id) {
  return db.prepare('SELECT * FROM users WHERE id = ?').get(id);
}