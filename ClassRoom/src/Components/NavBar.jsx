import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useToggle } from '../Context/ToggleContext';
const NavBar = () => {
    const { toggle, toggleValue } = useToggle();
    return (
        <nav className="flex justify-between bg-white-400 border-2 px-2 py-4 ">
            <div className="flex justify-center items-center gap-4">
                <FontAwesomeIcon className='px-3 cursor-pointer' icon={faBars} onClick={toggleValue} size="lg" />
                <Link to="/"><img className='h-10' src="https://www.gstatic.com/classroom/logo_square_rounded.svg" alt="" /></Link>
                <h2 className='text-2xl'>Classroom</h2>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <FontAwesomeIcon className='px-2' icon={faPlus} />
                <img className='h-7' src="https://ssl.gstatic.com/gb/images/bar/al-icon.png" alt="" />
                <img className='h-10 rounded-full' src="https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_1280.png" alt="" />
            </div>
        </nav>
    );
};

export default NavBar;
