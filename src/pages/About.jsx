import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import translation from "../translations/translation.json";
import AchievementCard from "../components/Achievement";
import { Link } from "react-router-dom";
import data from '../data/data.json'
import AboutImage from '../assets/form.jpg'

const About = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const t = translation[language];

    return (
        <div className="container mx-auto">
            <section className="mt-[30px] lg:mt-[40px] mb-[80px] lg:mb-[100px]" id="about-section">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
                    <div className="flex items-center justify-center">
                        <div>
                            <div>
                                <h1 className="text-[25px]">{t.about.title}</h1>
                            </div>
                        <div className="mt-4">
                            <p>{ t.about.body }</p>
                        </div>
                        <div className="mt-10 block lg:flex">
                            <div>
                                    <a
                                        href="tel:+998787777757"
                                        className="bg-[#29A624] lg:mt-[20px] mt-[-20px] w-[300px] text-white hover:bg-[#29A624]/90 border border-[#29A624] lg:leading-1 lg:!px-7 lg:py-4 inline-flex items-center justify-center text-sm lg:text-base px-5 py-1.5 3lg:px-7 3lg:py-4 font-semibold rounded-md transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#29A624]"
                                    >
                                        {t.buttons['call-with-us']}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={AboutImage} alt="" />
                </div>
            </section>
            <hr />
            <section className="mt-[50px] lg:mt-[100px] mb-[80px] lg:mb-[100px]" id="about-section">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
                    <img src={AboutImage} alt="" />
                    <div className="flex items-center justify-center">
                        <div>
                            <div>
                                <h1 className="text-[25px]">{t.benefits.title}</h1>
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
                                        href="tel:+998787777757"
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
            <hr />
            <section className="mt-10" id="achievements">
                <h1 className="text-center text-[150%]">{t.achievements.title}</h1>
                <p className="text-center mt-5 text-[120]">
                {t.achievements.body}
                </p>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-10">
                    {data.achievements.map((item, index) => (
                        <AchievementCard
                            title={t.achievements[`${item.id}`].title}
                            description={t.achievements[`${item.id}`].description}
                            image={item.image}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default About;