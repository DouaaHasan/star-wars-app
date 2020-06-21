import React, { useState, useEffect, useCallback, Fragment } from "react";
// libraries & packages
import axios from "axios";
import Film from "./Film";
// components

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

      <div className="filmList-parent">
        {!isLoading &&
          films.map((f) => (
            <div className="film-item" key={f.episode_id}>
              <Film film={f} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default FilmsList;
