"use client";
import Image from "next/image";
import NavBar from "../../components/NavBar/navBar";
import React from "react";
import image from "../../Images/AlexDiaz.jpg"

const people = [
  // Add people...
  {
    name: "Alexis Diaz",
    email: "alexdiaz10129@gmail.com",
    role: "Co-Founder",
    imageUrl: "https://findr-intern-profile-pictures.s3.us-east-2.amazonaws.com/AlexDiaz.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLWVhc3QtMiJHMEUCIHGHNPiQu%2FgCtt8By2FN%2F8Hx474ndj94QvMsm7I6RCQxAiEA6y6Yee%2BPsUm3uxCszpjKv5KHx2eawEMdJwYOozegx%2Fsq7QIIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0NzY2NTU2MjE3MjAiDNX%2FB1HmzFwZe%2BzpEirBAoy4GJHpSDuBfGFej%2BW77WFreRH%2B5x2QE%2B9u8qjnMxVPLf6%2FNh2QkdlGZX4u055PBRpR6AhBuU1wwdCBWwJEt1sn8UGb0YOvBU8STuTmCN6u5zc%2BT6CtevRZxF%2B8dPSgRvpWP9uffFEe3hPqkxBn7JkS5A3p%2FTpLuT7z9qNPOblZFwMVxrsA7wX59UkEpHEmL%2F4ddS7DhUvszyHGsapki4hC0Xt85b5hlAueaFi%2BtejjVWaHtuMwaE%2B0E%2FSA9TXhIfT7DxPnYN4sQunYmMe0NIsNH3LOvh5fhCvZ5C8c6e6YTb76ej8bgTQbQ5HloO9PKg2dGtDcFWcIPbBsIHMx3JuGCWvKLu5UHhstHizkyOBkEeDVFH35Ia9YrVRSzYAWadHHBQ%2FkNt5qMBkexRJuIH4FwO4ablQuVAk1HlCwN%2BoNlTCJt%2BCxBjqzAu%2F9%2B1cdjqmrG0FQxIE0nbZvdjz6OVp5271EU%2Bii8xeGDmM%2B6BnrkpMExUIVFL47QRMR8AcvUCUDJNqqLVyYecJrN4tDIX9tIj2H3AlSADLF9jWr7pWZrcdaeJx0GY7daQ5%2BQjSLNrPzghFaJyR6Ka3zuc6%2ByF9mpSpO7wU6nUWhI5z4E2wveIZRuLW36wRq0%2B6Ttuoar5uqIZacSKju9gazgxUxDycQMv56G4ORXDTdVKFVgMKQCrGkG9pZqOZhHPgwVdkzfgwTnfGv545kuBsoJENW7liYPn0V%2BnHEaEf3WYm7qhg4S6F%2BQOpgCTinJnW5EK%2BrMRTnoUWiwSoz8ki0x9QpgYm%2FhtT3nGEEg1aFmCuAbHkaQSOHY7GSpvPZbkm2p7PS2ljl4OAxa4l0qreOhJ8%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240505T235807Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAW56XDSZMJYX6WK4S%2F20240505%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=e37b0915f55ff866c45abde1e877dbc7503c6f3dccd7611c8df90ac736c90a8a",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
    isOnline: true, //Changes online status
  },
  {
    name: "Manuel Llamas",
    email: "mxllamas1@shockers.wichita.edu",
    role: "Co-Founder",
    imageUrl: "https://findr-intern-profile-pictures.s3.us-east-2.amazonaws.com/ManuelLlamas.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLWVhc3QtMiJHMEUCIHGHNPiQu%2FgCtt8By2FN%2F8Hx474ndj94QvMsm7I6RCQxAiEA6y6Yee%2BPsUm3uxCszpjKv5KHx2eawEMdJwYOozegx%2Fsq7QIIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0NzY2NTU2MjE3MjAiDNX%2FB1HmzFwZe%2BzpEirBAoy4GJHpSDuBfGFej%2BW77WFreRH%2B5x2QE%2B9u8qjnMxVPLf6%2FNh2QkdlGZX4u055PBRpR6AhBuU1wwdCBWwJEt1sn8UGb0YOvBU8STuTmCN6u5zc%2BT6CtevRZxF%2B8dPSgRvpWP9uffFEe3hPqkxBn7JkS5A3p%2FTpLuT7z9qNPOblZFwMVxrsA7wX59UkEpHEmL%2F4ddS7DhUvszyHGsapki4hC0Xt85b5hlAueaFi%2BtejjVWaHtuMwaE%2B0E%2FSA9TXhIfT7DxPnYN4sQunYmMe0NIsNH3LOvh5fhCvZ5C8c6e6YTb76ej8bgTQbQ5HloO9PKg2dGtDcFWcIPbBsIHMx3JuGCWvKLu5UHhstHizkyOBkEeDVFH35Ia9YrVRSzYAWadHHBQ%2FkNt5qMBkexRJuIH4FwO4ablQuVAk1HlCwN%2BoNlTCJt%2BCxBjqzAu%2F9%2B1cdjqmrG0FQxIE0nbZvdjz6OVp5271EU%2Bii8xeGDmM%2B6BnrkpMExUIVFL47QRMR8AcvUCUDJNqqLVyYecJrN4tDIX9tIj2H3AlSADLF9jWr7pWZrcdaeJx0GY7daQ5%2BQjSLNrPzghFaJyR6Ka3zuc6%2ByF9mpSpO7wU6nUWhI5z4E2wveIZRuLW36wRq0%2B6Ttuoar5uqIZacSKju9gazgxUxDycQMv56G4ORXDTdVKFVgMKQCrGkG9pZqOZhHPgwVdkzfgwTnfGv545kuBsoJENW7liYPn0V%2BnHEaEf3WYm7qhg4S6F%2BQOpgCTinJnW5EK%2BrMRTnoUWiwSoz8ki0x9QpgYm%2FhtT3nGEEg1aFmCuAbHkaQSOHY7GSpvPZbkm2p7PS2ljl4OAxa4l0qreOhJ8%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240506T000039Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAW56XDSZMJYX6WK4S%2F20240506%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=c949476b9ac6e3a34b53e6c691a9d5f40d35a863395e73aac2c578b070476acb",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
    isOnline: false, //Changes online status
  },
  {
    name: "Jacobo",
    email: "jxnavarrete3@shockers.wichita.edu",
    role: "Co-Founder",
    imageUrl: "https://findr-intern-profile-pictures.s3.us-east-2.amazonaws.com/RenderedImage.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLWVhc3QtMiJHMEUCIHGHNPiQu%2FgCtt8By2FN%2F8Hx474ndj94QvMsm7I6RCQxAiEA6y6Yee%2BPsUm3uxCszpjKv5KHx2eawEMdJwYOozegx%2Fsq7QIIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0NzY2NTU2MjE3MjAiDNX%2FB1HmzFwZe%2BzpEirBAoy4GJHpSDuBfGFej%2BW77WFreRH%2B5x2QE%2B9u8qjnMxVPLf6%2FNh2QkdlGZX4u055PBRpR6AhBuU1wwdCBWwJEt1sn8UGb0YOvBU8STuTmCN6u5zc%2BT6CtevRZxF%2B8dPSgRvpWP9uffFEe3hPqkxBn7JkS5A3p%2FTpLuT7z9qNPOblZFwMVxrsA7wX59UkEpHEmL%2F4ddS7DhUvszyHGsapki4hC0Xt85b5hlAueaFi%2BtejjVWaHtuMwaE%2B0E%2FSA9TXhIfT7DxPnYN4sQunYmMe0NIsNH3LOvh5fhCvZ5C8c6e6YTb76ej8bgTQbQ5HloO9PKg2dGtDcFWcIPbBsIHMx3JuGCWvKLu5UHhstHizkyOBkEeDVFH35Ia9YrVRSzYAWadHHBQ%2FkNt5qMBkexRJuIH4FwO4ablQuVAk1HlCwN%2BoNlTCJt%2BCxBjqzAu%2F9%2B1cdjqmrG0FQxIE0nbZvdjz6OVp5271EU%2Bii8xeGDmM%2B6BnrkpMExUIVFL47QRMR8AcvUCUDJNqqLVyYecJrN4tDIX9tIj2H3AlSADLF9jWr7pWZrcdaeJx0GY7daQ5%2BQjSLNrPzghFaJyR6Ka3zuc6%2ByF9mpSpO7wU6nUWhI5z4E2wveIZRuLW36wRq0%2B6Ttuoar5uqIZacSKju9gazgxUxDycQMv56G4ORXDTdVKFVgMKQCrGkG9pZqOZhHPgwVdkzfgwTnfGv545kuBsoJENW7liYPn0V%2BnHEaEf3WYm7qhg4S6F%2BQOpgCTinJnW5EK%2BrMRTnoUWiwSoz8ki0x9QpgYm%2FhtT3nGEEg1aFmCuAbHkaQSOHY7GSpvPZbkm2p7PS2ljl4OAxa4l0qreOhJ8%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240506T000630Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43199&X-Amz-Credential=ASIAW56XDSZMJYX6WK4S%2F20240506%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=d24e5e2381836155f74e39e1524cf54e40f3cffc45c1a25ee2565fda19439449",
    lastSeen: null,
    isOnline: false, //Changes online status
  },
];

export default function Example() {
  return (
    <div className="min-h-screen page-background py-24 sm:py-32">
      <NavBar />
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet the team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the passionate students building Findr.
          </p>
        </div>
        <ul role="list" className="divide-y divide-gray-100">
          {people.map((person) => (
            <li
              key={person.email}
              className="flex justify-between gap-x-6 py-5"
            >
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src={person.imageUrl}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {person.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {person.email}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">{person.role}</p>
                {person.lastSeen ? (
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Last seen{" "}
                    <time dateTime={person.lastSeenDateTime}>
                      {person.lastSeen}
                    </time>
                  </p>
                ) : (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs leading-5 text-gray-500">Online</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
