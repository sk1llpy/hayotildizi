import React, { useState, useEffect, useTransition } from 'react';
import { Link } from 'react-router-dom';

import SwiperComponent from '../components/Swiper';
import AchievementCard from '../components/Achievement';
import IllnessesCard from '../components/Illness';
import Form from '../components/Form';

import data from '../data/data.json';
import translation from '../translations/translations.json';
import Certificates from '../assets/certificates/Certificates';
import ContactForm from './api/Contact';

const Home = () => {
  const [t, setTranslation] = useState(translation.uz);

  useEffect(() => {
    const storedLanguageCode = localStorage.getItem('language_code');

    if (storedLanguageCode) {
      setTranslation(translation[storedLanguageCode]);
    }
  }, []);

  return (
    <div className="container mx-auto">
      <SwiperComponent/>
      {ContactForm}
      <hr className='mt-[70px]'/>
      <section className='mt-[50px] lg:mt-[100px] mb-[80px] lg:mb-[100px]' id='about-section'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
          <div className="flex items-center justify-center">
            <div>
              <div>
                <h1 className='text-[25px]'>{t.about.title}</h1>
              </div>
              <div className='mt-4'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus qui nostrum repellat. Earum blanditiis id maiores nulla facere velit in recusandae nemo accusantium, fugiat corrupti quo aliquam quibusdam assumenda totam inventore illum, asperiores enim itaque? Laudantium vel id repellat omnis neque quae officia laborum reprehenderit molestiae soluta, consequuntur quas labore.</p>
              </div>
              <div className="mt-10 block lg:flex">
                <div>
                  <a
                    href="tel:+998787777757"
                    className="bg-[#29A624] lg:mt-[20px] mt-[-20px] w-[300px] text-white hover:bg-[#29A624]/90 border border-[#29A624] lg:leading-1 lg:!px-7 lg:py-4 inline-flex items-center justify-center text-sm lg:text-base px-5 py-1.5 3xl:px-7 3xl:py-4 font-semibold rounded-md transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#29A624]"
                  >
                    Biz bilan bog'laning
                  </a>
                </div>
                <div className='mt-[12px] lg:mt-0 ml-0 lg:ml-3'>
                  <Link
                    to="/"
                    className="bg-[#29A624] lg:mt-[20px] mt-[-20px] w-[300px] text-white hover:bg-[#29A624]/90 border border-[#29A624] lg:leading-1 lg:!px-7 lg:py-4 inline-flex items-center justify-center text-sm lg:text-base px-5 py-1.5 3xl:px-7 3xl:py-4 font-semibold rounded-md transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#29A624]"
                  >
                    To'liq ma'lumot
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <img src="https://hayotildizi.uz/_nuxt/contact-us.D15tGfCy.png" alt="" />
        </div>
      </section>
      <hr />
      <section className='mt-10' id='achievements'>
        <h1 className="text-center text-[150%]">Kompaniya muvaffaqiyatlari</h1>
        <p className='text-center mt-5 text-[120'>
          Nutritionistda biz erishgan yutuqlarimiz va mijozlarimizning hayotiga ijobiy ta'sir ko'rsatganimiz bilan faxrlanamiz. E'tiborga molik yutuqlarimizdan ba'zilari
        </p>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-10">
          {data.achievements.map((item, index) => (
            <AchievementCard
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </section>
      <hr className='mt-[50px]'/>
      <section id='youtube-videos' className='mt-10'>
        <h1 className='text-center text-[150%]'>Mijozlarimiz fikri</h1>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 mt-5">
          {data['youtube-videos'].map((link, index) => (
            <iframe 
              className='w-[100%] h-auto lg:w-[400px] lg:h-[220px]' 
              src={link} 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen
            ></iframe>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <div>
            <Link
              to="/"
              className="bg-red-600 lg:mt-[20px] mt-[-20px] w-[300px] text-white hover:bg-red-700 border border-red-600 lg:leading-1 lg:!px-7 lg:py-4 inline-flex items-center justify-center text-sm lg:text-base px-5 py-1.5 3xl:px-7 3xl:py-4 font-semibold rounded-md transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-red-700"
            >
              Youtube kanalga o'tish
            </Link>
          </div>
        </div>
      </section>
      <hr className='mt-[50px]'/>
      <section className="mt-10" id="illnesses">
        <h1 className='text-center text-[150%]'>Sizni bezovta qiladigan kasalliklar</h1>
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
      <hr className='mt-10'/>
      <section id='certificates-section' className='mt-10 mb-10'>
        <h1 className='text-center text-[150%] mb-10'>Sertifikatlar</h1>
        <div className="flex justify-center">
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 mt-5">
            {Certificates.slice(0, 4).map((image, index) => (
              <div className="flex justify-center cursor-pointer">
                <img src={image} alt="" className='w-[100%]'/>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div>
            <Link
              to="/"
              className="bg-[#29A624] lg:mt-[20px] mt-[-20px] w-[300px] text-white hover:bg-[#29A624]/90 border border-[#29A624] lg:leading-1 lg:!px-7 lg:py-4 inline-flex items-center justify-center text-sm lg:text-base px-5 py-1.5 3xl:px-7 3xl:py-4 font-semibold rounded-md transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#29A624]"
            >
              Barchasini ko'rish
            </Link>
          </div>
        </div>
      </section>
      <hr />
      <section id='form-section' className='mt-10'>
        <h1 className='text-center text-[150%] mb-10'>Biz bilan bog'lanish</h1>
        <Form/>
      </section>
    </div>
  );
};

export default Home;