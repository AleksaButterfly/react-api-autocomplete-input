import React, { useState } from "react";
import { Input, Predictions, IconSearch } from "../";
import classNames from "classnames";

import css from "./AutocompleteInput.module.scss";

const PLACEHOLDER_TEXT = "Search...";

const AutocompleteInput = (props) => {
  // input states
  const [isFocused, setFocused] = useState(false);
  const [isHovered, setHovered] = useState(false);

  const { predictions, onPredictionSelect, value, onChange } = props;

  // input props
  const inputProps = {
    value,
    onChange,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onFocus: () => setFocused(true),
    onBlur: () => setTimeout(() => setFocused(false), 100),
    autoComplete: "off"
  };

  const showPredictions = isFocused && predictions.length > 0;
  const iconClasses = classNames(css.searchIcon, {
    [css.searchIconFocused]: isHovered || isFocused
  });
  return (
    <div className={css.autocompleteInput}>
      <div className={css.inputWrapper}>
        <IconSearch className={iconClasses} />
        <Input
          className={css.inputRoot}
          id="predictionsInput"
          name="predictionsInput"
          type="text"
          placeholder={PLACEHOLDER_TEXT}
          {...inputProps}
        />
      </div>
      <Predictions
        show={showPredictions}
        predictions={predictions}
        onSelect={(prediction) => onPredictionSelect(prediction)}
      />
    </div>
  );
};

export default AutocompleteInput;
