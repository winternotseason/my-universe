// api/account/join

import { connectDB } from "@/lib/auth";
import { hashUserPassword } from "@/lib/hash";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();

  const client = await connectDB;
  const db = client.db("universe");

  const user = await db.collection("users").countDocuments({ _id: data.id });

  // 이미 같은 이메일의 유저가 존재하면?
  if (user > 0) {
    return NextResponse.json(
      { message: "이미 존재하는 아이디입니다." },
      { status: 500 }
    );
  }
  data.password = await hashUserPassword(data.password);
  await db.collection("users").insertOne({
    _id: data.id,
    password: data.password,
    date: data.date,
  });

  return NextResponse.json({ message: "회원가입 성공!!!!" });
}
