import React, { useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import translation from '../translations/translation.json';
import { LanguageContext } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';


const IllnessCard = ({ id, title, image, description }) => {
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translation[language];

  return (
    <div className="bg-white border border-[#E9E9E9] p-4 lg:p-10 lg:pb-6 h-full rounded-[10px] shadow">
        <div className='flex items-center space-x-[10px]'>
            <img src={image} alt="" className='size-10 lg:size-16'/>
            <p>{ t.illnesses[`${id}`].title }</p>
        </div>
        <p className='mt-[10px] lg:mt-5 text-xs lg:text-[15px] text-[#5E5E5E] mb-4'>
            { t.illnesses[`${id}`].description }
        </p>
        <Link to={`/illness/${id}`} className='text-[#29A624] text-xs lg:text-base flex items-center font-semibold space-x-2'>
            { t.buttons.more } <span className='ml-[5px]'>{FaArrowRight()}</span>
        </Link>
    </div>
  );
};

export default IllnessCard;