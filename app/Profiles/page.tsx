"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import TopBar from '@/components/layout/SocialSearchBar';
import Link from 'next/link';

interface Profile {
  name: string;
  email: string;
  role: string;
  imageUrl: string;
  lastSeen?: string;
  lastSeenDateTime?: string;
}

const Profiles: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    const storedProfiles = JSON.parse(localStorage.getItem('profiles') || '[]');
    setProfiles(storedProfiles);
  }, []);

  {/* Logo, account image/name, and advertising component */ }
  const RightSideBar = () => (
    <div className="sm:hidden mx-auto max-w-sm px-3 hidden sticky top-0 z-20 h-screen xl:w-[400px] w-full flex-col gap-12 overflow-auto pl-6 lg:block">
      <div className="flex flex-col gap-4 px-4 py-0 items-center">
        <Link href="/">
          <p className='text-blue-400 text-6xl text-center jura'>Findr</p>
        </Link>

        <Link href={``}>
          <Image
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="profile photo"
            width={70}
            height={70}
            className="rounded-full"
          />
        </Link>
        <p className='text-gray-300 text-lg font-semibold leading-3'>Leslie Alexander</p>

        <TopBar />
      </div>

      <hr className='border-t-2 border-white my-8 w-3/4 sm:w-1/2 md:w-2/3 lg:w-full mx-auto' />

      <div className="grid w-[280px] mx-auto">
        <h3 className="text-white text-3xl font-bold leading-2 mb-3">Sponsored</h3>
        {/* Keep image size consistent across screen sizes */}
        <Image src="/assets/apt1.png" alt="ad" width={280} height={200} className="rounded-lg mb-2" />
        <p className="font-bold text-xl text-white leading-6">River Vista</p>
        <p className="text-sm text-gray-200 leading-6">
          With thoughtful design and exclusive community amenities,
          River Vista Apartments is your destination for luxury apartments
          in Wichita, Kansas! We&apos;ve redefined what upscale living means to you
          in our exceptional studio, one, and two-bedroom apartments, that offer
          up to 1,210 square feet of living space with a collection of interior touches.
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <Link href="/AddProfile" passHref className="px-4 py-2 bg-blue-500 text-white rounded
             hover:bg-blue-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2
              focus:ring-blue-500 focus:ring-opacity-50">
          Test: Back to Add Profile
        </Link>
      </div>
    </div>
  );

  return (

    <div className="bg-gray-800 min-h-screen py-8 ">
      <div className="pt-2 flex justify-between">
        {/* Main content area */}
        <div className="flex-grow mx-auto max-w-5xl">
          <ul role="list" className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-10 px-4 lg:px-0">
            {profiles.map((profile, index) => (
              <li key={index} className="bg-white shadow-2xl overflow-hidden rounded-lg mx-auto min-h-[300px] w-full sm:w-3/4 md:w-[400px] lg:w-[450px] xl:w-[500px]">
                <div className="flex flex-col items-center p-6 space-y-0">
                  <Image width={270} height={200} className="relative rounded-full overflow-hidden mb-6" src={profile.imageUrl} alt={profile.name} />
                  <div className="mt-4 text-center space-y-2 sm:text-sm">
                    <p className="text-2xl font-medium leading-6 text-gray-900">{profile.name}</p>
                    <p className="mt-1 text-md leading-5 text-gray-600">{profile.email}</p>
                    <p className="mt-2 text-sm leading-6 text-gray-900">{profile.role}</p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">Last seen: {profile.lastSeen}</p>
                    <p className="mt-1 text-sm leading-5 text-gray-500">Last seen date: {profile.lastSeenDateTime}</p>
                  </div>
                </div>
                <div className="flex mt-4 border-t border-gray-200 w-full">
                  <button className="flex-1 py-6 text-md font-medium text-gray-600 hover:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
                    Email
                  </button>
                  <div className="border-l border-gray-200"></div>
                  <button className="flex-1 py-6 text-sm font-medium text-gray-600 hover:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
                    Message
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Logo, account image/name, and advertising component */}
        <RightSideBar />
      </div>
    </div>
  );
};

export default Profiles;
