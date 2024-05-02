"use client";

// src/components/SignUpForm.tsx
import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import CompanyDropdown from '../../components/page';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  password: string;
};
const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<FormData>();

  const [companyID, setCompanyID] = useState("");

  const onSubmit = handleSubmit(async (data) => {
    const fullData = { ...data, companyID };
    console.log(fullData); // You can see what's being sent in the console

    try {
      const response = await axios.post(
        "https://bsrwoinpyj.execute-api.us-east-2.amazonaws.com/dev/Findr-UserData",
        fullData
      );
      alert("User registered successfully!");
      console.log(response.data); // Log the response from the server
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Error registering user.");
    }
  });

  const handleCompanyChange = (id: string | null) => {
    if (id === null) {
      setCompanyID(""); // Handle the null case by setting the company ID to an empty string
    } else {
      setCompanyID(id);
    }
    // setValue("companyID", id); // Uncomment if you need to update the form state as well
  };


  return (
    <form className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8" onSubmit={onSubmit}>
      <h3 className="text-2xl font-bold text-indigo-600 mb-8">Intern Sign Up</h3>
      <CompanyDropdown onChange={handleCompanyChange} />

      <div className="w-full max-w-md space-y-4 mt-5">
        <div className="form-control">
          <input {...register("firstName", { required: true })} placeholder="First Name"
            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg shadow-sm transition duration-300" />
          {errors.firstName && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

        <div className="form-control">
          <input {...register("lastName", { required: true })} placeholder="Last Name"
            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg shadow-sm transition duration-300" />
          {errors.lastName && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

        <div className="form-control">
          <input {...register("email", { required: true })} placeholder="Email"
            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg shadow-sm transition duration-300" />
          {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

        <div className="form-control">
          <input {...register("address", { required: true })} placeholder="Address"
            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg shadow-sm transition duration-300" />
          {errors.address && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

        <div className="form-control">
          <input type="password" {...register("password", { required: true })} placeholder="Password"
            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg shadow-sm transition duration-300" />
          {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

        <button type="submit"
          className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-300">
          Register
        </button>
      </div>
    </form>


  );
};

export default SignUpForm;