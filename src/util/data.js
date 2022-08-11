export const shortenArrayResults = (array) => array.slice(0, 5);

export const denormaliseCountryPredictions = (countries) => {
  const denormalisedCountries = countries.map((c) => ({
    id: c.cca2,
    name: c.name.common
  }));

  return denormalisedCountries;
};
