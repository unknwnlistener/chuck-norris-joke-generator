const url = "https://api.chucknorris.io/jokes/random";

const categoriesUrl = "https://api.chucknorris.io/jokes/categories";
const searchUrl = "https://api.chucknorris.io/jokes/search";

export const getRandomJokeAsync = async () => {
  const request = await fetch(url);
  const data = await request.json();
  return data;
};

export const getCategoriesListAsync = async () => {
  return await (await fetch(categoriesUrl)).json();
};

export const getCategoryJokeAsync = async (categ) => {
  return await (await fetch(`${url}?category=${categ}`)).json();
};

export const freeTextSearch = async (text) => {
  return await (await fetch(`${searchUrl}?query=${text}`)).json();
};
