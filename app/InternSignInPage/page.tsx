// src/components/SignInForm.js
'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const SignInForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async data => {
        try {
            const response = await axios.post('https://bsrwoinpyj.execute-api.us-east-2.amazonaws.com/dev/Findr-UserData/Findr-User-Auth', data);
            console.log(response.data); // Handle response based on your API logic
            alert('Login successful!');
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert('Invalid credentials');
            } else {
                alert('Login failed');
            }
        }
    };

    return (
        <form className="min-h-screen" onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("email", { required: "Email is required" })}
                placeholder="Email"
                type="email"
            />
            {errors.email && <p>{errors.email.message}</p>}

            <input
                {...register("password", { required: "Password is required" })}
                placeholder="Password"
                type="password"
            />
            {errors.password && <p>{errors.password.message}</p>}

            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignInForm;