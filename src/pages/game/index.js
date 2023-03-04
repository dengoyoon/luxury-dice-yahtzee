import React, { useState } from "react";
import { Chat } from "./components/Chat";
import { ScoreTable } from "./components/ScoreTable";
import { Stage } from "./components/Stage";

export default function Game() {
  return (
    <div className="game flex justify-content-space-between">
      <Chat />
      <Stage />
      <ScoreTable />
    </div>
  );
}
