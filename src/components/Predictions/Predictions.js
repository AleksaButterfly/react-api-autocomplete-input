import React from "react";

import css from "./Predictions.module.scss";

const Predictions = (props) => {
  const { show, predictions, onSelect } = props;
  return show ? (
    <ul className={css.predictions}>
      {predictions.map((prediction) => {
        return (
          <li
            key={prediction.id}
            className={css.predictionItem}
            onClick={() => {
              if (onSelect) onSelect(prediction.name);
              return;
            }}
          >
            {prediction.name}
          </li>
        );
      })}
    </ul>
  ) : null;
};

export default Predictions;
