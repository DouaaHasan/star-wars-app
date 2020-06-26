import React, { useContext } from "react";
import "./Header.scss";
// context
import { AppContext } from "../context/AppContext";

const Header = () => {
  const { setTitleClicked } = useContext(AppContext);
  return (
    <header className="header-wrap" onClick={() => setTitleClicked(false)}>
      <h1>Star Wars Movies</h1>
    </header>
  );
};

export default Header;
