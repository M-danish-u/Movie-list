import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../Pages/Authentication/SignIn";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Authentication/SignUp";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
