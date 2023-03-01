import React, { useState } from "react";
import "./score-table.scss";

const useTurn = (initTurn = 1) => {
  const [turn, setTurn] = useState(initTurn);
  const addTurn = () => setTurn(turn + 1);

  return [turn, addTurn];
};

const upperSection = [
  "Aces",
  "Twos",
  "Threes",
  "Fours",
  "Fives",
  "Sixes"
];

const lowerSection = [
  "3 of a kind",
  "4 of a kind",
  "Full House",
  "Small Straight",
  "Large Straight",
  "Yahtzee"
];

export function ScoreTable() {
  const [turn, addTurn] = useTurn();
  return (
    <div className="paper">
      <h2 className="turn">Turn {turn} / 13</h2>
      <table 
        className="score-table"
        border={1}
        cellPadding={10}
        cellSpacing={0}>
        <thead>
          <tr align="center">
            <td width={110}></td>
            <th width={60}>Me</th>
            <th width={60}>Enemy</th>
          </tr>
        </thead>
        <tbody>
          { [...upperSection, ...lowerSection].map(
            (name, index) => (
              <tr key={index} align="center">
                <th align="left">{name}</th>
                <td></td>
                <td></td>
              </tr>))
            }
        </tbody>
      </table>
    </div>
  );
}