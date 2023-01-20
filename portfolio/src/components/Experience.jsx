import React from 'react'

import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/reactImage.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
// import html from '../assets/html.png';
// import html from '../assets/html.png';

const Experience = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },

    ]

    return (
        <div name='experience' className='tone w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-black p-2 inline'>Experience</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 sm:px-0'>
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
                        <img src={html} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>HTML</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Experience