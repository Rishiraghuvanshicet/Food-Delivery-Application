import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import  EditProfile from "./pages/EditProfile";
import AdminDashBoard from "./admin/AdminDashBoard";
import AdminPage from "./admin/AdminPage";
import CartPage from "./pages/CartPage";

const App = () => {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/editprofile" element={<EditProfile/>} />
        <Route path="/homepage/cartPage" element={<CartPage/>} />
        <Route path="/adminpage" element={<AdminPage/>}/>
        <Route path="/admin/dashboard" element={<AdminDashBoard/>}/>
      </Routes>
    </Router>
  );
};

export default App;
