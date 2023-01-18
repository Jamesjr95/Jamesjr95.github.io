import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nemo saepe fuga inventore in quibusdam porro recusandae distinctio iste. Expedita repellendus totam eos consequatur voluptatem. Voluptatum, ratione repellat, illo quidem tempore quas recusandae non dolore minima odit nisi. Animi exercitationem inventore officia. Vel natus reiciendis laudantium animi nulla quidem pariatur.</p>

                <br />
                <p className='text-xl mt-20'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos magnam quo aliquid et ipsa. Quis adipisci libero cum pariatur sunt!
                </p>
            </div>
        </div>
    )
}

export default About