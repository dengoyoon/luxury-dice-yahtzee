import React, { useState } from "react";
import { Dice } from "../Dice";

import "./stage.scss";

const getDiceNumber = () => Math.floor((Math.random() * 6) + 1);

const getRandomDices = (number) => 
  [...Array(number === 0 ? 5 : number)].map(_ => getDiceNumber()); 

const useDice = () => {
  const [rollableDices, setRollableDices] = useState([]);
  const [keepedDices, setKeepedDices] = useState([]);

  const rollDices = () => setRollableDices(getRandomDices(rollableDices.length));

  const keepDice = (selectedIndex, selectedNumber) => {
    setRollableDices(rollableDices.filter((_, index) => index !== selectedIndex));
    setKeepedDices(keepedDices.concat(selectedNumber));
  };

  const releaseDice = (selectedIndex, selectedNumber) => {
    setKeepedDices(keepedDices.filter((_, index) => index !== selectedIndex));
    setRollableDices(rollableDices.concat(selectedNumber));
  };

  return { rollableDices, keepedDices, rollDices, keepDice, releaseDice };
}

export function Stage() {
  const {rollableDices, keepedDices, rollDices, keepDice, releaseDice} = useDice();

  return (<div className="stage">
    <div>주사위를 선택해주세요.</div>
    <ul className="stage__dices flex">
      {rollableDices.map((diceNumber, index) => 
        <li key={index}>
          <Dice 
            number={diceNumber}
            onClick={() => keepDice(index, diceNumber)}/>
        </li>)}
    </ul>
    <div>고른 주사위 목록입니다.</div>
    <ul className="stage__dices flex">
      {keepedDices.map((diceNumber, index) => 
        <li key={index}>
          <Dice 
            number={diceNumber}
            onClick={() => releaseDice(index, diceNumber)}/>
        </li>)}
    </ul>
    <button type="button" onClick={rollDices}>Roll</button>
  </div>);
}