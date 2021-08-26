import { randomInt } from "../utils/help";

export const setupDeck = (size, ctx) => {
  const deck = [];
  for (let i = 0; i < ctx.numPlayers; i++) {
    deck.push([]);
    for (let j = 0; j < size; j++) {
      deck[i].push(randomInt(100, ctx));
    }
  }

  return deck;
};

export const setupProps = (players) => {
  const prop = [];
  for (let i = 0; i < players; i++) {
    prop.push([]);
  }
  return prop;
};
