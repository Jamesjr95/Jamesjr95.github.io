import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {

    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        }
    ]

    return (
        <div className='flex justify-between items-center w-full h-20 text-black fixed bg-white px-4'>
            <div>
                <h1 className='text-5xl ml-2'>James</h1>
            </div>
            <ul className='hidden md:flex '>
                {/* destructuring the array object */}
                {links.map(({id, link}) =>(
                    <li key={id} className='mx-4 cursor-pointer capitalize font-medium hover:scale-125 text-black transition duration-400 ease-in-out'>{link}</li>
                ))}
            </ul>
            <div onClick={() => setNav(!nav)} className='cursor-pointer mr-4 z-10 text-gray-500 md:hidden'>
                {/* the quetsion mark is an inline conditonal statement in javaScript */}
                {nav ? <FaTimes size={30}/> : <FaBars size={30}/> }
            </div>
            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen tone text-black'>
                {links.map(({id, link}) =>(
                    <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>{link}</li>
                ))}
            </ul>
            ) }
        
        </div>
    )
}

export default NavBar