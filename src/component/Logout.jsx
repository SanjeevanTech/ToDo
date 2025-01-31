import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { AuthContext } from "../util/AuthContext";

const LogoutButton = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout(); 
    navigate("/"); 
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
    >
      <span className="hidden sm:inline-block mr-2">Logout</span>
      <LogoutIcon />
    </button>
  );
};

export default LogoutButton;
