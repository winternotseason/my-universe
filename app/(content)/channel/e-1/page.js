import { verifyAuth } from "@/lib/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import classes from "./page.module.css";
import astronaut from "@/public/astronaut.png";
import stamp from "@/public/stamp.png";
import { getUserById } from "@/lib/user";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";

export default async function ChannelE1() {
  const result = await verifyAuth();
  if (!result.user) {
    return <p className={classes.title}>로그인이 필요합니다.</p>;
  }

  const user = getUserById(result.user.id);

  // 인증된 사용자가 아니라면

  return (
    <div className={classes.profile}>
      <div className={classes.img}>
        <Image src={astronaut} fill alt="profile image" />
      </div>
      <div className={classes.info}>
        <p>
          <FaPhoneSquareAlt className={classes.icon}/>
          {user.email}
        </p>
        <p>
          <FaRocket className={classes.icon}/> {user.date}
        </p>
        <p></p>
      </div>
      <Image
        className={classes.stamp}
        src={stamp}
        width={200}
        height={200}
        alt="stamp"
      />
    </div>
  );
}
