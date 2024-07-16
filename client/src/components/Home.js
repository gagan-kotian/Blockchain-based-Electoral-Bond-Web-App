import React from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUnorderedList,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Blockchain Electoral Bonds</h1>
        <nav className="space-x-4 hidden md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold flex items-center"
                : "text-white hover:text-gray-400 flex items-center"
            }
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
          >
            <AiOutlineInfoCircle className="w-6 h-6 mr-2" />
            Info
          </NavLink>
        </nav>
        <div className="md:hidden">
          <FiMenu className="w-6 h-6" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10 text-center">
        <h2 className="text-5xl font-bold mb-4">
          Welcome to Blockchain Electoral Bonds
        </h2>
        <p className="text-xl mb-8">
          Secure, Transparent, and Efficient Political Donations.
        </p>
        <NavLink
          to="/create-campaign"
          className="bg-white text-blue-600 py-2 px-4 rounded-full font-bold transition duration-300 transform hover:scale-105"
        >
          Get Started
        </NavLink>
      </section>

      {/* Features Section */}
      <section className="p-10 bg-gray-800 text-gray-200">
        <h2 className="text-4xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Transparency</h3>
            <p>
              All transactions are recorded on the blockchain, ensuring complete
              transparency.
            </p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Security</h3>
            <p>
              Our platform leverages the security of blockchain technology to
              protect your data.
            </p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Efficiency</h3>
            <p>
              Quick and easy donation process, making political funding more
              efficient.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="p-10 bg-gray-900 text-gray-200">
        <h2 className="text-4xl font-bold text-center mb-8">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="p-6 m-4 bg-gray-800 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold mb-2">Step 1</h3>
            <p>Register and create a campaign.</p>
          </div>
          <div className="p-6 m-4 bg-gray-800 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold mb-2">Step 2</h3>
            <p>Purchase electoral bonds through our secure platform.</p>
          </div>
          <div className="p-6 m-4 bg-gray-800 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold mb-2">Step 3</h3>
            <p>Track donations and ensure transparency.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>&copy; 2024 Blockchain Electoral Bonds. All rights reserved.</p>
        <div className="mt-4">
          <NavLink
            to="/contact"
            className="text-gray-400 hover:text-white mx-2"
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/privacy"
            className="text-gray-400 hover:text-white mx-2"
          >
            Privacy Policy
          </NavLink>
          <NavLink to="/terms" className="text-gray-400 hover:text-white mx-2">
            Terms of Service
          </NavLink>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
