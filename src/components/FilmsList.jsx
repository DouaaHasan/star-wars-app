import React, { useState, useEffect, useCallback, useContext } from "react";
import "./FilmsList.scss";
// libraries & packages
import axios from "axios";
// components
import FilmTitle from "./FilmTitle";

const FilmsList = () => {
  const filmsURL = "https://swapi.dev/api/films/";
  //  state
  const [films, setFilms] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const fetchFilms = useCallback(async () => {
    setLoading(true);
    try {
      const fetched = await axios.get(filmsURL);
      setFilms(fetched.data.results);
      setLoading(false);
    } catch (err) {
      setErrMsg(err.message);
      setLoading(false);
    }
  }, [setLoading, setFilms]);

  useEffect(() => {
    fetchFilms();
  }, [fetchFilms]);

  return (
    <div className="filmList-wrap">
      {errMsg && <div className="err">{errMsg}</div>}

      <div className="filmList-container">
        {isLoading ? (
          <h2>LOADING...</h2>
        ) : (
          films.map((f) => (
            <FilmTitle
              key={f.episode_id}
              className="titles-parent"
              title={f.title}
              film={f}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default FilmsList;
