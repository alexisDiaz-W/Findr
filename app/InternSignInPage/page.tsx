'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import axios, { AxiosError } from 'axios';

interface FormData {
    email: string;
    password: string;
}

const SignInForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        try {
            const response = await axios.post('https://bsrwoinpyj.execute-api.us-east-2.amazonaws.com/dev/Findr-UserData/Findr-User-Auth', data);
            console.log(response.data);
            alert('Login successful!');
        } catch (error) {
            // this error detection does NOT work -AD
            const axiosError = error as AxiosError;  // Type assertion here
            if (axiosError.response && axiosError.response.status === 401) {
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