import React from "react";
import drinksJSON from "../Data/drinks.json";
import { useHistory } from "react-router-dom";

function DrinkInformation(props) {    
  let history = useHistory();
  const drinkId = props.match.params.id;
  const getCorrectData = () => {
    if (drinkId > drinksJSON.cocktails.length - 1) {
      return <h1>Invalid drink</h1>;
    } else {
      const drinkObject = drinksJSON.cocktails[drinkId];
      return (
        <div>
          <h1>{drinkObject.name}</h1>
          <img src={drinkObject.image} alt={drinkObject.name} />
          <p>{drinkObject.preparation}</p>
        </div>
      );
    }
  };

  const handleGoBack=()=>{
      history.push("/explore");
  }

  return <div>{getCorrectData()}<button onClick={handleGoBack}>Go Back</button></div>;
}

export default DrinkInformation;
