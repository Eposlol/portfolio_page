import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import {Link} from 'react-scroll'
import { useTranslation } from "react-i18next";
import useLocalStorage from "./hooks/use-localStorage";
import i18n from '../i18n';

const NavBar = () => {

    const [nav, setNav] = useState(false)
    const { t } = useTranslation()
    const [language, setLanguage] = useLocalStorage('language', 'en');

    const handleLenguageChange = () => {
        if (language === 'en') {
            i18n.changeLanguage('ru');
            setLanguage('ru');
        } else if (language === 'ru') {
            i18n.changeLanguage('en');
            setLanguage('en');
        }
    };

    const links = [
        {
            id: 1,
            link: t('home')
        },
        {
            id: 2,
            link: t('about')
        },
        {
            id: 3,
            link: t('portfolio')
        },
        {
            id: 4,
            link: t('experience')
        },
        {
            id: 5,
            link: t('contact')
        },
    ]
        
  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 z-10'>
        <div>
            <h1 className='text-5xl font-signature ml-2'>OS</h1>
        </div>
        <ul className='hidden md:flex'>
            {
                links.map(({id,link}) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200'>
                       <Link to={link} smooth duration={500}>{link}</Link>
                        </li>
                ))
            }
              <div>
     
     <button className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 hover:text-white duration-200' onClick={handleLenguageChange}> {language === 'ru' ? t('En') : t('Ru')}</button>
    </div>
        </ul>
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav? <FaTimes size={30}/>: <FaBars size={30}/>}
        </div>
        
          { nav && (
            <ul className='flex flex-col justify-center absolute top-0 w-screen h-screen items-center bg-gradient-to-b from-black to-gray-800 text-gray-500 left-0'>
               { links.map(({id,link}) => (
                    <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                     <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                        </li>
                ))}
                  <button className='px-4 cursor-pointer capitalize py-6 text-4xl' onClick={handleLenguageChange}> {language === 'ru' ? t('En') : t('Ru')}</button>
            </ul>
            )}
    </div>
  )
}

export default NavBar