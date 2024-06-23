import Cut from "@/components/cut";
import News from "@/components/news";
import { verifyAuth } from "@/lib/auth";

import { redirect } from "next/navigation";
import classes from "./page.module.css";


export default async function ChannelS() {
  const result = await verifyAuth();
  
  // 인증된 사용자가 아니라면
  if (!result.user) {
    return <Cut header="RECENT NEWS ABOUT UNIVERSE"/>
  }

  return <News />;
}
