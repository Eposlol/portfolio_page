import React from 'react'
import HeroImage from "../assets/heroImage.jpeg"
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import {Link} from 'react-scroll'
import { useTranslation } from 'react-i18next'

function Home() {
    const {t} = useTranslation()
  return (
    <div name={t("home")} className='md:h-screen min-h-screen h-full w-full bg-gradient-to-b from-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full mt-20 md:mt-0'>
                <h2 className='tex-4xl sm:text-7xl font-bold text-white'>
                  {t("I'm Frontend Developer")}
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
               {t("home page exp text")}
                </p>
                <Link to={t('portfolio')} smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer capitalize'>
                   { t('portfolio')} <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight className='ml-1' size={25}/></span>
                </Link>
            </div>
            <div className='flex md:justify-center md:items-center md:my-0 my-3 '>
                <img className='rounded-2xl mx-auto md:w-full md:min-w-[289px]' src={HeroImage} alt="my profile"/>
            </div>
        </div>
    </div>
  )
}

export default Home