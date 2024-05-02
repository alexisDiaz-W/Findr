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
            const responseBody = JSON.parse(response.data.body);

            // Check the message that is returned inside the response body
            if (responseBody.message === 'Login successful') {
                alert('Login successful!');
            } else if (responseBody.statusCode === 'Unauthorized') {
                alert('Invalid credentials');
            } else if (responseBody.message==='User not found') {
                alert("User not found. Try Again.");
            } else {
                alert('Login failed'); // Catch other statuses as general failures
            }
    
            console.log(response.data); // Log the full response data
        } catch (error) {
            const axiosError = error as AxiosError;  // Type assertion here
            if (axiosError.response) {
                console.error('Response body:', axiosError.response.data);
                alert('Login failed - network issue or server error');
            } else {
                console.error('Error:', axiosError.message);
                alert('An unexpected network error occurred');
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