const BASE_API_URL = "https://restcountries.com/v3.1/region/europe";

const getRequest = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};

export const countriesAPI = {
  query: () => getRequest(BASE_API_URL)
};
