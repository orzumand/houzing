import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import PropertesPage from "../pages/Properties";

export const Root = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/properties" element={<PropertesPage />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Root;
