import React from "react";
import { renderCard } from "utils/card";
import { orNothing } from "utils/help";
import "ui/styles/card.css";

const Card = (props) => {

  const selectCard = () => {
    if (props.highlight && props.card) {
      props.highlight(props.card)
    }
  }

  const checkAndRender = () => {
    if (props.card) {
      let reveal = typeof props.card.flipped !== 'undefined' ? !props.card.flipped : false;
      return renderCard(props.card, reveal)
    }
  }

  return (
    <div
      className={`hoverable card-holder ` + orNothing(props.extraClass)}
      onClick={props.click}
      onMouseEnter={(e) => selectCard()}
    >
      {checkAndRender()}
      {props.children}
    </div>
  )
}

export default Card;

/**
 * Possible stypes for card component
 * hoverable
 */
const renderCardAgain = (card, reveal = true) => {
  if (card && reveal && card.art) {
    return (
      <img src={`${window.location.origin}/img/${card.art}`} alt={card.name} />
    );
  } else {
    return "";
  }
};
