import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const AchievementCard = ({ title, description }) => {
  return (
    <div className="bg-[#F6FBE9] border border-[#E5F5BD] p-4 lg:p-10 h-full rounded-[10px]">
      <div className="flex items-center space-x-[10px]">
        <div className='bg-[#29A624] p-[5px] w-[28px] h-[28px] rounded-[5px]'></div>
        <p>
          <Typewriter
            words={[title]}
            loop={1}
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      </div>
      <p className="mt-[10px] lg:mt-5 text-xs lg:text-[15px] text-[#5E5E5E]">
        <Typewriter
            words={[description]}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={30}
            deleteSpeed={50}
            delaySpeed={1000}
          />
      </p>
    </div>
  );
};

export default AchievementCard;