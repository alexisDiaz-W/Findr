"use client"
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from 'flowbite-react'
// import{
//     Form,
//     FormControl,
//     FormDescription,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from ""

const formsSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

const PostForm = () => {
    // 1. Define you form
    const form = useForm<z.infer<typeof formsSchema>>({
        resolver: zodResolver(formsSchema),
        defaultValues:{
            username: "",
        },
    })

    // 2. Define a submit  handler.
    function onSubmit(values: z.infer<typeof formsSchema>){
        console.log(values)
    }
    return(
        <div className='max-w-5xl flex-start left-1/4 m-4 justify-start transform -translate-x-1/5 absolute bottom-[105px] text-black'>PostForm</div>
    )
}
export default PostForm