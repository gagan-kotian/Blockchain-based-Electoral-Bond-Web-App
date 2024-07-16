import { useState } from "react";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";

const Donate = ({ state }) => {
  const { campaignId } = useParams(); // Retrieve campaignId from URL
  const [donationAmount, setDonationAmount] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleDonate = async (e) => {
    e.preventDefault();

    // Destructure contract from state
    const { contract } = state;

    // Validate contract and campaignId
    if (!contract || !campaignId) {
      setError("Contract not initialized or missing campaign ID.");
      return;
    }

    try {
      // Convert donation amount to wei
      const amountInWei = ethers.parseEther(donationAmount);

      // Call donateToCampaign function on the contract
      const tx = await contract.donateToCampaign(campaignId, {
        value: amountInWei,
      });

      // Wait for transaction to be mined
      await tx.wait();

      // Update success message and clear form
      setSuccess(`Donation of ${donationAmount} ETH successful!`);
      setError(null);
      setDonationAmount("");
    } catch (error) {
      console.error("Error donating to campaign:", error);
      setError(`Failed to donate: ${error.message}`);
      setSuccess(null);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">
        Donate to Campaign ID: {campaignId}
      </h2>
      <form onSubmit={handleDonate} className="bg-gray-800 p-6 rounded-lg">
        <div className="mb-4">
          <label htmlFor="donationAmount" className="block text-gray-400">
            Donation Amount (ETH):
          </label>
          <input
            type="number"
            id="donationAmount"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter Donation Amount in ETH"
            required
          />
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {success && <div className="text-green-500 mb-4">{success}</div>}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
          disabled={!donationAmount || !state.contract}
        >
          Donate
        </button>
      </form>
    </div>
  );
};

export default Donate;
