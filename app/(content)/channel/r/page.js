import { verifyAuth } from "@/lib/auth";
import classes from "./page.module.css";

export default async function ChannelR() {
  const result = await verifyAuth();

  // 인증된 사용자가 아니라면
  if (!result.user) {
    return <p className={classes.title}>로그인이 필요합니다.</p>;
  }
  return <h1 className={classes.title}>notice board</h1>;
}
