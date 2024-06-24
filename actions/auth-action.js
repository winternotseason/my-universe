// 서버 액션 역할 기능을 생성하려면 지시문을 파일의 최상단이나 함수 내부에 추가
"use server";

import { createAuthSession, destorySession } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUser, getUserByEmail } from "@/lib/user";
import { redirect } from "next/navigation";

export async function signup(prevState, formData) {
  const email = formData.get("email"); // input의 name 속성
  const password = formData.get("password");
  const password_confirm = formData.get("password-confirm");

  let errors = {};
  // 만약 이메일에 @가 빠졌다면?
  if (!email.includes("@")) {
    errors.msg = "유효한 이메일을 입력해주세요.";
    return { errors };
  }
  // 비밀번호가 8자 미만이라면?
  if (password.trim().length < 8) {
    errors.msg = "비밀번호는 8자 이상 설정해주세요.";
    return { errors };
  }

  // 비밀번호와 비밀번호 확인이 서로 다르면?
  if (password !== password_confirm) {
    errors.msg = "비밀번호가 서로 다릅니다.";
    return { errors };
  }
  /* db 저장 코드 */

  const hashedPassword = await hashUserPassword(password);
  // 가입 날짜 설정
  const date = new Date();
  const query_date = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  try {
    const id = createUser(email, hashedPassword, query_date);
    redirect("/channel");
  } catch (error) {
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      errors.msg = "이미 존재하는 이메일입니다.";
      return { errors };
    }
    throw error;
  }
}

export async function login(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  let errors = {};
  if (!email.includes("@")) {
    errors.msg = "유효한 이메일을 입력해주세요.";
    return { errors };
  }
  if (password === "") {
    errors.msg = "비밀번호를 입력해주세요.";
    return { errors };
  }
  // 입력된 이메일을 통해 db에 있는 user 객체 불러오기
  // {id : '', email: '', password:'해시화 된 비밀번호'}
  const existingUser = getUserByEmail(email);

  if (!existingUser) {
    errors.msg = "존재하지 않는 이메일입니다.";
    return { errors };
  }

  const isValidPassword = await verifyPassword(existingUser.password, password);
 
  if (!isValidPassword) {
    errors.msg = "비밀번호가 다릅니다.";
    return {
      errors,
    };
  }
  await createAuthSession(existingUser.id);
  return redirect("/channel");
}

export async function logout() {
  await destorySession();
}
