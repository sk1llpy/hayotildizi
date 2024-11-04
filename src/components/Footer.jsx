import React from "react";
import logo from "../assets/logo.svg";
import { FaPhone, FaInstagram, FaFacebook, FaYoutube, FaLocationArrow } from "react-icons/fa";

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
                            <span className="text-white">Biz haqimizda</span>
                            <p className="flex items-center gap-2 mt-2 text-white">
                                <div className="rounded-full w-8 h-8 bg-gray-500 flex justify-center items-center">
                                    <FaInstagram className="text-white text-lg"/>
                                </div> 
                                @hayotildizi
                            </p>
                            <p className="flex items-center gap-2 mt-2 text-white">
                                <div className="rounded-full w-8 h-8 bg-gray-500 flex justify-center items-center">
                                    <FaYoutube className="text-white text-lg"/>
                                </div> 
                                @hayotildizi
                            </p>
                        </div>
                        
                        {/* Kasalliklar */}
                        <div className="flex flex-col items-center md:items-start gap-3">
                            <span className="text-white">Kasalliklar</span>
                            <p className="flex items-center gap-2 mt-2 text-white">
                                <div className="rounded-full w-8 h-8 bg-gray-500 flex justify-center items-center">
                                    <FaFacebook className="text-white text-lg"/>
                                </div> 
                                @hayotildizi
                            </p>
                        </div>
                        
                        {/* Sharhlar */}
                        <div className="flex flex-col items-center md:items-start gap-3">
                            <span className="text-white">Sharhlar</span>
                            <p className="flex items-center gap-2 mt-2 text-white">
                                <div className="rounded-full w-8 h-8 bg-gray-500 flex justify-center items-center">
                                    <FaLocationArrow className="text-white text-base"/>
                                </div> 
                                @hayotildizi
                            </p>
                        </div>
                        
                        {/* Sertifikatlar */}
                        <div className="flex flex-col items-center md:items-start gap-3">
                            <span className="text-white">Sertifikatlar</span>
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
