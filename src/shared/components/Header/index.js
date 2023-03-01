import React from "react";
import "./header.scss";

export function Header() {
  return (
    <div className="header">
      <div className="container flex align-items-center">
        <div className="header__logo">Luxury Dice!</div>
        <button type="button" className="header__game-button">
          Game
        </button>
        <button type="button" className="header__profile-button">
          Profile
        </button>
      </div>
    </div>
  );
}
