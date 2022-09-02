// routes
import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../Components/AdminPage";
import TopNav from "../Components/TopNav";
import Login from "../Pages/Login";
import Riddles from "../Pages/Riddles";
import Signup from "../Pages/Signup";

const RoutePage = () => {
  return (
    <>
      <Routes>
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/riddles" element={<Riddles />} />
      </Routes>
    </>
  );
};

export default RoutePage;
