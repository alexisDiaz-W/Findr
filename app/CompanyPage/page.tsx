"use client"
import Image from 'next/image'
import NavBar from "../../components/NavBar/navBar"
import React from 'react'

const people = [
  // Add people...
  { name: 'Alexis Diaz',
    email: 'alexdiaz10129@gmail.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
    isOnline: true, //Changes online status
  },
  {
    name: 'Manuel Llamas',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
    isOnline: false, //Changes online status
  },
  {
    name: 'Jacobo',
    email: 'dries.vincent@example.com',
    role: 'Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
    isOnline: false, //Changes online status
  },
]

export default function Example() {
  return (
    <div className="min-h-screen page-background py-24 sm:py-32">
      <NavBar />
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div>
                <Image
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt={person.name}
                  width={64} // Specify the width (in pixels)
                  height={64} // Specify the height (in pixels)
                  layout="fixed" // This can be adjusted based on your layout needs
                />
                <div className="mt-1 flex items-center gap-x-1.5">
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.isOnline ? "Online" : "Offline"}</p>
                </div>
                <div>
                  <p className="text-xs leading-5 text-gray-500"></p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
