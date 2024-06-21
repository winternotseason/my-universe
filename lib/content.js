import { getPictureOfTheDay } from "./nasa";

export async function getChannelContents() {
  const pictureOfTheDay = await getPictureOfTheDay();
  const ChannelContent = [
    {
      channel: "n",
      shape:'image',
      title: pictureOfTheDay.title,
      imageUrl: [pictureOfTheDay.url],
      explanation: pictureOfTheDay.explanation,
      date: pictureOfTheDay.date
    },{
        channel: "i",
        shape:'video'
    }
  ];
  return ChannelContent;
}
