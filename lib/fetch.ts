export const getAllNews = async () => {
  const pageSize = 10;
  const topRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=5581ca59db36494c9bf8a26d75d502e6
`
  );
  const topJson = await topRes.json();
  return topJson;
};
