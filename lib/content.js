import { getPictureOfTheDay } from "./nasa";

export async function getChannelContents() {
  const pictureOfTheDay = await getPictureOfTheDay();
  const ChannelContent = [
    {
      channel: "n",
      title: pictureOfTheDay.title,
      imageUrl: pictureOfTheDay.url,
      explanation: pictureOfTheDay.explanation,
      date: pictureOfTheDay.date,
    },

  ];
  return ChannelContent;
}
