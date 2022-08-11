import React from "react";
import classNames from "classnames";

import css from "./Input.module.scss";

const Input = (props) => {
  const { className, id, name, type, ...rest } = props;
  const classes = classNames(css.input, className);

  const inputProps = {
    id,
    name,
    type,
    ...rest
  };
  return <input className={classes} {...inputProps} />;
};

export default Input;
