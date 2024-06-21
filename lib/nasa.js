export async function getPictureOfTheDay() {
  const picture = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
  );

  return picture.json();
}

export async function getEarthCamera() {
  const picture = await fetch(`
    https://api.nasa.gov/EPIC/api/natural/images?api_key=${process.env.NASA_API_KEY}`);
  return picture.json();
}

export async function getMarsRoverPhotos() {
  const currentDate = new Date();
  const lastYearDate = new Date();
  lastYearDate.setFullYear(currentDate.getFullYear() - 1);

  // 1년전 오늘
  const date = `${lastYearDate.getFullYear()}-${
    lastYearDate.getMonth() + 1
  }-${lastYearDate.getDate()}`;

  const pictures = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${process.env.NASA_API_KEY}&earth_date=${date}`
  );
  const data = await pictures.json();

  return data.photos.slice(0, 5);
}
