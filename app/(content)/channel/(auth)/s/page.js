import Cut from "@/components/cut";
import News from "@/components/news";
import { verifyAuth } from "@/lib/auth";

import { redirect } from "next/navigation";

export default async function ChannelS() {
  // 인증된 사용자가 아니라면
  const result = await verifyAuth();
  if (!result.user) {
    return <Cut header="RECENT NEWS ABOUT UNIVERSE"/>;
  }
  return <News />;
}
