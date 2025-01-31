import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Toaster from "react-hot-toast";
import { AuthContext } from "../util/AuthContext";
import VisibilityIcon from "@mui/icons-material/Visibility"; // Icon for showing password
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"; // Icon for hiding password

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      login(); // Authenticate the user
      Toaster.success("Login successful!");
      navigate("/home");
    } else {
      Toaster.error("Invalid username or password");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"} 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 pr-10 border border-gray-300 rounded-md"
          />

          {password && (
            <button
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
            >
              {showPassword ? (
                <VisibilityOffIcon className="text-gray-500" /> 
              ) : (
                <VisibilityIcon className="text-gray-500" /> 
              )}
            </button>
          )}
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;