import {getNewsAboutUniverse} from "@/lib/naver-serach";
import Link from "next/link";
import classes from "./news.module.css";

export default async function News() {
  const news = await getNewsAboutUniverse();

  return (
    <div className={classes.news}>
      <h1>RECENT NEWS ABOUT UNIVERSE</h1>
      <h3>Click for details!</h3>
      <ul>
        {news.items.slice(0, 10).map((item) => (
          <Link target="_blank" href={item.link} key={item.title}>
            <li>
              <h2 dangerouslySetInnerHTML={{__html : item.title}} />
              <p dangerouslySetInnerHTML={{__html : item.description}} />
              <p>{new Date(item.pubDate).toISOString().split("T")[0]}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}


//  {item.description.replace(/<b>/g, "").replace(/<\/b>/g, "").replace(/&quot;/g, '')}