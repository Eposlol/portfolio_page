import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full md:h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='flex flex-col justify-center p-4 mx-auto h-full max-w-screen-lg'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/cfeec799-91b2-4143-bba8-5a377c45989e" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input 
                    type="text" 
                    name='name' 
                    placeholder='Enter your name' 
                    className='p-2 bg-transparent border-2 text-white focus:outline-none rounded-md'/>
                    <input 
                    type="text" 
                    name='email' 
                    placeholder='Enter your email' 
                    className='my-4 p-2 bg-transparent border-2 text-white focus:outline-none rounded-md'/>
                    <textarea 
                    placeholder='Enter your message'
                    name="message" 
                    rows="8"
                    className='p-2 bg-transparent border-2 text-white focus:outline-none rounded-md'
                    ></textarea>
                    <button 
                    className='w-40 text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 flex items-center justify-center rounded-md hover:scale-105 duration-300'>Let's talk</button>
                </form>

                
            </div>
        </div>
    </div>
  )
}

export default Contact