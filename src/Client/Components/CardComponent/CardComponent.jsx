import React from "react";
import clsx from "clsx";

// Style
import classes from "./CardComponent.module.css"

const CardComponent = ({
  disabled = false,
  children,
  onClick,
  onMouseEnter
}) => {


  return (
    <div
      className={clsx(classes.card, disabled && classes.disabled)}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      {children}
    </div>
  );
}

export default CardComponent;