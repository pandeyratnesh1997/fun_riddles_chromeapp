// routes
import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../Components/AdminPage";
import AdminEditPage from "../Pages/AdminEditPage";
import GetRiddles from "../Components/GetRiddles";
import TopNav from "../Components/TopNav";
import Login from "../Pages/Login";
import Riddles from "../Pages/Riddles";
import Signup from "../Pages/Signup";
import PrivateRoute from "./PrivateRoute";

const RoutePage = () => {
  return (
    <>
    <TopNav/>
      <Routes>
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path='/riddle/admin' element={
            <PrivateRoute>
            <GetRiddles/>
            </PrivateRoute>
          }
        />
        <Route path="/riddle/create" element={
        <PrivateRoute>
            <AdminPage />
        </PrivateRoute>
        
        
        } />
        <Route path="/riddle/patch/:id" element={
        <PrivateRoute>
            <AdminEditPage/>
        </PrivateRoute>
        
        
        }/>
        <Route path="/" element={
            <PrivateRoute>
              <Riddles />
            </PrivateRoute>
          } 
       />
      </Routes>
    </>
  );
};

export default RoutePage;
