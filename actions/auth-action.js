// 서버 액션 역할 기능을 생성하려면 지시문을 파일의 최상단이나 함수 내부에 추가
"use server";

import { createAuthSession, destroySession } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { redirect } from "next/navigation";

/* ------------회원가입 로직------------ */
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

  let success = false;
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}api/account/join`, {
      method: "POST",
      body: JSON.stringify({ email, hashedPassword, date }),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data.status === 500) {
      errors.msg = "이미 존재하는 이메일입니다.";
      return { errors };
    }

    success = true;
  } catch (err) {
    console.error(err);
  } finally {
    if (success) {
      redirect("/login");
    }
  }
}

/* ------------로그인 로직------------ */
export async function login(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  let errors = {};
  let success = false;
  try {
    const res = await fetch("http://localhost:3000/api/account/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();

    if (res.status === 500) {
      errors.msg = data.message;
      return { errors };
    }
    success = true;
    await createAuthSession(data.id);
  } catch (err) {
    console.error(err);
  } finally {
    redirect("/channel");
  }
}

export async function logout() {
  await destroySession();
  redirect("/channel");
}
