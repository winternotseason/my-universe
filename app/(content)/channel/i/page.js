import YouTubePlayer from "@/components/youtube";
import classes from "./page.module.css";

export default async function ChannelI() {
  return (
    <div className={classes.container}>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/WeA7edXsU40?si=2IVErsfzMHn7ntzo"
      ></iframe>
    </div>
  );
}

//<YouTubePlayer videoId="mZx4DSUzFFQ" />
