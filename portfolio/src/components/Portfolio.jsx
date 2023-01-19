import React from 'react'
import weather from '../assets/portfolio/weather.PNG';

const Portfolio = () => {
  return (
    <div name='portfolio' className='tone w-full text-black md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full'>
        <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-black'>Portfolio</p>
        <p className='py-6'>Check out some of my work right here</p>
        </div>
      </div>
      
      <div>
        <div>
          <img src={weather} alt="" />
          <div>
            <button>Demo</button>
            <button>Code</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio