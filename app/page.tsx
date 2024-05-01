

"use client";
// import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
 import Head from "next/head"
//  import React, { useState, useEffect } from "react";
// import ResponsiveHamburgerMenu from "./Hmenu";
// import { FiHome } from 'react-icons/fi';
// import Navbar from "./Navbar";
import { Alert } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import SignInIconButton from "./ResponsiveSignInButton/SingInButton";
import NavBar from "./NavBar/navBar";
import React from 'react';


    export default function Home() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
  return (
    
    <main className="text-gray-600  flex min-h-screen flex-col items-center justify-between p-24">

      <NavBar />
      <header className=" text-gray-500 dark:text-gray-200 max-w-9xl w-full text-center justify-center items-center jura text-2xl lg:flex">
        <p>
          Welcome to Findr, a place to connect in your intership experience.
        </p>
      </header>

      <div className="logo_style">
        <h1>Findr</h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
       
          <Link href="/PricingPage" className="hidden lg:block px-100 lg:px-100 text-center">
            <h2 className={`mb-3 text-2xl font-semibold hover:text-gray-100`}>
              Pricing{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                {/* -&gt; */}
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-gray-600`}>
              Find out about our comprehensive pricing plans.
            </p>
          </Link>

          <Link href="/ConnectPage" className="hidden lg:block px-100 lg:px-100 text-center">
            <h2 className={`mb-3 text-2xl font-semibold hover:text-gray-100`}>
              Company Connect{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                {/* -&gt; */}
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-gray-600`}>
              Connect with our sales team to start giving your interns the perfect experience.
            </p>
          </Link>

          <Link href="/InternPage" className="hidden lg:block px-100 lg:px-100 text-center">
            <h2 className={`mb-3 text-2xl font-semibold hover:text-gray-100`}>
              Intern Sign Up{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                {/* -&gt; */}
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-gray-600`}>
              Interns, sign up here to begin your perfect intern experience.
            </p>
          </Link>

          <Link href="/CompanyPage" className="hidden lg:block px-100 lg:px-100 text-center">
            <h2 className={`mb-3 text-2xl font-semibold hover:text-gray-100`}>
              Meet the Team{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                {/* -&gt; */}
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance text-gray-600`}>
              Meet the team behind Findr.
            </p>
          </Link>
      
      </div>
    </main>
  );
}