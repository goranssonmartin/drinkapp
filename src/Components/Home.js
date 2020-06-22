import React from "react";
import homeImage from "../Images/drinksAppHomeImage.PNG";

function Home() {
  return (
    <div>
      <h1 className="headerText">Welcome to the cocktail explorer!</h1>
      <img src={homeImage} alt="cocktails" />
    </div>
  );
}

export default Home;
