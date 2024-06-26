// 서버 액션 역할 기능을 생성하려면 지시문을 파일의 최상단이나 함수 내부에 추가
"use server";

import { createAuthSession, destroySession } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { redirect } from "next/navigation";

/* ------------회원가입 로직------------ */
export async function signup(prevState, formData) {
  const id = formData.get("id"); // input의 name 속성
  const password = formData.get("password");
  const password_confirm = formData.get("password-confirm");

  let errors = {};
  // 만약 이메일에 @가 빠졌다면?
  if (id.length < 5) {
    errors.msg = "아이디는 5자 이상 입력해주세요.";
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

  // 가입 날짜 설정
  const date = new Date();
  const query_date = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;

  let success = false;

  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}api/account/join`, {
      method: "POST",
      body: JSON.stringify({ id, password, query_date }),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data.status)
    if (data.status && data.status === 500) {
      errors.msg = data.message;
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
  const id = formData.get("id");
  const password = formData.get("password");
  let errors = {};
  let success = false;
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}api/account/login`, {
      method: "POST",
      body: JSON.stringify({ id, password }),
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await res.json();
    if (data.status === 500) {
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
