import React, { useState, useCallback, useEffect, useContext } from "react";
import "./Film.scss";
// libraries & packages
import axios from "axios";
// context
import { AppContext } from "../context/AppContext";

const Film = () => {
  // context
  const {
    film,
    setTitleClicked,
    setChars,
    chars,
    planets,
    setPlanets,
    setStarships,
    starships,
    starshipsNames,
    setStarshipsNames,
  } = useContext(AppContext);
  const { director, opening_crawl, producer, title, release_date, characters } = film;
  // state
  const [, setLoading] = useState(false);
  const [, setErrMsg] = useState("");

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
    characters.map((c) => fetchURL(c, setChars));
  }, [characters, fetchURL, setChars]);

  // fill planets
  const fillPlanets = useCallback(() => {
    chars.map((c) => fetchURL(c.homeworld, setPlanets));
  }, [chars, fetchURL, setPlanets]);

  // fill starships
  const fillStarships = useCallback(async () => {
    setStarships(chars.map((c) => c.starships));
  }, [chars, setStarships]);

  // fill starshipsNames
  const fillStarshipsNames = useCallback(() => {
    const names = [];
    try {
      starships.forEach((arr) => {
        if (arr.length === 0) {
          names.push([]);
        } else {
          const tempArr = [];
          arr.map(async (ship) => {
            const fetched = await axios.get(ship);
            tempArr.push(fetched.data.name);
          });
          names.push(tempArr);
        }
        setStarshipsNames(names);
      });
    } catch (err) {
      console.log(err.message);
    }
  }, [starships, setStarshipsNames]);

  useEffect(() => {
    fillChars();
  }, [fillChars]);

  useEffect(() => {
    fillPlanets();
    fillStarships();
  }, [fillPlanets, fillStarships]);

  useEffect(() => {
    fillStarshipsNames();
  }, [fillStarshipsNames]);

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

      <h2>Characters</h2>
      <div className="chars-wrap">
        {chars.length > 0 &&
          chars.map((c, i) => (
            <div key={i} className="char" onClick={() => console.log(starshipsNames[i])}>
              <div className="half">
                <span className="pre">Name: </span>
                <div>{c.name}</div>
              </div>
              <div className="half">
                <span className="pre">Planet: </span>
                <div>{planets[i] && planets[i].name}</div>
              </div>
              <div className="half">
                <span className="pre">Starships: </span>
                <div>
                  {starshipsNames[i] && starshipsNames[i].length === 0 && <p>None</p>}

                  {starshipsNames[i] &&
                    starshipsNames[i].length > 0 &&
                    starshipsNames[i].map((s, i) => <p key={i}>{s}</p>)}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Film;
