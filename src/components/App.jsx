import React from "react";
import Entry from "./Entry";
import gameCard from "../gameCard";
import createEntry from "./createEntry";

function App() {
  return (
    <div>
      <h1>
        <span>GameTrader</span>
      </h1>
      <div className="dictionary">{gameCard.map(createEntry)}</div>
    </div>
  );
}

export default App;
