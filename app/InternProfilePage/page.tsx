"use client"

import React from "react";
import NavBar from "../NavBar/navBar";
import { PlusIcon } from '@heroicons/react/24/solid'
import PostForm from "../PostForm/page";




export default function CreatePost() {
    return (
        
    
        <div className="flex min-h-screen flex-1 dark:bg-gray-200">
            {/* <PostFeed /> */}
           <NavBar />
            {/* <FEED /> */}
            
            <div className="common-container  ">

                <button>
                    <PlusIcon className="m-2 h-9 max-w-5xl flex-start left-1/4 justify-start transform -translate-x-6 absolute top-[100px]  text-black" />


                    <h4 className="text-black max-w-5xl flex-start left-1/4 m-4 justify-start transform -translate-x-1/5 absolute top-[105px] ">Create Post</h4>
                </button>

             
            </div>
            <PostForm />
            
         
        </div>
    )
}
