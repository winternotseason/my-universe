import getNewsAboutUnivers from "@/lib/naver-news";
import Link from "next/link";
import classes from "./news.module.css";

export default async function News() {
  const news = await getNewsAboutUnivers();

  return (
    <div className={classes.news}>
      <h1>RECENT NEWS ABOUT UNIVERSE</h1>
      <ul>
        {news.items.slice(0, 4).map((item) => (
          <Link target="_blank" href={item.link} key={item.title}>
            <li>
              <h2>{item.title.replace(/<b>/g, "").replace(/<\/b>/g, "").replace(/&quot;/g, '')}</h2>
              <p>
                {item.description.replace(/<b>/g, "").replace(/<\/b>/g, "").replace(/&quot;/g, '')}
              </p>
              <p>{new Date(item.pubDate).toISOString().split("T")[0]}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
