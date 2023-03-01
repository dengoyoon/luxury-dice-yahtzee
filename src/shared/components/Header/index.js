import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

export function Header() {
  return (
    <div className="header">
      <div className="container flex align-items-center">
        <div className="header__logo">
          <Link to="/">Luxury Dice 💫</Link>
        </div>
        <button type="button" className="header__game-button">
          <Link to="/game">Game</Link>
        </button>
        <button type="button" className="header__profile-button">
          Profile
        </button>
      </div>
    </div>
  );
}
