import React from 'react'
import Link from 'next/link'

export default function page() {
    return (
        <div className="bg-gray-100 min-h-screen"> {/* Change 'bg-blue-100' to any background color you prefer */}
            <div>
                <div className="flex ">
                    <Link href="/" passHref>
                        <h4 className="dark:text-blue-500 jura text-4xl text-black cursor-pointer ml-4 mt-4">Fr</h4>
                    </Link>
                </div>

                <hr className="border-t-2 border-blue-900 my-4 w-full" />

                <div className="lg:px-8 sm:px-6 max-w-4xl mx-auto px-4"> {/* This container centers the content and applies margin */}
                    <section>
                        <h1 className="text-center text-8xl text-gray-800 font-extralight mb-4">
                            About Findr
                        </h1>
                        <p className="mb-12 text-lg text-gray-600 text-center">
                            Welcome to Findr, your premier web application dedicated to transforming the summer internship experience. At Findr, we understand the challenges and opportunities that come with relocating for internships.
                        </p>
                    </section>
                    <section className="mb-12">
                        <h2 className="font-thin text-4xl text-black text-center mb-4">Our Vision</h2>
                        <p className="text-lg text-gray-600 text-center">
                            Empowering Every Intern&apos;s Journey Towards Success. We aim to be at the forefront of enhancing the internship experience, fostering a global community where finding the right living situation is seamless, supportive, and enriching.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="font-thin text-4xl text-black text-center mb-4">Our Mission</h2>
                        <p className="text-lg text-gray-600 text-center">
                            Connecting Interns, Building Futures. Findr&apos;s mission is to provide a reliable, user-friendly platform that bridges the gap between interns looking for the perfect roommate match during their summer internships.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-4xl text-black font-thin text-center mb-4">Who We Are?</h2>
                        <p className="text-lg text-gray-600 text-center">
                            We Are Innovators, Connectors, and Your Next Roommate Finders. At Findr, we are a team of dreamers, thinkers, and doers committed to revolutionizing the way interns connect.
                        </p>
                    </section>
                </div>
            </div>
        </div>



    )
}
