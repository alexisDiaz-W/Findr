

import React, { useState } from 'react';
import Link from 'next/link';
import { VscAccount } from "react-icons/vsc";



const NavBar: React.FC = () => {
    // State to manage the hamburger menu's visibility
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                    {/* Logo and hamburger menu for smaller screens */}
                    <div className="flex justify-start items-center">

                        <Link href="/" passHref className="mr-8">
                            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                            <h3 className="jura text-3xl  text-black">Fr</h3>
                            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                        </Link>

                        <button
                            onClick={() => setIsOpen(!isOpen)} // Toggle menu visibility
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
        
                    {/* Centered nav links for larger screens */}
                    {/* Navigation bar menu contents */}
                    <div className="hidden lg:flex justify-around items-center flex-grow">
                        <Link href="/SignInPage" passHref className=" text-gray-700 md:hover:bg-transparent  md:hover:text-blue-700 hover:bg-gray-100 dark:hover:bg-gray-700">Sign in</Link>
                        <Link href="/" passHref className=" text-gray-700 md:hover:bg-transparent  md:hover:text-blue-700 hover:bg-gray-100 dark:hover:bg-gray-700">Home</Link>
                        <Link href="#" passHref className=" text-gray-700 md:hover:bg-transparent  md:hover:text-blue-700 hover:bg-gray-100 dark:hover:bg-gray-700">About</Link>
                        <Link href="/CompanySignIn" passHref className=" text-gray-700 md:hover:bg-transparent  md:hover:text-blue-700 hover:bg-gray-100 dark:hover:bg-gray-700">Company Sign in</Link>
                        <Link href="/PricingPage" passHref className=" text-gray-700 md:hover:bg-transparent  md:hover:text-blue-700 hover:bg-gray-100 dark:hover:bg-gray-700">Services</Link>
                        <Link href="#" passHref className=" text-gray-700 md:hover:bg-transparent  md:hover:text-blue-700 hover:bg-gray-100 dark:hover:bg-gray-700">Contact</Link>
                        <Link href="/CompanyPage" passHref className=" text-gray-700 md:hover:bg-transparent  md:hover:text-blue-700 hover:bg-gray-100 dark:hover:bg-gray-700">Meet the Team</Link>
                        <Link href="#" passHref className=" text-gray-700 md:hover:bg-transparent  md:hover:text-red-700 hover:bg-gray-100 dark:hover:bg-gray-700">Sign out</Link>
                        {/* Add links */}
                    </div>

                    {/* Right-aligned section for larger screens, if needed */}
                    {/* Get Started button*/}
                    <div className=" md:flex justify-end items-center">
                        <Link href="/SignInPage">
                            <button type="button" className=" text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-3 m-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Get started</button>
                        </Link>

                    </div>

                </div>

                {/* Mobile menu */}
                {/* deleted: top-20 from className bellow. This gives the dropdown box space between the nav bar. */}
                <div className={`rounded-sm  fixed  left-0 z-80 max-h-[calc(100%-5rem)] overflow-y-auto bg-white dark:bg-gray-800 shadow-2xl transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-500 ease-in-out lg:hidden`}>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                        <span className="sr-only">Close main menu</span>
                        {/* Close Icon */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Drop down menu contents */}
                    <ul className="flex-col items-start px-5 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="/SignInPage" passHref className="block my-3 px-3 p-3 text-gray-700 rounded-lg hover:bg-gray-100 md:border-0  md:p-2 dark:text-white ">Sign in
                            </Link>
                        </li>

                        <li>
                            <Link href="/" className="block my-3 px-3 p-3 text-gray-700  rounded-lg hover:bg-gray-100   md:border-0  md:p-2 dark:text-white ">Home
                            </Link>
                        </li>
                        <li>
                            <Link href="#" passHref className="block my-3  px-3 p-3 text-gray-700 rounded-lg hover:bg-gray-100 md:border-0  md:p-2 dark:text-white ">About
                            </Link>
                        </li>
                        <li>
                            <Link href="/CompanySignIn" passHref className="block my-3  px-3 p-3 text-gray-700 rounded-lg hover:bg-gray-100  md:border-0  md:p-2 dark:text-white ">Company Sign in
                            </Link>
                        </li>
                        <li>
                            {/* AKA: Pricing */}
                            <Link href="/PricingPage" passHref className="block my-3 px-3 p-3 text-gray-700 rounded-lg hover:bg-gray-100  md:border-0  md:p-2 dark:text-white ">Services
                            </Link>
                        </li>
                        <li>
                            <Link href="#" passHref className="block my-3 px-3 p-3 text-gray-700 rounded-lg hover:bg-gray-100  md:border-0 md:p-2 dark:text-white ">Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="/CompanyPage" passHref className="block my-3  px-3 p-3 text-gray-700 rounded-lg hover:bg-gray-100  md:border-0  md:p-2 dark:text-white">Meet the Team
                            </Link>
                        </li>
                        <li>
                            <Link href="#" passHref className="block my-3 px-3 p-3 text-gray-700 rounded-lg hover:bg-gray-100  md:border-0 hover:text-red-700 md:p-2 dark:text-white">Sign out
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;
