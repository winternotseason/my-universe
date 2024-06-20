export async function makingLoading() {
  await new Promise((res) => setTimeout(res, 2000));

  return "loading completed!";
}
