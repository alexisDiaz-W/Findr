


import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { VscAccount } from "react-icons/vsc";


const SignInIconButton = () => {
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
      <div className="fixed top-5 left-0 right-0  justify-center mb-4">
        <Link href="./SignInPage" passHref className=" bg-black-900 rounded-full shadow-xl hover:bg-indigo-300 transition-colors duration-100 ease-in-out p-3">
            <VscAccount  className=" h-6 w-6 text-gray-500" />
        </Link>
      </div>
    );
  } else {
    return null;
  }
};

export default SignInIconButton;


