"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
 import Head from "next/head"
//  import React, { useState, useEffect } from "react";
// import ResponsiveHamburgerMenu from "./Hmenu";
import HomeIconButton from "./HomeButton/homeButton";
// import { FiHome } from 'react-icons/fi';
// import Navbar from "./Navbar";
import { Alert } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import SignInIconButton from "./ResponsiveSignInButton/SingInButton";
import NavBar from "./NavBar/navBar";

export default function Home() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
  return (
    <div>
      
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <NavBar />
      
      <SignInIconButton />
       
        {/* <Navbar /> */}
        <div className="z-20 max-w-9xl w-full text-center justify-center items-center jura text-2xl lg:flex">
          <p className="">
            Welcome to Findr, a place to connect in your intership experience.
          </p>
          
          {/* Removed the following code from div at bottom of this comment to remove issues with page color when window was small: bg-gradient-to-t from-white via-white dark:from-black dark:via-black */}
          <div className=" left-0 flex h-48 w-full items-end justify-center  lg:static lg:h-auto lg:w-auto lg:bg-none">
          </div>
        </div>

        <div className="jura text-white mt-0">
          <h1 className="mt-[-250px]">Findr</h1>
        </div>



        <div className="responsive-section mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-center">
          <Link href="/PricingPage" className="hidden md:block px-100 lg:px-100">
            <h2 className={` hover-h2`}>
              Pricing{" "}
              <span className="...">
                {/* -&gt; */}
              </span>
            </h2>
            <p className={`... text-gray-500`}>
              Find out about our comprehensive pricing plans.
            </p>
          </Link>

          <Link href="/ConnectPage" className="hidden md:block px-100 lg:px-100">
            <h2 className={`hover-h2`}>
              Services{" "}
              <span className="...">
                {/* -&gt; */}
              </span>
            </h2>
            <p className={`... text-gray-500`}>
              Connect with our sales team to start giving your interns the perfect experience.
            </p>
          </Link>

          <Link href="/InternPage" className="hidden md:block px-100 lg:px-100">
            <h2 className={`hover-h2`}>
              Intern Sign Up{" "}
              <span className="...">
                {/* -&gt; */}
              </span>
            </h2>
            <p className={`... text-gray-500`}>
              Interns, sign up here to begin your perfect intern experience.
            </p>
          </Link>

          <Link href="/CompanyPage" className="hidden md:block px-100 lg:px-100">
            <h2 className={`hover-h2`}>
              Meet the Team{" "}
              <span className="...">
                {/* -&gt; */}
              </span>
            </h2>
            <p className={`... text-gray-500`}>
              Meet the team behind Findr.
            </p>
          </Link>
          
        </div>
      


      </main>
      
    </div>

  );
}
