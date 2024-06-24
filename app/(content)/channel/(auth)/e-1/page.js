import { verifyAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getUserById } from "@/lib/user";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { nanumgothic } from "@/app/layout";
import Image from "next/image";
import Cut from "@/components/cut";
import classes from "./page.module.css";
import astronaut from "@/public/astronaut.png";
import stamp from "@/public/stamp.png";


export default async function ChannelE1() {
  const result = await verifyAuth();

  // 인증된 사용자가 아니라면
  if (!result.user) {
    return <Cut header="MY PAGE"/>;
  }

  // 유저 정보 불러오기
  const user = getUserById(result.user.id);

  return (
    <div className={`${classes.profile} ${nanumgothic.className}`}>
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
