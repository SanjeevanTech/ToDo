import React from "react";
import Logout from "./Logout";  

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <span className="text-xl font-bold">ToDo App</span>
        
        <Logout /> 
      </nav>
    </header>
  );
};

export default Header;
