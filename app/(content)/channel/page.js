import YouTubePlayer from "@/components/youtube";
import Image from "next/image";
import classes from "./page.module.css";
export default async function PageChannelV() {
  return (
    <div className={classes.container}>
      <h1>
        Welcome to <br />
        <span>MY UNIVERSE</span>
        <br />
        APP!
      </h1>
      <p>
        Enjoy the universe <br />
        through various contents
      </p>
      <p>
        Get more content <br />
        by signing up for membership!
      </p>
    </div>
  );
}
