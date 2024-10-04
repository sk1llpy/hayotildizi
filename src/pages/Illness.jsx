import React, { useContext, useEffect, useState } from 'react';
import translation from '../translations/translation.json';
import { LanguageContext } from '../contexts/LanguageContext';
import data from '../data/data.json';
import { Link, useParams } from 'react-router-dom';
import NotFound from './NotFound';
import illnessesData from '../data/illnesses.json';
import { FaArrowRight } from 'react-icons/fa';

import JigarImage from '../assets/illnesses/page/jigar.jpg'
import SuyakImage from '../assets/illnesses/page/suyak.png'


const Illness = () => {
    const images = {
        "1": JigarImage,
        "2": SuyakImage
    }

    const { language, setLanguage } = useContext(LanguageContext);
    const t = translation[language];

    const { id } = useParams();
    const [illnessesId, setIllnessesId] = useState([]);
    const [illnessData, setIllnessData] = useState({});
    
    useEffect(() => {
        const ids = data.illnesses.map((item) => item.id);
        setIllnessesId(ids);
        setIllnessData(illnessesData[illnessId])
    }, []);
    
    const illnessId = Number(id);


    return (
        <>
            { illnessesId.includes(illnessId) ? (
                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <a href={illnessData.wiki} target='blank' className='w-[70%]'>
                            <img src={images[`${illnessId}`]} alt="" className='rounded-[10px]'/>
                        </a>
                    </div>
                    <div className="flex justify-center mt-10">
                        <div>
                            <h1 className='text-center font-bold text-[30px]'>{t['illness-page'][`${illnessId}`].title}</h1>
                            <p className='text-center mt-2'>{t['illness-page'][`${illnessId}`].description}</p>
                        </div>
                    </div>
                    <div className="flex justify-center gap-3 mt-[50px] lg:mt-0">                        
                        <a
                            href="tel:+998787777757"
                            className="bg-[#29A624] lg:mt-[20px] mt-[-20px] w-[300px] text-white inline-flex hover:bg-[#29A624]/90 border border-[#29A624] lg:leading-1 lg:!px-7 lg:py-4 items-center justify-center text-sm lg:text-base px-5 py-1.5 3lg:px-7 3lg:py-4 font-semibold rounded-md transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#29A624]"
                        >
                            {t.buttons['call-with-us']}
                        </a>
                        <Link
                            to="/"
                            className="bg-white lg:mt-[20px] mt-[-20px] w-[300px] text-[#29A624] hover:text-white inline-flex hover:bg-[#29A624] border border-[#29A624] lg:leading-1 lg:!px-7 lg:py-4 items-center justify-center text-sm lg:text-base px-5 py-1.5 3lg:px-7 3lg:py-4 font-semibold rounded-md transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#29A624]"
                        >
                            {t.buttons['go-home-page']} <span className='ml-1'>{FaArrowRight()}</span>
                        </Link>
                    </div>
                </div>
            ) : (
                <NotFound />
            )}
        </>
    );
}

export default Illness;