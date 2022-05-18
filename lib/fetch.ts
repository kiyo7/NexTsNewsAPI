export const getAllNews = async () => {
  const pageSize = 10;
  const topRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}
`
  );
  const topJson = await topRes.json();
  return topJson;
};

export const getTopicNews = async (params) => {
  const topicRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=jp&category=${params.id}&country=jp&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
  );
  const topicJson = await topicRes.json();

  return topicJson;
};

export const getWeather = async () => {
  const lat = 35.4122;
  const lon = 139.413;
  const exclude = 'hourly,minutely';
  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=${exclude}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
  );
  const weatherJson = await weatherRes.json();
  return weatherJson;
};

export const getPickUPNews = async () => {
  const keyword = 'software';
  const sortBy = 'popularity';
  const pickupPageSize = 5;
  const pickupRes = await fetch(
    `https://newsapi.org/v2/everything?q=${keyword}&language=jp&sortBy=${sortBy}&pageSize=${pickupPageSize}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
  );
  const pickupJson = await pickupRes.json();
  return pickupJson?.articles;
};
