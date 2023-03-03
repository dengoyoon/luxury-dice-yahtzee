import React, { useState } from "react";
import { upperSection, lowerSection } from "../../constants/scoreSections";

import "./score-table.scss";

const useTurn = (initTurn = 1) => {
  const [turn, setTurn] = useState(initTurn);
  const increaseTurn = () => turn !== 13 ? setTurn(turn + 1) : 13;

  return [turn, increaseTurn];
};

export function ScoreTable() {
  const [turn, increaseTurn] = useTurn();
  return (
    <div className="paper">
      <h2 className="turn">Turn {turn} / 13</h2>
      <table 
        className="score-table"
        border={2}
        cellPadding={10}
        cellSpacing={0}>
        <thead>
          <tr align="center">
            <td width={110}></td>
            <th width={50}>Me</th>
            <th width={50}>Enemy</th>
          </tr>
        </thead>
        <tbody>
          {[...upperSection, ...lowerSection].map(
            (name, index) => (
              <tr key={index} align="center">
                <th align="left">{name}</th>
                <td></td>
                <td></td>
              </tr>)
            )
          }
        </tbody>
      </table>
    </div>
  );
}