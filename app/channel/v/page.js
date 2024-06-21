import { getMarsRoverPhotos } from "@/lib/nasa";
import Image from "next/image";
import classes from "./page.module.css";

export default async function ChannelV() {
  const datas = await getMarsRoverPhotos();
  // fro, rea, mas
  return (
    <div className={classes.container}>
      {datas.map((data, index) => {
        if (index % 2 === 0) {
          return (
            <div
              key={data.id}
              className={`${classes.item} ${data.camera.full_name
                .slice(0, 3)
                .toLowerCase()}`}
            >
              <Image
                className={classes.img}
                width="550"
                height="450"
                src={data.img_src}
                alt="mars picture"
              />
              <h1>{data.camera.full_name}</h1>
              <p>
                {data.earth_date}
              </p>
            </div>
          );
        }
      })}
    </div>
  );
}
