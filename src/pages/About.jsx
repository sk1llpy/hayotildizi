import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import translation from "../translations/translation.json";
import AchievementCard from "../components/Achievement";
import AboutVideo from '../assets/abuot.mp4';
import { Link } from "react-router-dom";
import data from '../data/data.json'
import AboutImage from '../assets/form.png'
import Form from '../components/Form'
import DoriImage from '../assets/dori.png'
import Dori2Image from '../assets/kop_dori.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const About = () => {
    if (!localStorage.getItem('language_code')) {
        localStorage.setItem('language', "O'zbekcha");
        localStorage.setItem('language_image', "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/255px-Flag_of_Uzbekistan.svg.png");
        localStorage.setItem('language_code', "uz");
    }
    const { language, setLanguage } = useContext(LanguageContext);
    const t = translation[language];

    const photos = [
        "https://images.uzum.uz/cptteo0sarnfdo99f4pg/original.jpg",
        "https://images.uzum.uz/cpfhuc7frr82f0a5cl60/original.jpg",
        "https://images.uzum.uz/cp4s19nfrr80f2gls7fg/original.jpg",
        "https://images.uzum.uz/cp4s19vj2e4ghqnrve10/original.jpg",
        "https://images.uzum.uz/cp31vuvfrr80f2glgmfg/original.jpg"
    ]

    return (
        <div className="container mx-auto">
            <section className="mt-[30px] lg:mt-[40px] mb-[80px] lg:mb-[100px]" id="about-section">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
                    <video src={AboutVideo} autoPlay muted loop className='rounded-[10px] block lg:hidden cursor-pointer mb-2'></video>
                    <div className="flex items-center justify-center">
                        <div>
                            <div>
                                <h1 className="text-[28px] font-bold">{t.about.title}</h1>
                            </div>
                        <div className="mt-4">
                            <p>{ t.about.body }</p>
                        </div>
                        <div className="mt-10 block lg:flex">
                            <div>
                                    <a
                                        href="tel:+998712303399"
                                        className="bg-[#29A624] lg:mt-[20px] mt-[-20px] w-[300px] text-white hover:bg-[#29A624]/90 border border-[#29A624] lg:leading-1 lg:!px-7 lg:py-4 inline-flex items-center justify-center text-sm lg:text-base px-5 py-1.5 3lg:px-7 3lg:py-4 font-semibold rounded-md transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#29A624]"
                                    >
                                        {t.buttons['call-with-us']}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <video src={AboutVideo} autoPlay muted loop className='rounded-[10px] hidden lg:block cursor-pointer mb-2'></video>
                </div>
            </section>
            <hr />
            <section className="mt-[50px] lg:mt-[100px] mb-[80px] lg:mb-[100px]" id="about-section">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
                    <div className="w-[90%] mx-auto mb-5 rounded-[10px]">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={10}
                            slidesPerView={1}
                            navigation
                            className="flex justify-center items-center"
                            pagination={{ clickable: true }}
                            loop
                        >
                            {photos.map((photo, index) => (
                            <SwiperSlide key={index}>
                                <img
                                src={photo}
                                alt={`Photo ${index + 1}`}
                                style={{ width: '100%', borderRadius: '8px' }}
                                />
                            </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="flex items-center justify-center">
                        <div>
                            <div>
                                <h1 className="text-[28px] font-bold">{t.benefits.title}</h1>
                            </div>
                        <div className="mt-4">
                            <ul className="about_page_list list-disc ml-[20px]">
                                {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"].map((number, index) => (
                                    <li>{ t.benefits.benefits[number] }</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-10 block lg:flex">
                            <div>
                                    <a
                                        href="tel:+998712303399"
                                        className="bg-[#29A624] lg:mt-[20px] mt-[-20px] w-[300px] text-white hover:bg-[#29A624]/90 border border-[#29A624] lg:leading-1 lg:!px-7 lg:py-4 inline-flex items-center justify-center text-sm lg:text-base px-5 py-1.5 3lg:px-7 3lg:py-4 font-semibold rounded-md transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#29A624]"
                                    >
                                        {t.buttons['call-with-us']}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="mb-[70px]"/>
            <Form/>
        </div>
    )
}

export default About;