import React from "react";
import logo from "../assets/logo.svg";
import { FaPhone, FaInstagram, FaFacebook, FaYoutube, FaLocationArrow, FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 pt-12 pb-5 hidden lg:block">
                <div className="container mx-auto flex flex-col md:flex-row items-start justify-between space-y-8 md:space-y-0">
                    {/* Logo and Contact */}
                    <div className="flex flex-col items-start">
                        <img src={logo} alt="logo" className="mb-3"/>
                        <p className="mb-5 text-white">Bepul yetkazib berish</p>
                        <div className="flex items-center gap-3 mt-3">
                            <FaPhone className="text-green-500 text-xl"/>
                            <a className="w-full bg-green-500 p-3 text-white rounded-lg" href="tel:+998712303399">+998 (71) 230 33 99</a>
                        </div>
                    </div>
                    
                    {/* Information Links */}
                    <div className="flex flex-wrap justify-between md:gap-10 gap-6 text-center md:text-left w-full md:w-auto">
                        {/* Biz haqimizda */}
                        <div className="flex flex-col items-center md:items-start gap-3">
                            <Link to="/" className="text-white">Bosh sahifa</Link>
                            <a href="https://www.instagram.com/hayotildizi/profilecard/?igsh=eDMyMzljY2N1aGtq" className="flex items-center gap-2 mt-2 text-white">
                                <div className="rounded-full w-8 h-8 bg-gray-500 flex justify-center items-center">
                                    <FaInstagram className="text-white text-lg"/>
                                </div> 
                                @hayotildizi
                            </a>
                            <a href="https://www.youtube.com/@%D0%A5%D0%B0%D1%91%D1%82%D0%98%D0%BB%D0%B4%D0%B8%D0%B7%D0%B8-%D1%81%D0%B0%D0%BB%D0%BE%D0%BC%D0%B0%D1%82%D0%BB%D0%B8%D0%BA%D1%81%D0%B0%D1%80%D0%B8%D0%B1%D0%B8%D1%80%D0%B3%D0%B0" className="flex items-center gap-2 mt-2 text-white">
                                <div className="rounded-full w-8 h-8 bg-gray-500 flex justify-center items-center">
                                    <FaYoutube className="text-white text-lg"/>
                                </div> 
                                @hayotildizi
                            </a>
                        </div>
                        
                        {/* Kasalliklar */}
                        <div className="flex flex-col items-center md:items-start gap-3">
                            <Link to="/about" className="text-white">Biz haqimizda</Link>
                            <a href="https://www.facebook.com/share/187rQrwHJs/" className="flex items-center gap-2 mt-2 text-white">
                                <div className="rounded-full w-8 h-8 bg-gray-500 flex justify-center items-center">
                                    <FaFacebook className="text-white text-lg"/>
                                </div> 
                                @hayotildizi
                            </a>
                        </div>
                        
                        {/* Sharhlar */}
                        <div className="flex flex-col items-center md:items-start gap-3">
                            <Link to="#illnesses" className="text-white">Kasalliklar</Link>
                            <a href="https://t.me/hayotildizi" className="flex items-center gap-2 mt-2 text-white">
                                <div className="rounded-full w-8 h-8 bg-gray-500 flex justify-center items-center">
                                    <FaTelegram className="text-white text-base"/>
                                </div> 
                                @hayotildizi
                            </a>
                        </div>
                        
                        {/* Sertifikatlar */}
                        <div className="flex flex-col items-center md:items-start gap-3">
                            <Link to="/certificates" className="text-white">Sertifikatlar</Link>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bg-gray-800 p-2">
                <div className="flex justify-center">
                    <p className="text-white">Copyright: ® 2024 Hayotildizi</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
