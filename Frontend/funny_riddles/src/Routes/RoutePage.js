// routes
import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../Components/AdminPage";
import GetRiddles from "../Components/GetRiddles";
import TopNav from "../Components/TopNav";
import Login from "../Pages/Login";
import Riddles from "../Pages/Riddles";
import Signup from "../Pages/Signup";

const RoutePage = () => {
  return (
    <>
    <TopNav/>
      <Routes>
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path='/riddle/admin' element={<GetRiddles/>}/>
        <Route path="/riddle/create" element={<AdminPage />} />
        <Route path="/riddles" element={<Riddles />} />
      </Routes>
    </>
  );
};

export default RoutePage;
