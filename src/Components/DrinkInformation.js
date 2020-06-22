import React from "react";
import drinksJSON from "../Data/drinks.json";

function DrinkInformation(props) {
  const drinkId = props.match.params.id;
  console.log(drinkId);
  const getCorrectData = () => {
    if (drinkId > drinksJSON.cocktails.length - 1) {
      return <p>Invalid drink</p>;
    } else {
      const drinkObject = drinksJSON.cocktails[drinkId];
      return (
        <div>
          <p>{drinkObject.name}</p>
          <img src={drinkObject.image} alt={drinkObject.name} />
          <p>{drinkObject.preparation}</p>
        </div>
      );
    }
  };

  return <div>{getCorrectData()}</div>;
}

export default DrinkInformation;
