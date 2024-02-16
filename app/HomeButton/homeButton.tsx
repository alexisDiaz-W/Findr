


import Link from 'next/link';
import { FiAtSign, FiHome, FiLogIn, FiLogOut } from 'react-icons/fi';
import React, { useEffect, useState } from 'react';
import { BsFillSignIntersectionFill } from 'react-icons/bs';
import { PiFigmaLogoThin } from 'react-icons/pi';
import { BiLogIn, BiLogInCircle, BiLogoInstagram } from 'react-icons/bi';
import { IoLogIn, IoLogInOutline } from 'react-icons/io5';
import { MdLogin } from 'react-icons/md';
import { GiLogging } from 'react-icons/gi';
import { CiLogin } from 'react-icons/ci';
import { GrLogin } from 'react-icons/gr';
import { SlLogin } from 'react-icons/sl';
import { VscAccount } from "react-icons/vsc";
import SignIn from '../SignIn/page';



const HomeIconButton = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial check
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Only render button if window width is less than or equal to 768px
  if (windowWidth <= 768) {
    return (
      <div className=" fixed bottom-0 left-0 right-0 flex justify-center mb-4">
        <Link href="/" passHref className="bg-white-500 rounded-full shadow-xl hover:bg-indigo-300 transition-colors duration-1000 ease-in-out p-3">
          {/* FiHome is an attribute of react-icons */}
          <FiHome className="h-6 w-6 text-gray-500" />
        </Link>

      </div>
    );
  } else {
    return null;
  }
};

export default HomeIconButton;

