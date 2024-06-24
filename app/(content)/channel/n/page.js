import YouTubePlayer from "@/components/youtube";
import { getChannelContents } from "@/lib/content";
import Image from "next/image";
import { Suspense } from "react";
import classes from "./page.module.css";

export default async function ChannelN() {
  const contents = await getChannelContents();
  const content = contents.find((content) => content.channel === "n");
  return (
    <main className={classes.main}>
      <div className={classes.image}>
        <Suspense fallback={<span>loading...</span>}>
          <Image fill src={content.imageUrl} alt={content.title} />
        </Suspense>
      </div>
      <div className={classes.explanation}>
        <h1>{content.title}</h1>
        <p>{content.explanation}</p>
        <p>
          {content.comment} {content.date.replaceAll("-", " ")}
        </p>
      </div>
    </main>
  );
}
