// api/account/join

import { mongo } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();

  const client = await mongo;
  const db = client.db("universe");

  const user = await db
    .collection("users")
    .countDocuments({ _id: data.email });

  // 이미 같은 이메일의 유저가 존재하면?
  if (user > 0) {
    return NextResponse.json({ status: 500 });
  }

  await db.collection("users").insertOne({
    _id: data.email,
    password: data.hashedPassword,
    date: data.date,
  });

  client.close();

  return NextResponse.json({ message: "회원가입 성공!!!!" });
}
