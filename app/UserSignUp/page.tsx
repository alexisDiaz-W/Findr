"use client";
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import CompanyDropdown from '../../components/page';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Correct import statement for useRouter

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  password: string;
};

const SignUpForm: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [companyID, setCompanyID] = useState("");
  const [companyError, setCompanyError] = useState(""); // State to manage company selection error

  const onSubmit = handleSubmit(async (data) => {
    if (!companyID) {
      setCompanyError("Selecting a company is required."); // Set error if company not selected
      return; // Prevent form submission
    }

    const fullData = { ...data, companyID };
    try {
      const response = await axios.post(
        "https://bsrwoinpyj.execute-api.us-east-2.amazonaws.com/dev/Findr-UserData",
        fullData
      );
      alert("User registered successfully!");
      setTimeout(() => {
        router.push('/InternSignInPage');
      }, 1000);
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Error registering user.");
    }
  });

  const handleCompanyChange = (id: string | null) => {
    setCompanyID(id || "");
    setCompanyError(""); // Clear error when a company is selected
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Link href="/" passHref>
        <h4 className="dark:text-blue-500 jura text-4xl text-black cursor-pointer ml-40 mt-4">Fr</h4>
      </Link>
      <hr className="border-t-2 border-blue-900 my-4 w-full" />

      <form className="flex flex-col items-center justify-center p-8 grow text-black" onSubmit={onSubmit}>
        <h3 className="text-2xl font-bold text-indigo-600 mb-8">Intern Sign Up</h3>
        <CompanyDropdown onChange={handleCompanyChange} />
        {companyError && <span className="text-red-500 text-sm">{companyError}</span>} {/* Display company error here */}
        {/* Input fields and registration button here */}
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
            <input {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "Please enter a valid email address"
              }
            })} placeholder="Email"
              className="w-full px-4 py-3 border-2 border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg shadow-sm transition duration-300" />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
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
    </div>
  );
};

export default SignUpForm;
