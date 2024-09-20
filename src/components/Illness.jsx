import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const IllnessCard = ({ id, title, image, description }) => {
  return (
    <div className="bg-white border border-[#E9E9E9] p-4 lg:p-10 lg:pb-6 h-full rounded-[10px] shadow">
        <div className='flex items-center space-x-[10px]'>
            <img src={image} alt="" className='size-10 lg:size-16'/>
            <p>{title}</p>
        </div>
        <p className='mt-[10px] lg:mt-5 text-xs lg:text-[15px] text-[#5E5E5E] mb-4'>
            {description}
        </p>
        <a href={`https://hayotildizi.uz/illnesses/${id}`} className='text-[#29A624] text-xs lg:text-base flex items-center font-semibold space-x-2'>
            Batafsil <span className='ml-[5px]'>{FaArrowRight()}</span>
        </a>
    </div>
  );
};

export default IllnessCard;