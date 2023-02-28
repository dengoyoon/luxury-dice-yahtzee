import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Game from "./pages/game";
import { Header } from "./shared/components";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <section>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/game" element={<Game />}></Route>
        </Routes>
      </section>
    </BrowserRouter>
  );
}
