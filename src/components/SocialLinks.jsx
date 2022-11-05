import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi' 
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {

  const links =  [
    {
      id:1,
      child: (
        <><span className='hidden lg:block'>Linkedin</span> <FaLinkedin size={30}/></>
      ),
      href: 'https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%B3-%D1%81%D0%B8%D0%BD%D0%BE%D1%82%D0%BE%D0%B2-4a1299226/',
      style: 'lg:rounded-tr-md'  
    },
    {
      id:2,
      child: (
        <><span className='hidden lg:block'>Github</span> <FaGithub size={30}/></>
      ),
      href: 'https://github.com/Eposlol',
    },
    {
      id:3,
      child: (
        <><span className='hidden lg:block'>Email</span> <HiOutlineMail size={30}/></>
      ),
      href: 'mailto:zlugokx@gmail.com',
    },
    {
      id:4,
      child: (
        <><span className='hidden lg:block'>Resume</span> <BsFillPersonLinesFill size={30}/></>
      ),
      href: '/public/resume.pdf',
      style: 'lg:rounded-br-md',
      download: true  
    },
  ]
   
  return (
    <div className='flex w-full lg:w-auto items-center justify-center lg:flex-col lg:top-[35%] lg:left-0 lg:fixed bg-gradient-to-b from-black to-gray-800'>
      <ul className='flex flex-row lg:flex-col'>
        {links.map(({id, child, href, style, download}) => (
          <li 
          key={id} 
          className={`flex justify-center lg:justify-between items-center w-20 lg:w-40 h-14 px-4 lg:bg-gray-500 lg:ml-[-100px] lg:hover:rounded-md lg:duration-300 lg:hover:ml-[-10px] ${style}`}>
            <a 
            href={href} 
            className='flex justify-center lg:justify-between items-center w-auto lg:w-full text-white' 
            download={download} 
            target='_blank' 
            rel="noreferrer">
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks
