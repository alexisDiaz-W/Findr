"use client";
import Link from "next/link";
import NavBar from "../components/NavBar/navBar";
import React from "react";

export default function Home() {
  return (
    <main className="text-gray-600 flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
      <header className="text-gray-500 dark:text-gray-200 max-w-9xl w-full text-center justify-center items-center jura text-2xl lg:flex">
        <p>Welcome to Findr, a place to connect in your internship experience.</p>
      </header>

      <div className="logo_style">
        <h1>Findr</h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <Link href="/PricingPage" className="lg:block px-10 lg:px-10 text-center">
          <h2 className="mb-3 text-2xl font-semibold hover:text-gray-100">Pricing</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50 text-gray-600">
            Find out about our comprehensive pricing plans.
          </p>
        </Link>

        <Link href="/ConnectPage" className="lg:block px-10 lg:px-10 text-center">
          <h2 className="mb-3 text-2xl font-semibold hover:text-gray-100">Company Connect</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50 text-gray-600">
            Connect with our sales team to start giving your interns the perfect experience.
          </p>
        </Link>

        <Link href="/CompanyPage" className="lg:block px-10 lg:px-10 text-center">
          <h2 className="mb-3 text-2xl font-semibold hover:text-gray-100">Meet the Team</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50 text-gray-600">
            Meet the team behind Findr.
          </p>
        </Link>
      </div>
    </main>
  );
}
