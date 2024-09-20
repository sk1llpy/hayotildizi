import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { color } from '@mui/system';



const Form = () => {
  const [country, setCountry] = useState('Toshkent');

  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  const regions = [
    "Toshkent", "Samarqand", "Buxoro", 
    "Farg'ona", "Namangan", "Andijon", 
    "Navoiy", "Qoraqalpog'iston Respublikasi", "Jizzax",
    "Surxondaryo", "Qashqadaryo", "Xorazm"
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
      <img src="https://hayotildizi.uz/_nuxt/contact-us.D15tGfCy.png" alt="" />
      <div className="flex items-center justify-center">
        <div className="bg-white p-4 lg:p-7 rounded-[10px] border border-[#E9E9E9] shadow-lg w-full max-w-[562px]">
          <form>
            <div>
              <label htmlFor="name" className="text-sm lg:text-base block font-semibold text-primary">
                Ism-familiya
              </label>
              <div className="mt-1 lg:mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block bg-[#F7F7F7] w-full rounded-lg text-sm lg:text-base border-0 py-2 px-3 lg:py-4 lg:px-6 text-primary ring-1 ring-inset ring-[#E9E9E9] placeholder:text-[#B0B0B0] focus:ring-2 focus:ring-inset focus:outline-none focus:ring-[#29A624]"
                  placeholder="Ism-familiyangizni kiriting"
                />
              </div>
            </div>
            <div className="mt-4 lg:mt-8">
              <label htmlFor="phone" className="text-sm lg:text-base block font-semibold text-primary">
                Telefon raqami
              </label>
              <div className="mt-1 lg:mt-2">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="block bg-[#F7F7F7] w-full rounded-lg text-sm lg:text-base border-0 py-2 px-3 lg:py-4 lg:px-6 text-primary ring-1 ring-inset ring-[#E9E9E9] placeholder:text-[#B0B0B0] focus:ring-2 focus:ring-inset focus:outline-none focus:ring-[#29A624]"
                  placeholder="91 23 45 67"
                />
              </div>
            </div>
            <div className="mt-5 lg:mt-6">
              <FormControl fullWidth className='form-control h-[36px] lg:h-[56px]'>
                <label 
                  id="region-label" 
                  className='text-sm lg:text-base mb-1 block font-semibold text-primary h-[36px] lg:h-[56px]'
                >
                  Viloyat
                </label>
                <Select
                  labelId="region-label"
                  id="region"
                  className='select-form h-[36px] lg:h-[56px] block bg-[#F7F7F7] w-full rounded-lg text-sm hover:border-[#29A624]'
                  value={country}
                  label="region-label"
                  placeholder='Viloyatingizni kiriting'
                  onChange={handleChange}
                >
                  {regions.map((region, index) => (
                    <MenuItem 
                      value={region}
                      className='region__menu-item'
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
                className="bg-[#29A624] mt-10 w-full text-white hover:bg-[#29A624]/90 border border-[#29A624] lg:leading-1 lg:!px-7 lg:py-4 inline-flex items-center justify-center text-sm lg:text-base px-5 py-1.5 3xl:px-7 3xl:py-4 font-semibold rounded-md transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#29A624]"
              >
                Bepul konsultatsiya olish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;