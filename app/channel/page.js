import YouTubePlayer from "@/components/youtube";
import Link from "next/link";
import classes from "./page.module.css";
export default function PageChannelA() {
  return (
    <>
      <video className={classes.video} autoPlay loop muted>
        <source
          src="https://videos.pexels.com/video-files/7094565/7094565-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
