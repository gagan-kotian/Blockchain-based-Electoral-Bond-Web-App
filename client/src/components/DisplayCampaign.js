import { useState, useEffect } from "react";
import { ethers } from "ethers";
import BigNumber from "bignumber.js";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const DisplayCampaign = ({ state }) => {
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchCampaigns = async () => {
      const { contract } = state;
      if (!contract) return;

      try {
        const allCampaigns = await contract.getCampaigns();
        setCampaigns(allCampaigns);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    fetchCampaigns();
  }, [state]);

  const handleDonate = (campaignId) => {
    navigate(`/donate/${campaignId}`);
  };

  const handleViewDonations = (campaignId) => {
    navigate(`/view-donations/${campaignId}`);
  };

  const handleCreateCampaign = () => {
    navigate("/create-campaign");
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="container mx-auto mt-8">
        <div className="flex justify-end mb-4">
          <button
            onClick={handleCreateCampaign}
            className="bg-orange-500 text-gray-900 py-2 px-4 rounded hover:bg-orange-600"
          >
            Create Campaign
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.length === 0 ? (
            <div className="text-center text-gray-400">No campaigns found</div>
          ) : (
            campaigns.map((campaign, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{campaign.title}</h3>
                <p className="text-gray-400 mb-4">{campaign.description}</p>
                <p className="text-gray-400 mb-4">Owner: {campaign.owner}</p>
                <p className="text-gray-400 mb-4">
                  Target: {new BigNumber(campaign.target).toFormat(18)} ETH
                </p>
                <p className="text-gray-400 mb-4">
                  Amount Collected:{" "}
                  {new BigNumber(campaign.amountCollected).toFormat(18)} ETH
                </p>
                <p className="text-gray-400 mb-4">
                  {/* Deadline: {new Date(campaign.deadline * 1000).toLocaleString()} */}
                </p>
                <div className="flex justify-between">
                  <button
                    onClick={() => handleDonate(index)} // Use the index as the campaign ID
                    className="bg-yellow-500 text-gray-900 py-2 px-4 rounded hover:bg-yellow-600"
                  >
                    Donate
                  </button>
                  <button
                    onClick={() => handleViewDonations(index)} // Use the index as the campaign ID
                    className="bg-green-500 text-gray-900 py-2 px-4 rounded hover:bg-green-600"
                  >
                    View Donations
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayCampaign;
