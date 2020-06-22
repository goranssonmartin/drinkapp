import React, { useState } from "react";
import drinksJSON from "../Data/drinks.json";

function Explore(props) {
  const [searchWord, updateSearchWord] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = document.getElementById("searchInput").value;
    updateSearchWord(searchValue);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="searchInput" name="searchInput"></input>
        <button type="submit">Search</button>
      </form>
      {searchWord &&
        drinksJSON.cocktails
          .filter((cocktail) => cocktail.name.includes(searchWord))
          .map((cocktail) => <p>{cocktail.name}</p>)}
    </div>
  );
}
export default Explore;
