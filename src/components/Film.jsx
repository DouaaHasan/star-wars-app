import React, { useState, useCallback, useEffect, useContext } from "react";
import "./Film.scss";
// libraries & packages
import axios from "axios";
// context
import { AppContext } from "../context/AppContext";

const Film = () => {
  // context
  const { film, setTitleClicked } = useContext(AppContext);

  const {
    created,
    director,
    edited,
    episode_id,
    opening_crawl,
    planets,
    producer,
    species,
    starships,
    title,
    url,
    vehicles,
    release_date,
  } = film;

  return (
    <div className="credits">
      <div className="headings">
        <h1 className="film-title">{title}</h1>
      </div>
      <p className="crawl">{opening_crawl}</p>
      <p className="date">Date: {release_date}</p>
      <p className="date">Director: {director}</p>
      <p className="date">Producer: {producer}</p>
      <button className="button" onClick={() => setTitleClicked(false)}>
        Back
      </button>
    </div>
  );
};

export default Film;
