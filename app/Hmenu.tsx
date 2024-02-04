
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function ResponsiveHamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Explicitly declare the state type to be either number or null
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // Ensure windowWidth is only set on the client-side
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener('resize', handleResize);

      // Cleanup event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Conditional rendering based on windowWidth and isMenuOpen
  // Note: Check for windowWidth being not null before comparing its value
  return (
    <>
      {windowWidth !== null && windowWidth <= 768 && (
        <div className="absolute top-4 left-4 z-50">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {/* SVG and Links go here */}
            <svg
              className="h-8 w-8 "
              viewBox="0 0 100 80"
              fill="#C1C2C2"
            >

              <rect width="100" height="15" rx="10"></rect>
              <rect y="30" width="100" height="15" rx="10"></rect>
              <rect y="60" width="100" height="15" rx="10"></rect>
            </svg>
          </button>
        </div>
      )}

      {isMenuOpen && windowWidth !== null && windowWidth <= 768 && (
       
        <div className="absolute top-16 left-4 z-40 w-48 bg-hMenuColor shadow-2xl">
          {/* Dropdown Links */}
          <Link href="/SignIn" className="block p-5 border-b hover:bg-gray-500">Sign In</Link>
          <Link href="/HomePage" className="block p-5 border-b hover:bg-gray-500">Home</Link>
          <Link href="/About" className="block p-5 border-b hover:bg-gray-500">About</Link>
          <Link href="/PricingPage" className="block p-5 border-b hover:bg-gray-500">Pricing</Link>
           <Link href="/ConnectPage" className="block p-5 border-b hover:bg-gray-500">Company Connect</Link>
           <Link href="/InternPage" className="block p-5 border-b hover:bg-gray-500">Intern Sign Up</Link>
           <Link href="/CompanyPage" className="block p-5 border-b hover:bg-gray-500">Meet the Team</Link>
           <Link href="/LogOut" className="block p-5 hover:bg-gray-500">Log out</Link>
          
        </div>
      )}
    </>
  );
}
export default ResponsiveHamburgerMenu;
