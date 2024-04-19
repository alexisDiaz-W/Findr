"use client"

import React, { useState, useEffect } from 'react';

const MyComponent = () => {

    const inputStyle = {
        color: 'black'
      };
  // State to hold the parsed data
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch('https://iv306d9b5g.execute-api.us-east-2.amazonaws.com/dev/FindrGetCompanyDataCORS')
      .then(response => response.json())
      .then(data => {
        // Parse the 'body' string into a JavaScript array
        const parsedData = JSON.parse(data.body);
        setCompanies(parsedData); // Set the parsed array into state
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1 style={inputStyle}>All Company Data</h1>
      {companies.length > 0 ? (
        <ul style={inputStyle}>
          {companies.map((company, index) => (
            <li key={index}>
              <h2>{company.companyName}</h2>
              <p><strong>ID:</strong> {company.companyID}</p>
              <p><strong>Email:</strong> {company.email}</p>
              <p><strong>Address:</strong> {company.address}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p style={inputStyle}>Loading...</p>
      )}
    </div>
  );
};

export default MyComponent;
