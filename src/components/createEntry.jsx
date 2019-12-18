import React from "react";
import Entry from "./Entry";

function createEntry(gameCard) {
  return (
    <Entry
      key={gameCard.id}
      emoji={gameCard.name}
      name={gameCard.price}
      description={gameCard.meaning}
    />
  );
}

export default createEntry;
