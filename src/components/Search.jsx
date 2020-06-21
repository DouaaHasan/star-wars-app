import React from "react";

const Search = () => {
  return (
    <section className="wrap">
      <form>
        <input
          type="text"
          placeholder="Search a movie..."
          className="searchbox"
        />
        <button>Search</button>
      </form>
    </section>
  );
};

export default Search;
