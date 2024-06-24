export async function getNewsAboutUniverse() {
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

export async function getBooksAboutUniverse() {
  const books = await fetch(
    "https://openapi.naver.com/v1/search/book.json?query=우주&display=10",
    {
      headers: {
        "X-Naver-Client-Id": `${process.env.NAVER_CLIENT_ID}`,
        "X-Naver-Client-Secret": `${process.env.NAVER_CLIENT_SECRET}`,
      },
    }
  );
  return books.json();
}

export async function getImagesAboutUniverse() {
  const images = await fetch(
    "https://openapi.naver.com/v1/search/image.json?query=우주&display=10",
    {
      headers: {
        "X-Naver-Client-Id": `${process.env.NAVER_CLIENT_ID}`,
        "X-Naver-Client-Secret": `${process.env.NAVER_CLIENT_SECRET}`,
      },
    }
  );
  return images.json();
}
