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
  const charList = [];
  const [, setLoading] = useState(false);
  const [, setErrMsg] = useState("");

  // methods
  const fetchChars = useCallback(async () => {
    setLoading(true);

    characters.map(async (c) => {
      try {
        const fetched = await axios.get(c);
        charList.push(fetched.data);
        setLoading(false);
      } catch (err) {
        setErrMsg(err.message);
        setLoading(false);
      }
    });
  }, [setLoading, characters, charList]);

  console.log(charList);
  useEffect(() => {
    fetchChars();
  }, [fetchChars]);

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
        {characters.map((c) => (
          <div key={c} className="char">
            {c}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Film;
