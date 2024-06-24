import { getImagesAboutUniverse } from "@/lib/api/naver-serach";
import Image from "next/image";
import Link from "next/link";
import classes from "./page.module.css";

export default async function ChannelV() {
  const images = await getImagesAboutUniverse();
 
  return (
    <div className={classes.images}>
        <h1>IMAGES ABOUT UNIVERSE</h1>
        <h3>Click for details!</h3>
      <ul>
        {images.items.slice(0, 10).map((image) => (
          <Link target="_blank" href={image.link} key={image.title}>
            <li>
              <div className={classes.image}>
                <Image unoptimized={true} src={image.link} alt="image" fill />
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
