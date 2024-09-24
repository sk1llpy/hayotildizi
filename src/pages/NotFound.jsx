import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import translation from "../translations/translation.json";
import { Link } from "react-router-dom";

const NotFound = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const t = translation[language];

    return (
        <div className="container mx-auto justify-center flex items-center">
            <div>
                <h1 className="font-bold text-[100px] mt-[-100px] text-center">404</h1>
                <p className="text-center text-[20px] mt-[-15px]">{ t['404'].description }</p>
                <div className="flex justify-center mt-4">
                    <Link to='/' className="bg-[#29A624] lg:pl-[50px] lg:pr-[50px] text-white rounded-[5px] p-[10px] font-bold w-[100%] hover:bg-[#2db428] hover:transition-all">
                        <p className="text-center">
                            { t.buttons['go-home-page'] }
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound;