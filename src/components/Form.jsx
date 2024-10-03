import React, { useState, useEffect, useContext } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import translation from '../translations/translation.json';
import { LanguageContext } from '../contexts/LanguageContext';
import AboutImage from '../assets/form.jpg';

const regions = {
    "г. Ташкент": 44,
    "Ташкентская обл.": 46,
    "Фергана": 48,
    "Андижан": 50,
    "Наманган": 52,
    "Жиззах": 54,
    "Самарканд": 56,
    "Бухара": 58,
    "Наваи": 60,
    "Хорезм": 62,
    "Кашкадаря": 64,
    "Сурхандаря": 66,
    "Каракалпакистан": 68,
    "Сырдарья": 70,
    "Гулистан": 72,
};

const Form = () => {
    const [country, setCountry] = useState('г. Ташкент');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        country: 'г. Ташкент',
    });
    const { language } = useContext(LanguageContext);
    const t = translation[language];

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleRegionChange = (event) => {
        setCountry(event.target.value);
        setFormData((prevData) => ({
            ...prevData,
            country: event.target.value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        
        await createDeal(formData.country);

        // Reset form data
        setFormData({
            name: '',
            phone: '',
            country: 'г. Ташкент',
        });
        setCountry('г. Ташкент');
    };

    const createDeal = async (selectedCountry) => {
        const url = "https://ndtm.bitrix24.ru/rest/92/gie0hm20wpej5416/crm.deal.add.json";

        const payload = {
            fields: {
                TITLE: `Сайт: ${formData.name} - ${formData.phone}`,
                UF_CRM_1692798644313: regions[selectedCountry]
            },
            params: {
                REGISTER_SONET_EVENT: "Y",
            },
        };

        try {
            const response = await axios.post(url, payload, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log("Success:", response.data);
        } catch (error) {
            console.error("Error:", error.response ? error.response.status : error.message);
        }
    };

    const regionList = Object.keys(regions);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
            <img src={AboutImage} alt="" />
            <div className="flex items-center justify-center">
                <div className="bg-white p-4 lg:p-7 rounded-[10px] border border-[#E9E9E9] shadow-lg w-full max-w-[562px]">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="text-sm lg:text-base block font-semibold text-primary">
                                {t.form['full-name']}
                            </label>
                            <div className="mt-1 lg:mt-2">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="block bg-[#F7F7F7] w-full rounded-lg text-sm lg:text-base border-0 py-2 px-3 lg:py-4 lg:px-6 text-primary ring-1 ring-inset ring-[#E9E9E9] placeholder:text-[#B0B0B0] focus:ring-2 focus:ring-inset focus:outline-none focus:ring-[#29A624]"
                                    placeholder={t.form['full-name-placeholder']}
                                />
                            </div>
                        </div>
                        <div className="mt-4 lg:mt-8">
                            <label htmlFor="phone" className="text-sm lg:text-base block font-semibold text-primary">
                                {t.form['phone-number']}
                            </label>
                            <div className="mt-1 lg:mt-2">
                                <input
                                    className="block bg-[#F7F7F7] w-full rounded-lg text-sm lg:text-base border-0 py-2 px-3 lg:py-4 lg:px-6 text-primary ring-1 ring-inset ring-[#E9E9E9] placeholder:text-[#B0B0B0] focus:ring-2 focus:ring-inset focus:outline-none focus:ring-[#29A624]"
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    inputMode="numeric"
                                    pattern="\+998[0-9]{9}"
                                    placeholder="+998 91 234 56 78"
                                    onClick={() => {
                                        let input = document.getElementById("phone");
                                        input.value = '+998';
                                    }}
                                    onKeyDown={(e) => {
                                        const input = document.getElementById("phone");
                                        if (e.key === 'Backspace' || e.key === 'Delete') {
                                            return;
                                        }
                                        if (!/^[0-9]+$/.test(e.key)) {
                                            e.preventDefault();
                                        }
                                        if (input.value.length >= 13) {
                                            e.preventDefault();
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div className="mt-5 lg:mt-6">
                            <FormControl fullWidth className="form-control h-[36px] lg:h-[56px]">
                                <label
                                    id="region-label"
                                    className="text-sm lg:text-base mb-1 block font-semibold text-primary h-[36px] lg:h-[56px]"
                                >
                                    {t.form['region']}
                                </label>
                                <Select
                                    labelId="region-label"
                                    id="region"
                                    className="select-form h-[36px] lg:h-[56px] block bg-[#F7F7F7] w-full rounded-lg text-sm hover:border-[#29A624]"
                                    value={country}
                                    onChange={handleRegionChange}
                                >
                                    {regionList.map((region, index) => (
                                        <MenuItem
                                            key={index}
                                            value={region}
                                            className="region__menu-item"
                                            style={{ height: '36px' }}
                                        >
                                            {region}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div className="mt-4 lg:mt-8">
                            <button
                                type="submit"
                                className="bg-[#29A624] mt-10 w-full text-white hover:bg-[#29A624]/90 border border-[#29A624] lg:leading-1 lg:!px-7 lg:py-4 inline-flex items-center justify-center text-sm lg:text-base px-5 py-1.5 3lg:px-7 3lg:py-4 font-semibold rounded-md transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#29A624]"
                            >
                                {t.buttons.consultation}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
