import React, { useState } from "react";

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
    <div>
      <h3>Turn {turn}/13</h3>
      <table 
        border={1}
        cellSpacing={0}>
        <thead>
          <tr align="center">
            <td></td>
            <th>Me</th>
            <th>Enemy</th>
          </tr>
        </thead>
        <tbody>
          { [...upperSection, ...lowerSection].map(
            (name, index) => (
              <tr key={index} align="center">
                <th>{name}</th>
                <td>3</td>
                <td>1</td>
              </tr>))
            }
        </tbody>
      </table>
    </div>
  );
}