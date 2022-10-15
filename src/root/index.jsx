import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="/properties" element={<h1>Properies</h1>} />
          <Route path="/properties" element={<h1>Properies</h1>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Root;
