

import React, { useState } from 'react';
import Link from 'next/link';
import { VscAccount } from "react-icons/vsc";
import { UserButton } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

const NavBar: React.FC = () => {
    // State to manage the hamburger menu's visibility
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white  dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b text-gray-600 border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                    {/* Logo and hamburger menu for smaller screens */}
                    <div className="flex justify-start items-center">

                        <Link href="/" passHref className="mr-8">
                            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                            <h3 className="dark:text-white jura text-3xl  text-black">Fr</h3>
                            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                        </Link>

                        <button
                            onClick={() => setIsOpen(!isOpen)} // Toggle menu visibility
                            type="button"
                            className="dropdownMenuIcon_style"
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
                        {/* temporarily removing SignIn link  */}
                        <Link href="/sign-in" passHref className="itemsInNavBarMenu_style">Sign in</Link>
                        <Link href="/" passHref className="itemsInNavBarMenu_style">Home</Link>
                        {/* Temp Post link, will replace with About. Using for building. */}
                        <Link href="/About" passHref className="itemsInNavBarMenu_style">About</Link>
                        <Link href="/CompanySignIn" passHref className="itemsInNavBarMenu_style">Company Sign in</Link>
                        <Link href="/PricingPage" passHref className="itemsInNavBarMenu_style">Pricing</Link>
                        <Link href="#" passHref className="itemsInNavBarMenu_style">Contact</Link>
                        <Link href="/CompanyPage" passHref className="itemsInNavBarMenu_style">Meet the Team</Link>
                        {/* <Link href="#" passHref className="itemsInNavBarMenu_style">Sign out</Link> */}
                        {/* Add links */}
                    </div>

                    {/* Right-aligned section for larger screens, if needed */}
                    {/* Get Started button*/}
                    <div className=" md:flex justify-end items-center">
                        {/* <Link href="/SignIn">
                            <button type="button" className=" text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-3 m-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Get started</button>
                        </Link> */}
                        <UserButton appearance={{ baseTheme: dark }} afterSignOutUrl="/sign-in" />

                    </div>

                </div>

                {/* Mobile menu */}
                {/* deleted: top-20 from className bellow. This gives the dropdown box space between the nav bar. */}
                <div className={`nav_align_res transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
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
                    <ul className="itemsInDropDownMenu_style ">
                        <li>
                            {/* temporarily removing SignIn link  */}
                            <Link href="/sign-in" passHref className="itemsInDropMenu_style">Sign in
                            </Link>
                        </li>

                        <li>
                            <Link href="/" className="itemsInDropMenu_style">Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/About" passHref className="itemsInDropMenu_style">About
                            </Link>
                        </li>
                        <li>
                            <Link href="/CompanySignIn" passHref className="itemsInDropMenu_style">Company Sign in
                            </Link>
                        </li>
                        <li>
                            {/* AKA: Pricing */}
                            <Link href="/PricingPage" passHref className="itemsInDropMenu_style">Pricing
                            </Link>
                        </li>
                        <li>
                            <Link href="#" passHref className="itemsInDropMenu_style">Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="/CompanyPage" passHref className="itemsInDropMenu_style">Meet the Team
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="#" passHref className="itemsInDropMenu_style">Sign out
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;
