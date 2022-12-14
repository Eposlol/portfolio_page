import { useTranslation } from "react-i18next"
import SocialLinks from "./SocialLinks"

const Contact = () => {
   
const {t} = useTranslation()
  return (
   
    <div name={t('contact')} className='w-full min-h-screen h-full pt-20 md:pt-0 md:h-screen bg-gradient-to-b from-black to-gray-800 text-white flex flex-col justify-between md:block'>
        <div className='flex flex-col justify-center p-4 mx-auto h-full max-w-screen-lg'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 capitalize'>{t('contact')}</p>
                <p className='py-6'>{t('contact text')}</p>
            </div>
            <div className='flex justify-center items-center'>
                <form 
                action="https://getform.io/f/cfeec799-91b2-4143-bba8-5a377c45989e"
                method='POST' 
                className='flex flex-col w-full md:w-1/2'>
                    <input 
                    type="text" 
                    name='name' 
                    placeholder={t('Enter your name')}
                    className='p-2 bg-transparent border-2 text-white focus:outline-none rounded-md'/>
                    <input 
                    type="text" 
                    name='email' 
                    placeholder={t('Enter your email')}
                    className='my-4 p-2 bg-transparent border-2 text-white focus:outline-none rounded-md'/>
                    <textarea 
                    placeholder={t('Enter your message')}
                    name="message" 
                    rows="8"
                    className='p-2 bg-transparent border-2 text-white focus:outline-none rounded-md'
                    ></textarea>
                    <button 
                    className='w-40 text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center justify-center rounded-md hover:scale-105 duration-300'
                    >{t("Let's talk")}</button>
                </form>
            </div>
        </div>
        <SocialLinks/>
    </div>

   
  )
}

export default Contact