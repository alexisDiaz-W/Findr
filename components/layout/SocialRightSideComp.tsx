"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SocialSearchBar from './SocialSearchBar'
import { UserButton } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { useAuth } from '@clerk/nextjs'
import { useUser, currentUser, } from '@clerk/nextjs'
import EditProfileModal from "../Modals/EditProfileModal";

// Define an interface for the sponsor object
interface Sponsor {
  imageUrl: string;
  alt: string;
  title: string;
  description: string;
}

// Define an interface for the props expected by SocialRightSideComp, including the onSearchChange handler
interface SocialRightSideCompProps {
  onSearchChange: (searchTerm: string) => void;
}


const sponsors = [
  {
    imageUrl: "/assets/apt1.png",
    alt: "ad",
    title: "River Vista",
    description: "With thoughtful design and exclusive community amenities,River Vista Apartments is your destination for luxury apartments in Wichita, Kansas! We've redefined what upscale living means to youin our exceptional studio, one, and two-bedroom apartments, that offer up to 1,210 square feet of living space with a collection of interior touches.",

  },
  {
    imageUrl: "/assets/apt2.png",
    alt: "ad",
    title: "Union Mill",
    description: "Experience the luxury of Union Mill, a sophisticated community of active adult apartments nestled in Wichita, Kansas. Explore a variety of modern floorplans, including 1, 2, and 3 bedrooms, to discover the ideal smart apartment for your lifestyle."
  },
  {
    imageUrl: "/assets/apt3.png",
    alt: "ad",
    title: "The Avante",
    description: "Experience the joy and convenience of West-side Wichita living when you join our brand-new Avante Apartments at 37th and Ridge Road. "
  },
  {
    imageUrl: "/assets/apt4.png",
    alt: "ad",
    title: "Parc at 21st and Rock",
    description: "Parc at 21st & Rock is a one- and two-bedroom apartment community conveniently located minutes from downtown Wichita, KS.Our community features completely remodeled living spaces along with a variety of desired features and amenities. Enjoy our sparkling pool, community playground, with easy access to hiking and bike trails."
  },
  {
    imageUrl: "/assets/R1.png",
    alt: "ad",
    title: "Las Rosas",
    description: "Las Rosas Wichita Mexican Grill, located at 1050 W 47th St S is a locally owened authentic taste of Mexican food serving a variety of delicacies!"
  },
  {
    imageUrl: "/assets/R2.png",
    alt: "ad",
    title: "Country Cafe",
    description: "We live the restaurant lifestyle with over 25+ years of experience in the industry. We strive to give every customer an excellent dining experience. We are a family ran restaurant with our values rooted in the concept of giving the atmosphere of the restaurant a family vibe. We hope you enjoy your visit with us as much as we enjoy serving our customers! Thank you for being a part of our journey!"
  },
];



export default function SocialRightSideComp({ onSearchChange }: SocialRightSideCompProps) {
  const { isLoaded, isSignedIn, user } = useUser();
  // const [currentSponsor, setCurrentSponsor] = useState<Sponsor | null>(null);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const toggleEditProfileModal = () => setIsEditProfileModalOpen(!isEditProfileModalOpen);
  const [currentSponsorIndex, setCurrentSponsorIndex] = useState(0); // Use an index instead of a sponsor object


  // useEffect(() => {
  //   const shuffledSponsors = shuffleSponsors([...sponsors]);
  //   setCurrentSponsor(shuffledSponsors[0]);
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSponsorIndex(prevIndex => (prevIndex + 1) % sponsors.length); // Cycle through sponsors
    }, 5000); // Change sponsor every 4 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);


  // Function to shuffle sponsors array with explicit typing
  // const shuffleSponsors = (array: Sponsor[]): Sponsor[] => {
  //   let currentIndex = array.length, randomIndex;

  //   while (currentIndex !== 0) {
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex--;
  //     [array[currentIndex], array[randomIndex]] = [
  //       array[randomIndex], array[currentIndex]];
  //   }

  //   return array;
  // }



  if (!isLoaded || !isSignedIn || sponsors.length === 0) {
    return null; // Ensure sponsors are loaded and user is signed in
  }

  const currentSponsor = sponsors[currentSponsorIndex]; // Get current sponsor based on index


  // if (!isLoaded || !isSignedIn) {
  //   return null;
  // }
  // className="hidden sm:flex mx-auto max-w-sm px-3 sticky top-0 z-20 h-screen xl:w-[400px] w-full flex-col gap-12 overflow-auto pl-6 lg:block"
  return (
    <div className="scroll_bar hidden sm:flex mx-auto max-w-sm px-3 sticky top-0 h-screen xl:w-[400px] w-full flex-col overflow-auto pl-6 lg:block">
      {/* test code */}
      <div className='flex flex-col text-center text-xl jura text-gray-600'>Hello, {user.firstName} Welcome!</div>
      <div className="flex flex-col gap-4 px-4 py-0 items-center">
        <Link href="/">
          <p className='text-blue-400 text-6xl text-center jura'>Findr</p>
        </Link>

        <Link href={``}>
          <Image
            src={user.imageUrl}
            alt="profile photo"
            width={80}
            height={80}
            className="rounded-full"
          />
        </Link>
        <p className='text-gray-300 text-lg font-semibold leading-3'>{user.firstName}{" "}{user.lastName} </p>

        <SocialSearchBar onSearchChange={onSearchChange} />
      </div>

      <hr className='border-t-2 border-blue-300 my-4 w-3/4 mx-auto' />

      {/* Sponsor section */}
      <div className="grid w-[280px] mx-auto overflow-auto h-[400px] px-2 scroll_bar">
        <h3 className="text-white text-3xl font-bold leading-2 mb-3">Sponsored</h3>
        <Image src={currentSponsor.imageUrl} alt={currentSponsor.alt} width={280} height={200} className="rounded-lg mb-2" />
        <p className="font-bold text-xl text-white leading-6">{currentSponsor.title}</p>
        <p className="text-sm text-gray-200 leading-6">{currentSponsor.description}</p>
      </div>

      <div className='flex-grow'>
        <hr className='border-t-2 border-blue-300 my-7 w-3/4 mx-auto' />

        <div className='flex flex-col items-center'>
          <UserButton appearance={{ baseTheme: dark }} afterSignOutUrl="/sign-in" />
          <p className="text-light-1 font-bold">Manage Account</p>
        </div>
        {/* Modal toggle button */}
        <div className="flex justify-center mt-4 ">
          <button
            onClick={toggleEditProfileModal}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Confirm or Edit Profile
          </button>
        </div>
        {/* Profile Edit Modal */}
        <EditProfileModal isOpen={isEditProfileModalOpen} onClose={toggleEditProfileModal} />
      </div>
    </div>
  )
}
