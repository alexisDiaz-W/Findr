
"use client"
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../NavBar/navBar';
import Link from 'next/link';
import { interestsOptions } from '@/constants/InterestOptions'
import { useUser, currentUser, } from '@clerk/nextjs'
import Image from 'next/image';
import { profile } from 'console';
import imageCompression, { Options } from 'browser-image-compression';

interface Profile {
    name: string;
    email: string;
    role: string;
    imageUrl: string;
    lastSeen?: string;
    lastSeenDateTime?: string;
    isOnline: boolean;
    interests: string[]; // Add this line
    introduction?: string; // New
    backgroundImageUrl?: string; // New - Background image for profile
    school?: string; // Added field for school
    major?: string;  // Added field for major
    gender?: string
}

export default function AddProfile() {
    const { isLoaded, isSignedIn, user } = useUser(); // Testing to create profile when signing up with Clerk
    const [newProfile, setNewProfile] = useState<Profile>({
        name: '',
        email: '',
        role: '',
        imageUrl: '',
        lastSeen: '',
        lastSeenDateTime: '',
        isOnline: false,
        interests: [],
        introduction: '',
        backgroundImageUrl: '',
        school: '',
        major: '',
        gender: '', // Make sure all fields are initialized, even if with empty strings or appropriate default values.
    });

    const [submissionMessage, setSubmissionMessage] = useState<string>('');
    const [submissionMessageType, setSubmissionMessageType] = useState<'success' | 'error'>('success');
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [introduction, setIntroduction] = useState('');
    const modalContentRef = useRef<HTMLDivElement>(null);
    const [backgroundImageUrl, setBackgroundImageUrl] = useState<string>('');
    const [selectedProfileImageName, setSelectedProfileImageName] = useState('');
    const [selectedBackgroundImageName, setSelectedBackgroundImageName] = useState('');

    // NEW!!
    // Use the Profile interface for the profile parameter
    // const saveProfileToLocal = (profile: Profile) => {
    //     const profilesString = localStorage.getItem('profiles');
    //     let profiles: Profile[] = profilesString ? JSON.parse(profilesString) : [];
    //     const existingIndex = profiles.findIndex((p: Profile) => p.email === profile.email);
    //     if (existingIndex !== -1) {
    //         profiles[existingIndex] = profile; // Update existing profile
    //     } else {
    //         profiles.push(profile); // Add new profile
    //     }
    //     localStorage.setItem('profiles', JSON.stringify(profiles));
    // };


    useEffect(() => {
        if (user) {

            setNewProfile(prevState => ({
                ...prevState,
                name: `${user.firstName || ''} ${user.lastName || ''}`.trim() || prevState.name,
                email: user.primaryEmailAddress?.emailAddress || prevState.email,
                // Only update imageUrl and other fields if they haven't been set by the user.
                imageUrl: prevState.imageUrl || `${user.imageUrl}?timestamp=${new Date().getTime()}`,
                // Assume role and other fields are user-controlled and don't overwrite them here.
                role: prevState.role,
                lastSeen: prevState.lastSeen,
                lastSeenDateTime: prevState.lastSeenDateTime,
                isOnline: prevState.isOnline,
                interests: prevState.interests,
                introduction: prevState.introduction,
                backgroundImageUrl: prevState.backgroundImageUrl,
                school: prevState.school,
                major: prevState.major,
                gender: prevState.gender,
            }));
        }
    }, [user]);



    useEffect(() => {
        const storedProfiles = localStorage.getItem('profiles');
        if (storedProfiles) {
            const profiles: Profile[] = JSON.parse(storedProfiles);
            const currentUserProfile = profiles.find(p => p.email === user?.primaryEmailAddress?.emailAddress);
            if (currentUserProfile) {
                setNewProfile(currentUserProfile);
                // If backgroundImageUrl is part of the profile, set it using setState
                if (currentUserProfile.backgroundImageUrl) {
                    setBackgroundImageUrl(currentUserProfile.backgroundImageUrl);
                    // Optionally, if you also save the image name, set it here
                    setSelectedBackgroundImageName(currentUserProfile.backgroundImageUrl || ''); // Adjust based on how you store it
                }
            }
        }
    }, [user]);

    useEffect(() => {
        if (user) {
            setNewProfile(prevState => ({
                ...prevState,
                imageUrl: user.profileImageUrl || prevState.imageUrl,
            }));
        }
    }, [user]);





    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewProfile(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const profiles = JSON.parse(localStorage.getItem('profiles') || '[]');
        const profileIndex = profiles.findIndex((p: Profile) => p.email === newProfile.email);

        const profileToSave = { ...newProfile, backgroundImageUrl }; // Explicitly set backgroundImageUrl

        if (profileIndex !== -1) {
            // Profile exists - Update the existing profile
            profiles[profileIndex] = profileToSave;
            setSubmissionMessageType('success');
            setSubmissionMessage('Profile updated successfully!');
        } else {
            // New profile - Add it
            profiles.push(profileToSave);
            setSubmissionMessageType('success');
            setSubmissionMessage('Profile added successfully!');
        }

        localStorage.setItem('profiles', JSON.stringify(profiles));
        setTimeout(() => setSubmissionMessage(''), 5000);
    };

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>, type: 'profile' | 'background') => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];

            // Define compression options without explicitly declaring the type
            const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
                useWebWorker: true
            };

            try {
                const compressedFile = await imageCompression(file, options);

                // Convert compressed image file to base64 string
                const convertToBase64 = (file: Blob): Promise<string> => {
                    return new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => resolve(reader.result as string);
                        reader.onerror = error => reject(error);
                    });
                };

                const base64String: string = await convertToBase64(compressedFile);

                if (type === 'profile') {
                    setNewProfile(prevState => ({
                        ...prevState,
                        imageUrl: base64String,
                    }));
                    setSelectedProfileImageName(file.name);
                } else if (type === 'background') {
                    setBackgroundImageUrl(base64String);
                    setSelectedBackgroundImageName(file.name);
                }

            } catch (error) {
                if (error instanceof Error) {
                    console.error("Error compressing or converting the image:", error.message);
                } else {
                    console.error("An unexpected error occurred");
                }
            }
        }
    };


    const handleOnlineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewProfile({ ...newProfile, isOnline: e.target.checked });
    };

    const handleCheckboxChange = (interest: string) => {
        setNewProfile(prevProfile => {
            const interests = prevProfile.interests.includes(interest)
                ? prevProfile.interests.filter(i => i !== interest) // Remove interest
                : [...prevProfile.interests, interest]; // Add interest
            return { ...prevProfile, interests };
        });
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-500">
            <form onSubmit={handleSubmit} className="w-full max-w-md ">
                <NavBar />
                {/* Other form inputs */}
                <p className='text-center text-8xl jura mb-10 text-gray-800'>Findr</p>
                <p className='text-2xl mb-2 font-semibold'>Continue registering your profile:</p>
                <div className="text-black grid gap-4 mb-2">
                    {/* value={newProfile.name}  */}
                    <input type="text" name="name" placeholder="Name" value={newProfile.name} onChange={handleChange} required className="input px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                    <input type="email" name="email" placeholder="Email" value={newProfile.email} onChange={handleChange} required className="input px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                    <input type="text" name="role" placeholder="Role" value={newProfile.role} onChange={handleChange} required className="input px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                    {/* <label htmlFor="file-upload" className="custom-file-upload ">
                        Upload Image
                    </label> */}
                    {/* <input
                        type="file"
                        onChange={(e) => handleImageChange(e, 'profile')}
                        accept="image/*"
                    /> */}
                    {/* <input type="text" name="imageUrl" placeholder="Image URL" value={newProfile.imageUrl} onChange={handleChange} required className="input px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 w-1/4" /> */}
                    <button type="button" onClick={() => setIsDetailsModalOpen(true)} className="mt-4 px-4 py-2 bg-gray-300 text-gray-700 font-bold rounded hover:bg-gray-700 hover:text-gray-300 transition duration-150 ease-in-out">
                        Add More Details
                    </button>
                </div>
                {/* is online check mark test */}
                <div className="form-check">
                    <input type="checkbox"
                        name="isOnline"
                        checked={newProfile.isOnline}
                        onChange={handleOnlineChange}
                        className="form-checkbox h-5 w-5 text-blue-600" />
                    <span className="ml-2 text-gray-100">Looking for roommate?</span>
                </div>

                {/* Interests checklist */}
                {/* Add more details pop-up window */}
                {isDetailsModalOpen && (
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center px-4 py-6 sm:px-0 z-50 overflow-auto" onClick={() => setIsDetailsModalOpen(false)}>
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full space-y-4 overflow-auto" style={{ maxHeight: "80vh" }} onClick={(e) => e.stopPropagation()} ref={modalContentRef}>
                            {/* Close button */}
                            <button onClick={() => setIsDetailsModalOpen(false)} className="absolute top-0 right-0 mt-4 mr-4" aria-label="Close">
                                <svg className="w-6 h-6 text-gray-500 hover:text-gray-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            <textarea
                                name="introduction"
                                placeholder="Introduce yourself..."
                                className="text-black w-full p-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                value={newProfile.introduction || ''} // Use newProfile.introduction as the source of truth
                                onChange={handleChange} // Use the updated handleChange for both input and textarea
                                maxLength={500} // Optional: Limit introduction text length
                            ></textarea>


                            {/* School Input */}
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="school"
                                    placeholder="School"
                                    value={newProfile.school}
                                    onChange={handleChange}
                                    required
                                    className="text-black input px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full"
                                />
                            </div>

                            {/* Major Input */}
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="major"
                                    placeholder="Major"
                                    value={newProfile.major}
                                    onChange={handleChange}
                                    required
                                    className="text-black input px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full"
                                />
                            </div>

                            <div className="grid grid-cols-3 gap-4 items-center">
                                {/* Profile Image Upload */}
                                {/* <label className="text-center cursor-pointer bg-blue-500 text-white active:bg-blue-600 hover:bg-blue-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                    Upload Profile Image
                                    <input type="file" onChange={(e) => handleImageChange(e, 'profile')} className="hidden" accept="image/*" />
                                </label>
                                {selectedProfileImageName && (
                                    <div className="flex items-center justify-center py-2 px-4 bg-blue-100 text-blue-800 rounded-lg mt-2 col-span-2 ">
                                        <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M4 4h16v16H4z"></path>
                                        </svg>
                                        Selected: {selectedProfileImageName}
                                    </div>
                                )} */}

                                {/* Background Image Upload */}

                                <label className="mr-1 mb-1 ease-linear transition-all duration-150 rounded shadow uppercase text-sm px-6 py-3 font-bold  block text-center bg-green-500 text-white cursor-pointer hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                                    Upload Background Image
                                    <input type="file"
                                        onChange={(e) => handleImageChange(e, 'background')}
                                        className="hidden"
                                        accept="image/*"
                                    />
                                </label>
                                {backgroundImageUrl && (
                                    <Image

                                        width={200}
                                        height={200}
                                        src={backgroundImageUrl}
                                        alt="Background preview"
                                        className="object-cover"
                                    />
                                )}
                                {/* shows selecte file name for image upload */}
                                {/* {selectedBackgroundImageName && (
                                    <div className="flex items-center justify-center py-2 px-4 bg-green-100 text-green-800 rounded-lg mt-2">
                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M5 3v17a2 2 0 002 2h10a2 2 0 002-2V3m-4 0v17m-6-17v17m-2-5H5m14 0h-4m4 0v-5m0-4V3m0 5h-4m4 0H5"></path>
                                        </svg>
                                        Selected: {selectedBackgroundImageName}
                                    </div>
                                )} */}
                            </div>

                            {/* Gender Selection */}
                            <div className="mb-4">
                                <p className="text-black text-lg font-medium mb-2">Gender:</p>
                                <div className="flex items-center space-x-4">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Male"
                                            checked={newProfile.gender === 'Male'}
                                            onChange={handleChange}
                                            className="form-radio"
                                        />
                                        <span className="ml-2 text-black">Male</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Female"
                                            checked={newProfile.gender === 'Female'}
                                            onChange={handleChange}
                                            className="form-radio"
                                        />
                                        <span className="ml-2 text-black">Female</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Other"
                                            checked={newProfile.gender === 'Other'}
                                            onChange={handleChange}
                                            className="form-radio"
                                        />
                                        <span className="ml-2 text-black">Other</span>
                                    </label>
                                </div>
                            </div>



                            <div className="space-y-2">
                                <p className="text-black text-lg font-medium">Tell us about yourself and interests:</p>
                                {interestsOptions.map((interest, index) => (
                                    <label key={index} className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox"
                                            checked={newProfile.interests.includes(interest)}
                                            onChange={() => handleCheckboxChange(interest)}
                                        />
                                        <span className="ml-2 mx-3 text-black">{interest}</span>
                                    </label>
                                ))}
                            </div>
                            <button
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-150 ease-in-out"
                                onClick={() => setIsDetailsModalOpen(false)}
                            >
                                Save Details
                            </button>
                        </div>
                    </div>
                )}

                {/* Submit button and link to profiles */}
                <button type="submit" className="px-4 py-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-150 ease-in-out">
                    Test: Confirm Changes or Add Profile
                </button>
                {/* Other buttons */}
                <button onClick={() => localStorage.removeItem('profiles')} className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-150 ease-in-out">
                    Test: Delete All Profiles
                </button>


                <Link href="/Profiles" passHref>
                    <button className="px-4 py-2 mt-5 bg-green-500 text-white rounded hover:bg-blue-700 transition duration-150 ease-in-out">
                        Test: Go to Profiles
                    </button>
                </Link>

                {submissionMessage && (
                    <div className={`mt-4 px-4 py-3 rounded relative ${submissionMessageType === 'success' ? 'bg-green-100 border-t border-green-400 text-green-700' : 'bg-red-100 border-t border-red-400 text-red-700'}`} role="alert">
                        <strong className="font-bold">{submissionMessageType === 'success' ? 'Success! ' : 'Error! '}</strong>
                        <span className="block sm:inline">{submissionMessage}</span>
                    </div>
                )}

            </form>
        </div>
    );
}

