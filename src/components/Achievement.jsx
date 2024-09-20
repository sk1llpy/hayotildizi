import React, { useState, useEffect } from 'react';

const AchievementCard = ({ title, image, description }) => {
  return (
    <div className="bg-[#F6FBE9] border border-[#E5F5BD] p-4 lg:p-10 h-full rounded-[10px]">
      <div className="flex items-center space-x-[10px]">
        <img src={image} alt="" className="bg-[#29A624] p-[5px] w-[28px] h-[28px] rounded-[5px]" />
        <p>{title}</p>
      </div>
      <p className="mt-[10px] lg:mt-5 text-xs lg:text-[15px] text-[#5E5E5E]">
        {description}
      </p>
    </div>
  );
};

export default AchievementCard;