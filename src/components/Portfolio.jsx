import React from 'react'
import artisan12 from '../assets/portfolio/artisan12.png'
import artisan30 from '../assets/portfolio/artisan30.png'
import tverTrud from '../assets/portfolio/tver-trud.png'
import tverStroyka from '../assets/portfolio/tverstroyka.png'
import tverskieProstory from '../assets/portfolio/tverskie_prostory.png'
import taktTver from '../assets/portfolio/takttver.png'
import tverichata from '../assets/portfolio/tverichata.png'
import trKom from '../assets/portfolio/tr-kom.png'
import weatherPic from '../assets/portfolio/weather_app.png'
import { useTranslation } from 'react-i18next'

const Portfolio = () => {
    const { t} = useTranslation()
    const portfolios = [
        {
            id: 1,
            src: weatherPic,
            demo: "https://sinotov-weather-app.netlify.app/",
            code: "https://github.com/Eposlol/openweather-app"
        },
        {
            id: 2,
            src: artisan30,
            demo: 'https://30kv.artisanhouse.ru/'
        },
        {
            id: 3,
            src: tverTrud,
            demo: 'https://www.tvertrud.ru/'
        },
        {
            id: 4,
            src: tverStroyka,
            demo: 'https://tverstroyka.ru/'
        },
        {
            id: 5,
            src: tverskieProstory,
            demo: 'http://vv.bk-hosting.ru/'
        },
        {
            id: 6,
            src: taktTver,
            demo: 'https://taktver.ru/'
        },
        {
            id: 7,
            src: tverichata,
            demo: 'https://tverichata.ru/'
        },
        {
            id: 8,
            src: trKom,
            demo: 'https://tr-kom.ru./'
        },
        {
            id: 9,
            src: artisan12,
            demo: 'https://12kv.artisanhouse.ru/'
        },
    ]

  return (
    <div name={t('portfolio')} className='pt-20 md:pt-0 min-h-screen bg-gradient-to-b from-black to-gray-800 w-full md:h-screen h-full text-white '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='capitalize text-4xl font-bold inline border-b-4 border-gray-500'>{t('portfolio')}</p>
                <p className='py-6'>{t('Check out some of my work here')}</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:px-12 px-3 sm:px-0'>
                {
                    portfolios.map(({id, src, demo, code})=> (

                        <div key={id} className='group hover:scale-105 shadow-md shadow-gray-600 rounded-lg duration-200'>
                            <div 
                            className='rounded-t-md   object-cover h-[190px] w-auto bg-cover bg-no-repeat cursor-pointer'
                            style={{backgroundImage: `url(${src})`}}
                            ></div>
                            <div className='flex items-center justify-center'>
                               {demo && <a href={demo} target='_blank' rel="noreferrer" className={` px-6 py-3 flex items-center justify-center hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-300 ${code? 'rounded-bl-lg w-1/2' : 'w-full rounded-b-lg'} `}>{t('Demo')}</a>} 
                               {code && <a href={code} target='_blank' rel="noreferrer" className='w-1/2 px-6 py-3 flex items-center justify-center border-l-2 border-gray-500 hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-300 rounded-br-lg'>{t('Code')}</a>} 
                            </div>
                    </div>

                    ))
                }
              
            </div>
        </div>
    </div>
  )
}

export default Portfolio