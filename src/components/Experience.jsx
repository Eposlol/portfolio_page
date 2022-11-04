import React from 'react'
import gulpPic from '../assets/gulp.png'
import cssPic from '../assets/css.png'
import reactPic from '../assets/react.png'
import githubPic from '../assets/github.png'
import nextjsPic from '../assets/nextjs.png'
import nodeJs from '../assets/node.png'
import htmlPic from '../assets/html.png'
import tailwindPic from '../assets/tailwind.png'
import javascriptPic from '../assets/javascript.png'

const Experience = () => {

  const technology = [ 
    {
      id:1, 
      src: htmlPic,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id:2, 
      src: gulpPic,
      title: 'Gulp',
      style: 'shadow-red-500'
    },
    {
      id:3, 
      src: cssPic,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id:4, 
      src: javascriptPic,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id:5, 
      src: reactPic,
      title: 'React',
      style: 'shadow-blue-600'
    },
    {
      id:6, 
      src: tailwindPic,
      title: 'Tailwind',
      style: 'shadow-sky-400'
    },
    {
      id:7, 
      src: nextjsPic,
      title: 'Next JS',
      style: 'shadow-white'
    },
    {
      id:8, 
      src: nodeJs,
      title: 'Node JS',
      style: 'shadow-green-500'
    },
    {
      id:9, 
      src: githubPic,
      title: 'Github',
      style: 'shadow-gray-400'
    },
  ]

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full  h-full sm:h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6'>These are the technologies I've worked widh</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 md:px-12 px-3 sm:px-0'>

          {
            technology.map(({id, src, title, style}) => (
              <div key={id} className={`hover:scale-105 shadow-md  duration-500 py-2 rounded-lg ${style}`}>
                 <img src={src} alt="" className='w-20 mx-auto'/>
              <p className='mt-4'>{title}</p>
            </div>
            ))
          }
       
        </div>
      </div>
    </div>
  )
}

export default Experience