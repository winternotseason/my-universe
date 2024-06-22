import db from "./db";

export function createUser(email, password) {
  const result = db.prepare("INSERT INTO users (email, password) VALUES (? , ?)").run(email, password);
  return result.lastInsertRowid // 새로 생성된 사용자의 아이디
}
