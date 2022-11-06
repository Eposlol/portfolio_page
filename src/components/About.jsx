import React from 'react'
import { useTranslation } from 'react-i18next'

const About = () => {
    const {t} = useTranslation()
  return (
    <div 
    name={t("about")}
    className='pt-20 md:pt-0 w-full md:h-screen min-h-screen h-full bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pd-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 capitalize'>
                 {t('about')}
                </p>
            </div>
            <p className='text-xl mt-20'>
            {t("about text 1")}
            </p>
            <br />

            <p className='text-xl'>
            {t("about text 2")}
            </p>
        </div>

    </div>
  )
}

export default About