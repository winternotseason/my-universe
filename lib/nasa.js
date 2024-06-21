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
