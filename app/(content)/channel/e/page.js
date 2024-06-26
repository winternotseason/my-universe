import YouTubePlayer from "@/components/youtube";
import classes from "./page.module.css";

export default function ChannelE() {
  return (
    <div className={classes.container}>
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/hu6hIhW00Fk?si=TQeVizAaNzcS119I"
    ></iframe>
  </div>
  );
}
