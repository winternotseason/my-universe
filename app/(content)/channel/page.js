import YouTubePlayer from "@/components/youtube";
import classes from "./page.module.css";
export default async function PageChannelV() {
  return (
    <>
      <video className={classes.video} autoPlay loop muted>
        <source
          src="https://videos.pexels.com/video-files/856857/856857-uhd_2732_1440_30fps.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
