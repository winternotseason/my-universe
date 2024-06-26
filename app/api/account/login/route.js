// api/account/login

import { connectDB, createAuthSession, mongo } from "@/lib/auth";
import { verifyPassword } from "@/lib/hash";
import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  // email 받아와서 => user 정보 반환
  const data = await req.json();
  // 예시 data = { email : test@test.com, password : @(4812kjsdkfnf)12}
  const client = await connectDB;

  // (1) 일단 이메일이 존재하는지?

  const db = client.db("universe");
  const user = await db.collection("users").countDocuments({ _id: data.email });

  if (user === 0) {
    // 존재하지 않는 이메일
    return NextResponse.json(
      { message: "존재하지 않는 이메일입니다." },
      { status: 500 }
    );
  }
  // 유저가 존재한다면?
  const userData = await db.collection("users").findOne({ _id: data.email });

  const isValidPassword = await verifyPassword(
    userData.password,
    data.password
  );
  if (!isValidPassword) {
    return NextResponse.json(
      { message: "비밀번호가 다릅니다." },
      { status: 500 }
    );
  }

  await client.close();
  // userData._id.toString() : ObjectId
  return NextResponse.json({ id: userData._id}, { status: 200 });
}

export async function GET() {
  return NextResponse.json({message:'get!'})
}