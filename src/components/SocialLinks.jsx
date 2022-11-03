import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi' 
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {

  const links =  [
    {
      id:1,
      child: (
        <>Linkedin <FaLinkedin size={30}/></>
      ),
      href: 'https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%B3-%D1%81%D0%B8%D0%BD%D0%BE%D1%82%D0%BE%D0%B2-4a1299226/',
      style: 'rounded-tr-md'  
    },
    {
      id:2,
      child: (
        <>Github <FaGithub size={30}/></>
      ),
      href: 'https://github.com/Eposlol',
    },
    {
      id:3,
      child: (
        <>Email <HiOutlineMail size={30}/></>
      ),
      href: 'mailto:zlugokx@gmail.com',
    },
    {
      id:4,
      child: (
        <>Resume <BsFillPersonLinesFill size={30}/></>
      ),
      href: '/public/resume.pdf',
      style: 'rounded-br-md',
      download: true  
    },
  ]
   
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
      <ul>
        {links.map(({id, child, href, style, download}) => (
          <li 
          key={id} 
          className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] ' + style}>
            <a 
            href={href} 
            className='flex justify-between items-center w-full text-white' 
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
