import React from "react";

import one from "img/one.png";
import two from "img/two.png";
import three from "img/three.png";
import four from "img/four.png";
import five from "img/five.png";
import six from "img/six.png";

import "./dice.scss";

export function Dice({number}) {
  const diceImages = [one, two, three, four, five, six];

  return (<img className="dice" src={diceImages[number - 1]}/>)
}