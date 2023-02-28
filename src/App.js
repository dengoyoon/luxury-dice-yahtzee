import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Game from "./pages/game";
import { Header } from "./shared/components";
import "./App.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/game" element={<Game />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
