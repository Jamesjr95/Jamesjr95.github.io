import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';

const Home = () => {
    return (
        <div name='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
            <div className='max-w-screen-lg'>
                <div>
                    <h2>
                        I'm a Full Stack Developer
                    </h2>
                    <p>
                        I am a passionate web developer focused on creating scalable web applications and working across the full stack. Currently looking for new oppurtunities.
                    </p>
                    <div>
                        <button>
                            Portfolio
                            <span>
                                <AiOutlineArrowRight />
                            </span>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home