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
        <main className="text-gray-600 flex flex-col items-center justify-between p-24 w-full min-h-screen">
            <NavBar/>
            <div className="container mx-auto xl:px-30 max-w-7xl">
                <div className="flex flex-col w-full">
                    <div className="p-4">
                        <input
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Write something..."
                            className="border mr-2 w-full h-20 py-6"
                        />
                        <button
                            onClick={handlePost}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Post
                        </button>
                    </div>
                    <div className="flex flex-col w-full">
                        {posts.map((post, index) => (
                            <div key={index} className="p-4 my-2 bg-white rounded-lg shadow-md border border-gray-300"
                                 style={{ height: '150px', width: '100%', overflow: 'auto' }}>
                                {post}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
