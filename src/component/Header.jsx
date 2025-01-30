import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

import { AuthContext } from "../util/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout(); // Log out the user
    navigate("/"); 
  };

  return (
    <header className="bg-blue-500 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <span className="text-xl font-bold">ToDo App</span>
        
        <button
          onClick={handleLogout}
          className="flex items-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          {/* On larger screens, show 'Logout' text. On small screens, show only the icon */}
          <span className="hidden sm:inline-block mr-2">Logout</span>
          <LogoutIcon />
        </button>
      </nav>
    </header>
  );
};

export default Header;
