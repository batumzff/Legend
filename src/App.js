import Asset from "./asset";
import "./App.css";
import Header from "./components/Header";
import PlayerCard from "./components/Player";
import React, { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div>
      <Asset />
      <Header setSearchInput={setSearchInput} searchInput={searchInput} />
      <PlayerCard searchInput={searchInput} />
    </div>
  );
}

export default App;
