import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
import { navbar } from "../utils/navbar";

export const Root = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            {navbar.map((value) => {
              return (
                <Route
                  key={value.id}
                  path={value.path}
                  element={value.element}
                />
              );
            })}
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="*" element={<h2>not found</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Root;
