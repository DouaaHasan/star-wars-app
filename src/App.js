import React, { Fragment } from "react";
import FilmsList from "./components/FilmsList";
// assets
import bg from "./assets/dark.jpg";

const App = () => (
  <Fragment>
    <header className="App-header">
      <h1>Star Wars Movies</h1>
    </header>
    <main
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "100%",
      }}
    >
      <FilmsList />
    </main>
  </Fragment>
);

export default App;
