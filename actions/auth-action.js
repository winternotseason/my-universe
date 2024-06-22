// 서버 액션 역할 기능을 생성하려면 지시문을 파일의 최상단이나 함수 내부에 추가
"use server";

export async function signup(prevState, formData) {
  const email = formData.get("email"); // input의 name 속성
  const password = formData.get("password");
  const password_confirm = formData.get("assword-confirm");

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
}
/* db 저장 코드 */
