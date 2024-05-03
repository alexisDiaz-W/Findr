"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  FirstName: string;
  LastName: string;
  Email: string;
}

// Function to fetch users based on company ID
const fetchUsers = async (companyID: string): Promise<User[]> => {
    const url = `https://bsrwoinpyj.execute-api.us-east-2.amazonaws.com/dev/Findr-Intern-Explore-Page?companyID=${encodeURIComponent(
    companyID
  )}`;

    try {
      const response = await axios.get<User[]>(url);
      return response.data; 
    } catch (error) {
      console.error('Failed to fetch users:', error);
      throw error; 
    }
  };

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const companyID = "Findr"; 

  useEffect(() => {
    fetchUsers(companyID)
        .then(data => {
            setUsers(data);
        })
        .catch(error => console.error('Fetching error:', error));
}, [companyID]);

return (
  <div className="min-h-screen bg-gray-100 p-10">
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold text-center text-gray-600 mb-10">Connect with Interns from <span className="text-4xl text-blue-600">{companyID}</span></h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user, index) => (
          <li key={index} className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-200 transition duration-300 ease-in-out">
            <h2 className="text-xl text-black font-semibold">{user.FirstName} {user.LastName}</h2>
            <p className="text-gray-600">{user.Email}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
};

export default UsersPage;
