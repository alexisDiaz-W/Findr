// import { Sign } from "crypto";
"use client"
import HomeIconButton from "../HomeButton/homeButton"
import NavBar from "../NavBar/navBar"
import React, { useState } from 'react';

export default function CompanySocial() {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handlePost = () => {
        if (input) {
            setPosts([...posts, input]);
            setInput(''); // Clear input after posting
        }
    };

    return (
        // THE MAIN's ClassName is the common background for all pages 
        <main className="text-gray-600  flex min-h-screen flex-col items-center justify-between p-24">
            <NavBar/>
            <div className="container h-screen mx-auto xl:px-30 max-w-7xl">
                <div className="h-screen mx-auto xl:px-30 max-w-6xl">
                    <div className="grid grid-cols-4 h-full">
                        {/* Input field and button to create a post */}
                        <div className="col-span-4 p-4">
                            <input
                                type="text"
                                value={input}
                                onChange={handleInputChange}
                                placeholder="Write something..."
                                className="border p-2 mr-2 w-full"
                            />
                            <button
                                onClick={handlePost}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Post
                            </button>
                        </div>

                        {/* Display posts in a bubble-like background */}
                        {posts.map((post, index) => (
                            <div key={index} className="col-span-4 p-4 my-2 bg-white rounded-lg shadow-md border border-gray-300">
                                {post}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

