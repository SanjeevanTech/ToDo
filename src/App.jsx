import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import ProtectedRoute from "./util/ProtectedRoute";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
    <Toaster />
    </>
  );
};

export default App;