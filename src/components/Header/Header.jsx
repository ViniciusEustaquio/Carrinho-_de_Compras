import React from "react";
import "./Header.css";
import SearchBar from "../SeachBar/SeachBar";
import ButtonCar from "../Button_Car/ButtonCar";


function Header() {
  return (
    <header className="header">
      <div className="container">
        < SearchBar />
        <ButtonCar />
      </div>
    </header>
  );
}

export default Header;
