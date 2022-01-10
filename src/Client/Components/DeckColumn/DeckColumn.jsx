import React from "react";

// Custom components
import CardComponent from "Client/Components/CardComponent/CardComponent";

// classes
import classes from "./DeckColumn.module.css"

// TODO - add menu && is selected
const DeckColumn = ({
  ids = [0, 1],
  decks = [0, 1],
  dzs = [[], []],
  out = []
}) => {
  const [myId, rivalId] = ids;
  const [myDeck, rivalDeck] = [decks[myId], decks[rivalId]];
  const [myDZ, rivalDZ] = [dzs[myId], dzs[rivalId]];

  return (
    <div > {/*Column */}
      <p>Deckcolumn</p>
      <p>player: {myId}</p>
      <p>rivalPlayer: {rivalId}</p>
      <CardComponent>
        {rivalDeck.cards.length}
      </CardComponent>
      <CardComponent>
        {rivalDZ.length}
      </CardComponent>
      <p>Circulo</p>
      <CardComponent>
        {myDZ.length}
      </CardComponent>
      <CardComponent>
        {myDeck.cards.length}
      </CardComponent>
    </div>
  )
}
export default DeckColumn;

// ids={[myID, rivalID]}
// decks={props.G.deck}
// dzs={props.G.destroyZone}
// out={props.G.out}
// selection={isSelected}
// highlight={setHighlightCard}
// menu={[deckMenu, dzMenu, oogMenu]}