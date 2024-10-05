import React, { createContext, useState } from 'react';

// Create the context
export const LanguageContext = createContext();

// Create the provider component
export const LanguageProvider = ({ children }) => {
    if (!localStorage.getItem('language_code')) {
        localStorage.setItem('language', "O'zbekcha");
        localStorage.setItem('language_image', "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/255px-Flag_of_Uzbekistan.svg.png");
        localStorage.setItem('language_code', "uz");
    }
    const [language, setLanguage] = useState(localStorage.getItem('language_code' || 'uz'));

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
