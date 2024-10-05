import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import SwiperComponent from '../components/Swiper';
import AchievementCard from '../components/Achievement';
import IllnessesCard from '../components/Illness';
import Form from '../components/Form';
import data from '../data/data.json';
import translation from '../translations/translation.json';
import Certificates from '../assets/certificates/Certificates';
import { LanguageContext } from '../contexts/LanguageContext';
import AboutImage from '../assets/form.jpg'


const Home = () => {
  if (!localStorage.getItem('language_code')) {
    localStorage.setItem('language', "O'zbekcha");
    localStorage.setItem('language_image', "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/255px-Flag_of_Uzbekistan.svg.png");
    localStorage.setItem('language_code', "uz");
  }
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translation[language];
  const youtube_channel = "https://www.youtube.com/@%D0%A5%D0%B0%D1%91%D1%82%D0%98%D0%BB%D0%B4%D0%B8%D0%B7%D0%B8-%D1%81%D0%B0%D0%BB%D0%BE%D0%BC%D0%B0%D1%82%D0%BB%D0%B8%D0%BA%D1%81%D0%B0%D1%80%D0%B8%D0%B1%D0%B8%D1%80%D0%B3%D0%B0";

  return (
    <div className="container mx-auto pt-5">
      <SwiperComponent />
      <hr className="mt-[70px]" />
      <section className="mt-[50px] lg:mt-[50px] mb-[80px] lg:mb-[100px]" id="about-section">
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
                <div className="mt-[12px] lg:mt-0 ml-0 lg:ml-3">
                  <Link
                    to="/about"
                    className="bg-[#29A624] lg:mt-[20px] mt-[-20px] w-[300px] text-white hover:bg-[#29A624]/90 border border-[#29A624] lg:leading-1 lg:!px-7 lg:py-4 inline-flex items-center justify-center text-sm lg:text-base px-5 py-1.5 3lg:px-7 3lg:py-4 font-semibold rounded-md transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#29A624]"
                  >
                    {t.buttons['read-more']}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <img src={AboutImage} alt="" />
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
            />
          ))}
        </div>
      </section>
      <hr className="mt-[50px]" />
      <section id="youtube-videos" className="mt-10">
        <h1 className="text-center text-[150%]">{ t.reviews.title }</h1>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 mt-5">
          {data['youtube-videos'].map((link, index) => (
            <iframe
              className="w-[100%] h-auto lg:w-[400px] lg:h-[220px]"
              src={link}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <div>
            <a
              href={youtube_channel}
              className="bg-red-600 lg:mt-[20px] mt-[-20px] w-[300px] text-white hover:bg-red-700 border border-red-600 lg:leading-1 lg:!px-7 lg:py-4 inline-flex items-center justify-center text-sm lg:text-base px-5 py-1.5 3lg:px-7 3lg:py-4 font-semibold rounded-md transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-red-700"
            >
              { t.buttons.youtube }
            </a>
          </div>
        </div>
      </section>
      <hr className="mt-[50px]" />
      <section className="mt-10" id="illnesses">
        <h1 className="text-center text-[150%]">{ t.illnesses.title }</h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-10">
          {data.illnesses.map((item, index) => (
            <IllnessesCard
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </section>
      <hr className="mt-10" />
      <section id="certificates-section" className="mt-10 mb-10">
        <h1 className="text-center text-[150%] mb-10">{ t.certificates.title }</h1>
        <div className="flex justify-center">
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 mt-5">
            {Certificates.slice(0, 4).map((image, index) => (
              <div className="flex justify-center cursor-pointer">
                <img src={image} alt="" className="w-[100%]" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div>
            <Link
              to="/certificates"
              className="bg-[#29A624] lg:mt-[20px] mt-[-20px] w-[300px] text-white hover:bg-[#29A624]/90 border border-[#29A624] lg:leading-1 lg:!px-7 lg:py-4 inline-flex items-center justify-center text-sm lg:text-base px-5 py-1.5 3lg:px-7 3lg:py-4 font-semibold rounded-md transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#29A624]"
            >
              { t.buttons['see-all'] }
            </Link>
          </div>
        </div>
      </section>
      <hr />
      <section id="form-section" className="mt-10">
        <h1 className="text-center text-[150%] mb-10">{ t.form.title }</h1>
        <Form />
      </section>
    </div>
  );
};

export default Home;