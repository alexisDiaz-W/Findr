"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface CompanyDropdownProps {
  onChange: (companyName: string) => void;  // Callback to pass the selected company name to the parent form
}

const CompanyDropdown: React.FC<CompanyDropdownProps> = ({ onChange }) => {
    const [companies, setCompanies] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCompanies = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://bsrwoinpyj.execute-api.us-east-2.amazonaws.com/dev/Findr-UserData');
                const companyNames = JSON.parse(response.data.body);  // Parse the JSON-encoded string from the body
                setCompanies(companyNames);
            } catch (error) {
                console.error('Error fetching companies:', error);
            }
            setLoading(false);
        };

        fetchCompanies();
    }, []);

    return (
        <select onChange={e => onChange(e.target.value)} defaultValue="">
            <option value="" disabled>Select your company</option>
            {companies.map((companyName, index) => (
                <option key={index} value={companyName}>
                    {companyName}
                </option>
            ))}
        </select>
    );
};

export default CompanyDropdown;
