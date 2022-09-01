// routes
import React from "react";
import { Route, Routes } from "react-router-dom";
import TopNav from "../Components/TopNav";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

const RoutePage = () => {
  return (
    <>
      <TopNav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </>
  );
};

export default RoutePage;
