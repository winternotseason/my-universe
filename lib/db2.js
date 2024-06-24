import { createPool } from "mysql2";

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: "universe",
  connectionLimit: 4
});

pool.getConnection((err, conn) => {
  if (err) console.log("error!");
  else console.log("Connected to db!");
  conn.release();
});

export const executeQuery = (query, arrParams) => {
  return new Promise((resolve, reject) => {
    try {
      pool.query(query, arrParams, (err, data) => {
        if (err) {
          console.log("error in executing the query");
          console.log(err.errno);
          reject(err);
        }
        console.log("-----db.js-----");
        resolve(data);
      });
    } catch (err) {
      console.log("db.2", err);
    }
  });
};
