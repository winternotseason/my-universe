import { verifyAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
import classes from "./page.module.css";

export default async function ChannelS() {
  const result = await verifyAuth();

  // 인증된 사용자가 아니라면
  if (!result.user) {
    return <p className={classes.title}>로그인이 필요합니다.</p>;
  }

  return <h1 className={classes.title}>Recent News about universe</h1>;
}
