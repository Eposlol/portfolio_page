import React from 'react'

const About = () => {
  return (
    <div 
    name="about" 
    className='w-full md:h-screen h-full bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pd-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti doloremque, iusto eos aspernatur dicta illo saepe cupiditate esse numquam quas, dignissimos ab, dolor sed! Est laboriosam nulla omnis dolorum. Mollitia.
            </p>
            <br />

            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus rerum consectetur eius ratione aperiam, cumque obcaecati consequatur praesentium totam animi repellat quibusdam delectus minima deserunt fuga vero voluptatum dolorem quos!
            </p>
        </div>

    </div>
  )
}

export default About