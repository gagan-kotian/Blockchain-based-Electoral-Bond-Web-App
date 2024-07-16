import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useParams } from "react-router-dom";

const DisplayDonators = ({ state }) => {
  const { campaignId } = useParams();
  const [donators, setDonators] = useState([]);
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDonators = async () => {
      const { contract } = state;
      if (!contract || !campaignId) return;

      try {
        // Call the getDonators function from the contract
        const [donatorsArray, donationsArray] =
          await contract.getDonators(campaignId);

        // Update state with fetched data
        setDonators(donatorsArray);
        setDonations(donationsArray);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching donators:", error);
        setError("Error fetching donators. See console for details.");
        setLoading(false); // Set loading to false on error
      }
    };

    fetchDonators();
  }, [state, campaignId]);

  if (loading) {
    return <div className="text-gray-400">Loading donators...</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">
        Donators for Campaign ID: {campaignId}
      </h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {donators.length === 0 ? (
        <div className="text-gray-400">
          No donators found for this campaign.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 text-white border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-600 px-4 py-2">Donator</th>
                <th className="border border-gray-600 px-4 py-2">
                  Donation (ETH)
                </th>
              </tr>
            </thead>
            <tbody>
              {donators.map((donator, index) => (
                <tr key={index} className="border-b border-gray-600">
                  <td className="border border-gray-600 px-4 py-2">
                    {donator}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {ethers.formatEther(donations[index])} ETH
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DisplayDonators;
