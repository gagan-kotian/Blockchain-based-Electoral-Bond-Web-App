import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUnorderedList,
  AiOutlineInfoCircle,
} from "react-icons/ai";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true); // State to manage sidebar open/close

  const handleClick = (path) => {
    navigate(path);
    setIsOpen(false); // Close sidebar after navigation (if needed)
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar state
    console.log("Sidebar toggled:", isOpen); // Debugging: log state changes
  };

  return (
    <div className={`flex flex-col lg:w-64 ${isOpen ? "min-h-screen" : ""}`}>
      <div
        className={`bg-gray-800 text-white flex flex-col p-4 ${
          isOpen ? "h-full overflow-y-auto" : "h-auto lg:h-screen"
        }`}
      >
        <div className="flex justify-between items-center mb-4 lg:hidden">
          <h1 className="text-2xl font-bold">
            Blockchain Based Electoral Bond Funding
          </h1>
          <button
            onClick={toggleSidebar}
            className="text-gray-500 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-bold">Blockchain Electoral Bonds</h1>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold flex items-center"
                : "text-white hover:text-gray-400 flex items-center"
            }
            onClick={() => handleClick("/")}
          >
            <AiOutlineHome className="w-6 h-6 mr-2" />
            Home
          </NavLink>
          <NavLink
            to="/create-campaign"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold flex items-center"
                : "text-white hover:text-gray-400 flex items-center"
            }
            onClick={() => handleClick("/create-campaign")}
          >
            <AiOutlineFundProjectionScreen className="w-6 h-6 mr-2" />
            Create Campaign
          </NavLink>
          <NavLink
            to="/display-campaigns"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold flex items-center"
                : "text-white hover:text-gray-400 flex items-center"
            }
            onClick={() => handleClick("/display-campaigns")}
          >
            <AiOutlineUnorderedList className="w-6 h-6 mr-2" />
            Display Parties
          </NavLink>
          <NavLink
            to="/info"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold flex items-center"
                : "text-white hover:text-gray-400 flex items-center"
            }
            onClick={() => handleClick("/info")}
          >
            <AiOutlineInfoCircle className="w-6 h-6 mr-2" />
            Info
          </NavLink>
        </div>
        <div>{/* Add additional sidebar elements here, if needed */}</div>
      </div>
    </div>
  );
};

export default Sidebar;
