import { nanumgothic } from "@/app/layout";
import { verifyAuth } from "@/lib/auth";
import { getBooksAboutUniverse } from "@/lib/naver-serach";
import Image from "next/image";
import Link from "next/link";
import classes from "./page.module.css";
import Cut from "@/components/cut";

export default async function ChannelR() {
  const result = await verifyAuth();
  const books = await getBooksAboutUniverse();

  // 인증된 사용자가 아니라면
  if (!result.user) {
    return (
      <Cut header="BOOKS ABOUT UNIVERSE"/>
    );
  }
  return (
    <div className={classes.books}>
      <h1>BOOKS ABOUT UNIVERSE</h1>
      <h3>Click for details!</h3>
      <ul className={nanumgothic.className}>
        {books.items.slice(0, 10).map((book) => (
          <Link target="_blank" href={book.link} key={book.title}>
            <li>
              <div className={classes.image}>
                <Image src={book.image} alt="book" fill />
              </div>
              <div className={classes.content}>
                <h2 dangerouslySetInnerHTML={{ __html: book.title }} />
                <p dangerouslySetInnerHTML={{ __html: book.description }} />
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
