import React from 'react'

const Home = () => {
    return (
        <div name='home' className='h-screen w-full tone'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-black'>
                        I'm a Full Stack <br></br>Developer
                    </h2>
                    <p className='text-black py-4 max-w-md'>
                        I am a passionate web developer focused on creating scalable web applications and working across the full stack.
                    </p>
                    <div>
                        {/* group is a tailwind class that groups content in relation to the parent*/}
                        <button className='group w-fit px-6 text-white py-3 my-2 flex items-center bg-black hover:bg-gradient-to-r from-blue-400 via-blue-400 to-blue-300 button-effect'>
                            Portfolio
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home