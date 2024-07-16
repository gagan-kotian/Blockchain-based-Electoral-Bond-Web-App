import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import CreateCampaign from "./components/CreateCampaign";
import DisplayCampaign from "./components/DisplayCampaign";
import abi from "./contract/May.json";
import HomePage from "./components/Home";
import Sidebar from "./components/Sidebar";
import Donate from "./components/Donate";
import DisplayDonators from "./components/DisplayDonators";
import Info from "./components/Info";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x0e32839B72AD8589F633F1Ce9ad94d13D1438630";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );

          setState({ provider, signer, contract });
        } else {
          alert("Please install MetaMask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);

  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white flex">
        <div className="flex-1 p-8">
          <Routes>
            <Route
              path="/"
              element={
                <div className="grid grid-cols-1 lg:grid-cols-1 lg:grid-rows-2 gap-8">
                  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md p-6 text-center">
                    <HomePage />
                  </div>
                </div>
              }
            />
            <Route
              path="/create-campaign"
              element={
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Create a PoliticalParty Campaign
                  </h2>
                  <CreateCampaign state={state} />
                </div>
              }
            />
            <Route
              path="/display-campaigns"
              element={
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Display Political Parties
                  </h2>
                  <DisplayCampaign state={state} />
                </div>
              }
            />
            <Route
              path="/donate/:campaignId"
              element={
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Display Donations
                  </h2>
                  <Donate state={state} />
                </div>
              }
            />
            <Route
              path="/view-donations/:campaignId"
              element={
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Display Donators
                  </h2>
                  <DisplayDonators state={state} />
                </div>
              }
            />
            <Route
              path="/info"
              element={
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">Info</h2>
                  <Info state={state} />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
