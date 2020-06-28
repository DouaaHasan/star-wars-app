import React, { useState, useCallback, useEffect, useContext } from "react";
import "./Film.scss";
// libraries & packages
import axios from "axios";
// context
import { AppContext } from "../context/AppContext";

const Film = () => {
  // context
  const { film, setTitleClicked } = useContext(AppContext);
  const { director, opening_crawl, producer, title, release_date, characters } = film;
  // state
  const [, setLoading] = useState(false);
  const [, setErrMsg] = useState("");
  const [charList, setCharList] = useState([]);
  const [planets, setPlanets] = useState([]);

  // methods
  const fetchURL = useCallback(
    async (url, func) => {
      setLoading(true);
      try {
        const fetched = await axios.get(url);
        func((pre) => [...pre, fetched.data]);
        setLoading(false);
      } catch (err) {
        setErrMsg(err.message);
        setLoading(false);
      }
    },
    [setLoading, setErrMsg],
  );

  // fill CharList
  const fillChars = useCallback(() => {
    characters.map((c) => fetchURL(c, setCharList));
  }, [characters, fetchURL, setCharList]);

  // fill planets
  const fillPlanets = useCallback(() => {
    charList.map((p) => fetchURL(p.homeworld, setPlanets));
  }, [charList, fetchURL]);

  useEffect(() => {
    fillChars();
    fillPlanets();
  }, [fillChars, fillPlanets]);

  return (
    <div className="film-wrap">
      <h1 className="film-title">{title}</h1>
      <p className="crawl">{opening_crawl}</p>
      <div className="credits-wrap">
        <div>
          <hr />
          <p className="date">
            <span className="pre">Date:</span> {release_date}
          </p>
          <p className="date">
            <span className="pre">Director:</span> {director}
          </p>
          <p className="date">
            <span className="pre">Producer:</span> {producer}
          </p>
        </div>
        <button onClick={() => setTitleClicked(false)}>Back</button>
      </div>

      <div className="chars-wrap">
        {charList.length > 0 &&
          charList.map((c, i) => (
            <div key={i} className="char">
              <div>
                <span className="pre">Name: </span>
                {c.name}
              </div>
              <div>
                <span className="pre">Planet: </span>
                {/* {planets[i]} */}
                hi
              </div>
              <div>
                <span className="pre">Starships: </span>
                {c.starships}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Film;
