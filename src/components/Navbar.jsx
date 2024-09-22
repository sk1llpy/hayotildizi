import React, { useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import logoImage from '../assets/logo.svg';
import translation from '../translations/translation.json';
import { LanguageContext } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [t, setTranslation] = useState(translation.uz);
  const { language, setLanguage } = useContext(LanguageContext);

  const languages = [
    {
      language: 'O\'zbekcha',
      language_code: 'uz',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/255px-Flag_of_Uzbekistan.svg.png'
    },
    {
      language: 'Русский',
      language_code: 'ru',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/255px-Flag_of_Russia.svg.png'
    },
    {
      language: 'English',
      language_code: 'en',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/255px-Flag_of_the_United_Kingdom_%281-2%29.svg.png'
    }
  ];

  const [selectedLanguage, setSelectedLanguage] = useState({
    language: 'O\'zbekcha',
    language_code: 'uz',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/255px-Flag_of_Uzbekistan.svg.png'
  });

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    const storedLanguageImage = localStorage.getItem('language_image');
    const storedLanguageCode = localStorage.getItem('language_code');

    if (storedLanguage && storedLanguageImage && storedLanguageCode) {
      setSelectedLanguage({
        language: storedLanguage,
        language_code: storedLanguageCode,
        image: storedLanguageImage
      });
      setTranslation(translation[storedLanguageCode]);
    }
  }, []);

  return (
    <nav className="navbar bg-white shadow-lg sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <button href="https://hayotildizi.uz/">
          <img src={logoImage} alt="Hayotildizi Logo" className="h-8" />
        </button>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <a onClick={toggleMobileMenu} className="text-gray-700 focus:outline-none">
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </a>
      </div>

      {/* Links for Desktop */}
      <div className="hidden md:flex items-center space-x-8">
        <NavLink
          to="/"
          className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-300"
          activeClassName="text-green-600 border-b-2 border-green-600 pb-1"
        >
          {t.header['main-menu']}
        </NavLink>
        <NavLink
          to="/about"
          className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-300"
          activeClassName="text-green-600 border-b-2 border-green-600 pb-1"
        >
          {t.header.about}
        </NavLink>
        <NavLink
          to="/diseases"
          className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-300"
          activeClassName="text-green-600 border-b-2 border-green-600 pb-1"
        >
          {t.header.illnesses}
        </NavLink>
        <NavLink
          to="/reviews"
          className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-300"
          activeClassName="text-green-600 border-b-2 border-green-600 pb-1"
        >
          {t.header.comments}
        </NavLink>
        <NavLink
          to="/certificates"
          className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-300"
          activeClassName="text-green-600 border-b-2 border-green-600 pb-1"
        >
          {t.header.certificates}
        </NavLink>
      </div>

      {/* Language Selector & CTA Button */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Unified Custom Language Selector */}
        <div className="relative">
          <button
            onClick={toggleLanguageDropdown}
            className="flex items-center bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none hover:bg-gray-200 transition-colors"
          >
            <img
              src={selectedLanguage.image}
              alt={selectedLanguage.language}
              className="h-4 w-6 mr-2 rounded-[2px]"
            />
            {selectedLanguage.language}
            <FaChevronDown className="ml-2" />
          </button>
          {isLanguageDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <ul className="py-2">
                {languages.map((language, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 flex items-center hover:bg-gray-100 transition-colors cursor-pointer"
                    onClick={() => {
                      const languageInfo = {
                        language: language.language,
                        language_code: language.language_code,
                        image: language.image
                      };
                      localStorage.setItem('language', language.language);
                      localStorage.setItem('language_image', language.image);
                      localStorage.setItem('language_code', language.language_code);
                      setSelectedLanguage(languageInfo);
                      setLanguageDropdownOpen(false);
                      setLanguage(language.language_code);
                      setTranslation(translation[language.language_code]);
                    }}
                  >
                    <img
                      src={language.image}
                      alt={language.language}
                      className="h-4 w-6 mr-2 rounded-[2px]"
                    />
                    {language.language}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <a
          href="tel:+998787777757"
          className="bg-green-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          {t.buttons['call-with-us']}
        </a>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b h-[65px]">
          <a href="https://hayotildizi.uz/">
            <img src={logoImage} alt="Hayotildizi Logo" className="h-8" />
          </a>
          <a
            onClick={toggleMobileMenu}
            className="text-gray-700 focus:outline-none"
          >
            <FaTimes size={24} />
          </a>
        </div>
        <div className="flex flex-col px-6 py-6 space-y-8">
          <NavLink
            to="/"
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-300"
            activeClassName="text-green-600"
          >
            {t.header['main-menu']}
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-300"
            activeClassName="text-green-600"
          >
            {t.header.about}
          </NavLink>
          <NavLink
            to="/diseases"
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-300"
            activeClassName="text-green-600"
          >
            {t.header.illnesses}
          </NavLink>
          <NavLink
            to="/reviews"
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-300"
            activeClassName="text-green-600"
          >
            {t.header.comments}
          </NavLink>
          <NavLink
            to="/certificates"
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-300"
            activeClassName="text-green-600"
          >
            {t.header.certificates}
          </NavLink>

          {/* Mobile Language Selector */}
          <div className="border-t pt-6">
            <button
              onClick={toggleLanguageDropdown}
              className="flex items-center bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none hover:bg-gray-200 transition-colors w-full"
            >
              <img
                src={selectedLanguage.image}
                alt={selectedLanguage.language}
                className="h-4 w-6 mr-2 rounded-[2px]"
              />
              {selectedLanguage.language}
              <FaChevronDown className="ml-2" />
            </button>
            {isLanguageDropdownOpen && (
              <div className="mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                <ul className="py-2">
                  {languages.map((language, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 flex items-center hover:bg-gray-100 transition-colors cursor-pointer"
                      onClick={() => {
                        const languageInfo = {
                          language: language.language,
                          language_code: language.language_code,
                          image: language.image
                        };
                        localStorage.setItem('language', language.language);
                        localStorage.setItem('language_image', language.image);
                        localStorage.setItem('language_code', language.language_code);
                        setSelectedLanguage(languageInfo);
                        setLanguageDropdownOpen(false);
                        setLanguage(language.language_code);
                        setTranslation(translation[language.language_code]);
                      }}
                    >
                      <img
                        src={language.image}
                        alt={language.language}
                        className="h-4 w-6 mr-2 rounded-[2px]"
                      />
                      {language.language}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* CTA Button */}
          <a
            href="tel:+998787777757"
            className="block w-full text-center bg-green-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            {t.buttons['call-with-us']}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;