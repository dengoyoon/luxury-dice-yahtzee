import React, { useState } from "react";
import { ScoreTable } from "./components/ScoreTable";
import { Stage } from "./components/Stage";

export default function Game() {
  return (
    <div className="game flex justify-content-center">
      <Stage />
      <ScoreTable />
    </div>
  );
}
