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
  
    const handleCompanyChange = (id: string) => {
      setCompanyID(id);
      //setValue("companyID", id); // This updates the form state if you're using it for submission
    };
  
    return (
      <form className="min-h-screen" onSubmit={onSubmit}>
        <h3>Intern Sign Up</h3>
        <CompanyDropdown onChange={handleCompanyChange} />
  
        <input {...register("firstName", { required: true })} placeholder="First Name" />
        {errors.firstName && <span>This field is required</span>}
  
        <input {...register("lastName", { required: true })} placeholder="Last Name" />
        {errors.lastName && <span>This field is required</span>}
  
        <input {...register("email", { required: true })} placeholder="Email" />
        {errors.email && <span>This field is required</span>}
  
        <input {...register("address", { required: true })} placeholder="Address" />
        {errors.address && <span>This field is required</span>}
  
        <input type="password" {...register("password", { required: true })} placeholder="Password" />
        {errors.password && <span>This field is required</span>}
  
        <button type="submit">Register</button>
      </form>
    );
  };
  
  export default SignUpForm;