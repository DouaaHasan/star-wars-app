import React from "react";
import "./default.scss";
// context
import { AppContextProvider } from "./context/AppContext";
// assets
import bg2 from "./assets/1b504e7a2553be9c2d00d1af501680a5.jpg";
// components
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";

const App = () => (
  <div
    className="App"
    style={{
      backgroundImage: `url(${bg2})`,
      backgroundSize: "cover",
      backgroundPositionX: "40%",
    }}
  >
    <AppContextProvider>
      <Header />
      <Main />
      <Footer />
    </AppContextProvider>
  </div>
);

export default App;
