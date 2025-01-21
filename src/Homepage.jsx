// src/pages/Homepage.jsx
import React from "react";
import CampaignCard from "../components/CampaignCard";

const campaigns = [
  {
    brand: "Nike",
    payout: "Barter",
    hired: 5,
    slots: 10,
    image: "nike.jpg",
    description: "Collaborate with Nike and promote our new collection.",
  },
  {
    brand: "Apple",
    payout: "Fixed Pay",
    hired: 3,
    slots: 5,
    image: "apple.jpg",
    description: "Be a part of Apple's latest marketing campaign.",
  },
  // Add more campaign objects as needed
];

const Homepage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Active Campaigns</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {campaigns.map((campaign, index) => (
          <CampaignCard key={index} {...campaign} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
