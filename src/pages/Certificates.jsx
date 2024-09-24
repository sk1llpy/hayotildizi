import React, { useContext } from 'react';
import translation from '../translations/translation.json';
import { LanguageContext } from '../contexts/LanguageContext';
import data from '../data/data.json';
import Certificates from '../assets/certificates/Certificates';


const CertificatesPage = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const t = translation[language];

    return (
        <div className="container mx-auto">
            <h1 className="text-center text-[150%] mb-10 mt-10">{ t.certificates.title }</h1>
            <div className="flex justify-center">
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 mt-5">
                    {Certificates.map((image, index) => (
                        <div className="flex justify-center cursor-pointer">
                            <a href={image} target='blank'>
                                <img src={image} alt="" className="w-[100%]"/>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CertificatesPage;