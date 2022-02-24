import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "pages/home";
import Profile from "pages/profile";


export default function Rotas() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </main>
    </>
  );
}
