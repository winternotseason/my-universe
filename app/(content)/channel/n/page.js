import YouTubePlayer from "@/components/youtube";
import Image from "next/image";
import classes from "./page.module.css";
import { getPictureOfTheDay } from "@/lib/api/nasa";

export default async function ChannelN() {
  const contents = await getPictureOfTheDay();

  return (
    <main className={classes.main}>
      <div className={classes.image}>
        <Image fill src={contents.url} alt={contents.title} />
      </div>
      <div className={classes.explanation}>
        <h1>{contents.title}</h1>
        <p>{contents.explanation}</p>
        <p>
          {contents.comment} {contents.date.replaceAll("-", " ")}
        </p>
      </div>
    </main>
  );
}
