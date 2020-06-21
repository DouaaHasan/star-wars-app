import React, { useState, useCallback, useEffect } from "react";
// libraries & packages
import axios from "axios";

const Film = ({ film }) => {
  console.log(film);
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
    </div>
  );
};

export default Film;
