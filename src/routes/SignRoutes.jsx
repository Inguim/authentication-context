import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import NoMatch from "../pages/NoMatch";

const SignRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="*"
          element={<NoMatch />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default SignRoutes;
