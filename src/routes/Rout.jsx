import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar;";
import CategotyHeader from "../components/CategotyHeader";
import Footer from "../components/Footer";
import CurrentCondition from "../components/CurrentCondition";

export default function Rout() {
  return (
    <>
      <Navbar />
      <CategotyHeader />
      <Routes>
        <Route path="/" element={<CurrentCondition />} />
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
    </>
  );
}
