import React, { useState, useCallback, useEffect } from "react";
import { debounce } from "throttle-debounce";

// Shared
import { AutocompleteInput } from "./components";
import { countriesAPI } from "./util/api";
import {
  shortenArrayResults,
  denormaliseCountryPredictions
} from "./util/data";

import "./styles.scss";

const DEBOUNCE_TIMEOUT_DELAY = 300;

const App = () => {
  // input state
  const [query, setQuery] = useState("");

  // countries state
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(null);

  // Fetch countries on mount
  useEffect(() => {
    countriesAPI
      .query()
      .then((results) => setCountries(shortenArrayResults(results)));
  }, []);

  // Notify component when the country is
  // selected
  useEffect(() => {
    if (country) {
      console.log(`You selected ${country} country.`);
    }
  }, [country]);

  // Fetch countries using debounce method
  // after user finishes typing
  const autocompleteSearch = (q) => {
    countriesAPI.query().then((results) => {
      const filteredResults = results.filter((c) =>
        c.name.common.toLowerCase().includes(q.toLowerCase())
      );
      setCountries(shortenArrayResults(filteredResults));
    });
  };

  // Call debounce and pass callback function
  const debouncedChangeHandler = useCallback(
    debounce(DEBOUNCE_TIMEOUT_DELAY, autocompleteSearch),
    []
  );

  const onChangeHandler = (e) => {
    setQuery(e.target.value);
    debouncedChangeHandler(e.target.value);
  };

  const predictions = denormaliseCountryPredictions(countries);
  return (
    <div className="root">
      <AutocompleteInput
        predictions={predictions}
        value={query}
        // Funcs
        onChange={onChangeHandler}
        onPredictionSelect={(prediction) => setCountry(prediction)}
      />
    </div>
  );
};

export default App;
