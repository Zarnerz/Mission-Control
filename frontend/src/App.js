import React from "react";
import Header from "./global/header";
import Card from "./global/card";
import Blurb from "./global/blurb";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Card title="Card" />
      <Blurb title="Blurb" blurb="blurby mcblurberson" />
    </div>
  );
}

export default App;
