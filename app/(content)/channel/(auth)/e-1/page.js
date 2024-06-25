import { redirect } from "next/navigation";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { nanumgothic } from "@/app/layout";
import Image from "next/image";
import Cut from "@/components/cut";
import classes from "./page.module.css";
import astronaut from "@/public/astronaut.png";
import stamp from "@/public/stamp.png";
import { verifyAuth } from "@/lib/auth";

export default async function ChannelE1() {
  const result = await verifyAuth();
  if (!result.user) {
    return <Cut header="MY PAGE" />;
  }

  return (
    <div className={`${classes.profile} ${nanumgothic.className}`}>
      <div className={classes.img}>
        <Image src={astronaut} fill alt="profile image" />
      </div>
      <div className={classes.info}>
        <p>
          <FaPhoneSquareAlt className={classes.icon} />
          {user.email}
        </p>
        <p>
          <FaRocket className={classes.icon} />{" "}
          {user.date.toISOString().split("T")[0]}
        </p>
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
