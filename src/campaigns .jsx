// src/pages/Homepage.jsx
import React from "react";
import CampaignCard from "./components/CampaignCard";

const campaigns = [
  {
    brand: "Nike",
    payout: "Barter",
    hired: 5,
    slots: 10,
    image: "./src/assets/img/Nike.png",
    description: "Collaborate with Nike and promote our new collection.",
  },
  {
    brand: "Apple",
    payout: "Fixed Pay",
    hired: 3,
    slots: 5,
    image: "./src/assets/img/apple.webp",
    description: "Be a part of Apple's latest marketing campaign.",
  },
  

  {
    brand: "Netflix",
    payout: "Fixed Pay",
    hired: 2,
    slots: 5,
    image: "./src/assets/img/facebook.png",
    description: "Be a part of Apple's latest marketing campaign.",
  },

  {
    brand: "Facebook",
    payout: "Fixed Pay",
    hired: 2,
    slots: 5,
    image: "./src/assets/img/Netflix.jpg",
    description: "Be a part of Apple's latest marketing campaign.",
  },

  
];

const Homepage = () => {
  return (
    <div className="p-5 mb-24 mt-16">
        <p className="text-center w-full text-blue-500 font-semibold mb-4">Engage with Top Brands: Explore Active Campaigns Today!</p>
      <h1 className="text-4xl w-full text-center font-semibold mb-9">Active Campaigns</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {campaigns.map((campaign, index) => (
          <CampaignCard key={index} {...campaign} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
