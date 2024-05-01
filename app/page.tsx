"use client";

import Link from "next/link";
import NavBar from "./NavBar/navBar";
import React from 'react';
import SocialBottomBarComp from "@/components/layout/SocialBottomBarComp";

export default function Home() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
  return (

    <main className=" text-gray-600  flex min-h-screen flex-col items-center justify-between p-~24">

      <NavBar />
      {/* <App /> */}

      <header className="relative flex text-gray-500 dark:text-gray-200 max-w-9xl w-full text-center justify-center jura text-2xl lg:flex pt-20">
        <p className="mt-10">
          Welcome to Findr, a place to connect in your intership experience.
        </p>
      </header>

      <div className="logo_style">
        <h1>Findr</h1>
      </div>

      <div className="grid text-center lg:max-w-5xl lg:w-full lg:grid-cols-4 lg:text-left mb-10">
        <Link href="/PricingPage" className="hidden lg:block px-100 lg:px-100 text-center">
          <h2 className={`text-2xl font-semibold hover:text-gray-400`}>
            Pricing{" "}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-gray-600`}>
            Find out about our comprehensive pricing plans.
          </p>
        </Link>

        <Link href="/ConnectPage" className="hidden lg:block px-100 lg:px-100 text-center">
          <h2 className={`mb-3 text-2xl font-semibold hover:text-gray-400`}>
            Company Connect{" "}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-gray-600`}>
            Connect with our sales team to start giving your interns the perfect experience.
          </p>
        </Link>

        <Link href="/sign-up" className="hidden lg:block px-100 lg:px-100 text-center">
          <h2 className={`mb-3 text-2xl font-semibold hover:text-gray-400`}>
            Intern Sign Up{" "}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-gray-600`}>
            Interns, sign up here to begin your perfect intern experience.
          </p>
        </Link>

        <Link href="/CompanyPage" className="hidden lg:block px-100 lg:px-100 text-center">
          <h2 className={`mb-3 text-2xl font-semibold hover:text-gray-400`}>
            Meet the Team{" "}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-gray-600`}>
            Meet the team behind Findr.
          </p>
        </Link>
        
      </div>
    

    </main>
  );
}