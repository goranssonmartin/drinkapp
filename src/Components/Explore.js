import React, { useState } from "react";
import drinksJSON from "../Data/drinks.json";
import { useHistory } from "react-router-dom";
import "../Styling/Explore.css";

function Explore() {
  let history = useHistory();
  const [searchWord, updateSearchWord] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = document.getElementById("searchInput").value;
    updateSearchWord(searchValue);
  };

  let filteredResults = drinksJSON.cocktails.filter((cocktail) =>
    cocktail.name.includes(searchWord)
  );

  const handleDrinkClick = (index) => {
    history.push("/explore/" + index.toString());
  };

  return (
    <div>
      <h1 className="headerText">Find your favorite drink</h1>
      <form onSubmit={handleSubmit}>
        <input id="searchInput" name="searchInput"></input>
        <button type="submit">Search</button>
      </form>
      <div id="drinksContainer">
      {searchWord &&
        filteredResults.length > 0 &&
        filteredResults.map((cocktail) => (
          <div
            key={cocktail.name}
            onClick={() =>
              handleDrinkClick(
                drinksJSON.cocktails.findIndex(
                  (item) => item.name === cocktail.name
                )
              )
            }
            className="drinksItem"
          >
            <p>Name: {cocktail.name}</p><br/>
            <img src={cocktail.image} alt={cocktail} />
          </div>
        ))}
      {searchWord && filteredResults.length === 0 && <p>No drinks found</p>}
      </div>
    </div>
  );
}
export default Explore;
