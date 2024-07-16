import { useState } from "react";
import { parseEther } from "ethers"; // Directly import parseEther
import { ethers } from "ethers"; // Import ethers for other functionalities
import Sidebar from "./Sidebar";

const CreateCampaign = ({ state }) => {
  const [formData, setFormData] = useState({
    owner: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { owner, title, description, target, deadline, image } = formData;
    const { contract } = state;

    if (!contract) {
      alert("Contract is not loaded.");
      return;
    }

    const targetInWei = parseEther(target); // Convert target to wei
    const deadlineTimestamp = Math.floor(new Date(deadline).getTime() / 1000); // Convert deadline to Unix timestamp

    try {
      const tx = await contract.createCampaign(
        owner,
        title,
        description,
        targetInWei,
        deadlineTimestamp,
        image
      );
      await tx.wait();
      alert("Campaign created successfully!");
      setFormData({
        owner: "",
        title: "",
        description: "",
        target: "",
        deadline: "",
        image: "",
      });
    } catch (error) {
      console.error("Error creating campaign:", error);
      alert("Error creating campaign. See console for details.");
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="container mx-auto mt-8 w-1/2">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-gray-800 p-8 rounded-lg"
        >
          <div>
            <label className="block text-gray-300">Owner Address</label>
            <input
              type="text"
              className="block w-full mt-1 px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-100 focus:outline-none focus:border-blue-500"
              name="owner"
              value={formData.owner}
              onChange={handleChange}
              placeholder="Enter Owner Address"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300">Title</label>
            <input
              type="text"
              className="block w-full mt-1 px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-100 focus:outline-none focus:border-blue-500"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter Title"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300">Description</label>
            <textarea
              className="block w-full mt-1 px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-100 focus:outline-none focus:border-blue-500"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter Description"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-300">Target Amount (ETH)</label>
            <input
              type="number"
              className="block w-full mt-1 px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-100 focus:outline-none focus:border-blue-500"
              name="target"
              value={formData.target}
              onChange={handleChange}
              placeholder="Enter Target Amount"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300">Deadline</label>
            <input
              type="datetime-local"
              className="block w-full mt-1 px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-100 focus:outline-none focus:border-blue-500"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300">Image URL</label>
            <input
              type="text"
              className="block w-full mt-1 px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-100 focus:outline-none focus:border-blue-500"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Enter Image URL"
              required
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={!state.contract}
          >
            Create Party Campaign
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCampaign;
