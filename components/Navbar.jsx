import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='w-full font-mono md:text-2xl lg:text-3xl xl:text-4xl text-gray-100'>
            <div className='flex h-28 justify-center items-end'>
                <Link href='#about'>
                    <a className='p-2 hover:border-red-200 hover:text-red-300'>about me</a>
                </Link>
                <Link href='/#tech'>
                    <a className='xs:mx-5 mx-10 p-2 hover:border-blue-200 hover:text-red-300'>technologies</a>
                </Link>
                <Link href='/#contact'>
                    <a className='p-2 hover:text-red-300'>contact</a>
                </Link>
            </div>
            <hr className='w-4/12 mx-auto border-gray-400'/>
            <h1 className='text-center mt-5 text-gray-300'>self taught {`< web >`} developer</h1>
        </div>
    )
}

export default Navbar
