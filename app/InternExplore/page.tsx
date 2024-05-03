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
      return response.data; // Assuming the API directly returns an array of users
    } catch (error) {
      console.error('Failed to fetch users:', error);
      throw error; // Rethrow or handle error appropriately
    }
  };

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const companyID = "Findr"; // This would realistically come from props, context, or session

  useEffect(() => {
    fetchUsers(companyID)
        .then(data => {
            setUsers(data);
        })
        .catch(error => console.error('Fetching error:', error));
}, [companyID]);

  return (
    <div>
      <h1>Connect with Interns from {companyID}</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.FirstName} {user.LastName} - {user.Email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
