// src/components/CampaignCard.jsx
import React from "react";

const CampaignCard = ({ brand, payout, hired, slots, image, description }) => {
  const progress = (hired / slots) * 100;

  return (
    <div className="bg-blue-50 shadow-md rounded-lg p-4 flex flex-col">
      <img
        src={image || "placeholder.jpg"}
        alt={`${brand} campaign`}
        className="rounded-md mb-4 cursor-pointer w-full h-40 bg-contain"
      />
      <h2 className="font-bold text-blue-950 text-lg">{brand}</h2>
      <p className="text-sm  text-gray-600">{description}</p>
      <p className="mt-2">
        <strong className="text-blue-950">Payout:</strong> {payout}
      </p>
      <div className="mt-2">
        <strong className="text-blue-950">Hiring Progress:</strong>
        <div className="w-full bg-gray-300 rounded-full h-2 mt-1">
          <div
            className="bg-blue-900 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm mt-1">{hired} of {slots} slots filled</p>
      </div>
      <div className="pt-3 w-100">
        <button className="px-3 py-2 bg-blue-800 rounded-md text-white border-none">Enroll Now</button>
      </div>
      
    </div>
  );
};

export default CampaignCard;
