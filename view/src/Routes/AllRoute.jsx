import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Auth/Login";
import { Register } from "../pages/Auth/Register";
import { Price } from "../pages/other/Price";
import { Features } from "../pages/other/Features";

export const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<Price />} path="/prices" />
        <Route element={<Features />} path="/features" />
      </Routes>
    </div>
  );
};
