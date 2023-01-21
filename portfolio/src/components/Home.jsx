import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

const Home = () => {
    return (
        <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-6xl font-bold text-white'>
                        Hello, I'm James.<br></br> I'm a Full Stack <br></br>Developer
                    </h2>
                    <div>
                        {/* group is a tailwind class that groups content in relation to the parent*/}
                        <button className='group w-fit px-6 text-white py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home