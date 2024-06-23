export default async function getNewsAboutUnivers() {
  const news = await fetch(
    "https://openapi.naver.com/v1/search/news.json?query=nasa우주항공&display=10",
    {
      headers: {
        "X-Naver-Client-Id": `${process.env.NAVER_CLIENT_ID}`,
        "X-Naver-Client-Secret": `${process.env.NAVER_CLIENT_SECRET}`,
      },
    }
  );
  return news.json();
}
