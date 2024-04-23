import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Hero from '../Images/Hero Image.png';
import Logo from '../Images/Logo.png'

// Navigation component
function Navigation() {
    return (
        <nav className='hidden sm:block'>
            <ul className="flex">
                <NavItem href="#">SERVICES</NavItem>
                <NavItem href="#">ABOUT US</NavItem>
                <NavItem href="#">CONTACT US</NavItem>
                <NavItem href="#">CAREERS</NavItem>
            </ul>
        </nav>
    );
}

// Mobile navigation component
function MobileNavigation({ toggleMenu, setToggleMenu }) {
    return (
        toggleMenu && 
        <nav className='flex absolute justify-between left-0 top-[88px] w-full h-full bg-white text-black px-[6px] sm:hidden '>
            <ul className="flex flex-col sm:flex-row text-[14px] ">
                <NavItem href="#">SERVICES</NavItem>
                <NavItem href="#">ABOUT US</NavItem>
                <NavItem href="#">CONTACT US</NavItem>
                <NavItem href="#">CAREERS</NavItem>
            </ul>
            <div className='relative pt-[6px]'>
              <CancelButton setToggleMenu={setToggleMenu} className="" />
            </div>
        </nav>
    );
}

// Toggle button component
function ToggleButton({ toggleMenu, setToggleMenu }) {
    return (
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block sm:hidden'>
            <FontAwesomeIcon icon={faBars} className="cursor-pointer h-[24px] w-[31px]" />
        </button>
    );
}

// Cancel toggle button component
function CancelButton({ setToggleMenu }) {
    return (
        <button onClick={() => setToggleMenu(false)} className='block sm:hidden'>
            <FontAwesomeIcon icon={faTimes} className="cursor-pointer h-[24px] w-[31px]" />
        </button>
    );
}

// Navigation item component
function NavItem ({href, children}) {
    return (
        <li className="sm:ml-[28px] text[14px] mb-[8px] sm:mb-[0px] px-[4px] py-[4px] sm:px[0] sm:py[0]">
            <a href={href}>{children}</a>
        </li>
    );
}

// Home component
function Home() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const notify = () => toast.info('Get free consultation button clicked!');

    return (
        <div className='relative flex flex-col'>
            <div className="flex justify-between bg-customPurple text-white py-[26px] px-[20px] sm:px-[40px] md:px-[60px] lg:px-[80px] ">
                <div className=''>
                        <img src={Logo} className='object-cover'/>
                </div>
                <Navigation/>
                <MobileNavigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
                <ToggleButton toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
            </div>
            <img src={Hero} alt="Hero"/>
            <div className='bg-gradient-to-r from-teal-400 to-green-500 text-white md:absolute w-full md:w-1/2 left-[60px] bottom-[20px] pt-[24px] px-[40px] pb-[32px]'>
                <p className='sm:text-[35px] font-bold text-[36px] leading-[45px] mb-[8px]'>We crush your competitors, goals, and sales records - without the B.S.</p>
                <button onClick={notify} className='font-inter text-white bg-customOrange font-bold w-fit text-[14px] py-[12px] px-[20px] '>Get free consultation</button>
            </div>
        </div>  
    );
}

export default Home;
