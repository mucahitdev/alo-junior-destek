import React from 'react';
import { Link } from 'react-router-dom';


export const Navbar = () => {
    return (

        <nav className="bg-gray-800 border-gray-200 px-2 sm:px-4 py-2.5">
            <Link to='/' >
                <span className='text-3xl text-white'> Alo Junior Destek </span>
            </Link>
        </nav>

    )
}

