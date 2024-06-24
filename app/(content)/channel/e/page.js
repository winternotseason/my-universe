import YouTubePlayer from "@/components/youtube";
import classes from "./page.module.css";

export default function ChannelE() {
  return (
    <div className={classes.container}>
      <YouTubePlayer videoId="mZx4DSUzFFQ" />
    </div>
  );
}
