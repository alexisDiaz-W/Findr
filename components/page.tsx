import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface CompanyDropdownProps {
    onChange: (companyName: string | null) => void;  // Allow null to clear selection
}

const CompanyDropdown: React.FC<CompanyDropdownProps> = ({ onChange }) => {
    const [companies, setCompanies] = useState<string[]>([]);
    const [selectedCompany, setSelectedCompany] = useState<string | null>(null); // Allow null as an initial state
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCompanies = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://bsrwoinpyj.execute-api.us-east-2.amazonaws.com/dev/Findr-UserData');
                const companyNames = JSON.parse(response.data.body);  // Assuming response.data.body is a JSON string of company names
                setCompanies(companyNames);
            } catch (error) {
                console.error('Error fetching companies:', error);
            }
            setLoading(false);
        };

        fetchCompanies();
    }, []);

    const handleSelect = (companyName: string | null) => {
        setSelectedCompany(companyName);
        onChange(companyName);
        setIsOpen(false);
    };

    return (
        <div className="text-black relative w-64 mx-auto">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full p-2 text-left text-base border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            >
                {selectedCompany || 'Select your company'}
                <svg className="w-4 h-4 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            {isOpen && (
                <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                    <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSelect(null)}  // Reset the selection
                    >
                        Select your company
                    </li>
                    {companies.map((companyName, index) => (
                        <li key={index}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelect(companyName)}
                        >
                            {companyName}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CompanyDropdown;
