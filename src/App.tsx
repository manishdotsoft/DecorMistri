import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import Dashboard from "./pages/Dashbord/Dashbord";
import ForgetPassword from "./pages/ForgetPage/ForgotPassword";
import SignUpForm from "./pages/SignUp/SignUp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/dashbord" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
