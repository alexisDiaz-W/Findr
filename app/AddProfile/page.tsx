
"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../NavBar/navBar';
import Link
 from 'next/link';
interface Profile {
    name: string;
    email: string;
    role: string;
    imageUrl: string;
    lastSeen?: string;
    lastSeenDateTime?: string;
}

export default function AddProfile() {
    const [newProfile, setNewProfile] = useState<Profile>({ name: '', email: '', role: '', imageUrl: '', lastSeen: '', lastSeenDateTime: '' });
    const [submissionMessage, setSubmissionMessage] = useState<string>('');
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewProfile({ ...newProfile, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const profiles = JSON.parse(localStorage.getItem('profiles') || '[]');
        localStorage.setItem('profiles', JSON.stringify([...profiles, newProfile]));
        setNewProfile({ name: '', email: '', role: '', imageUrl: '', lastSeen: '', lastSeenDateTime: '' }); // Reset the form fields
        setSubmissionMessage('Profile successfully added!'); // Set the submission message
        // router.push('/Profiles');
        setTimeout(() => setSubmissionMessage(''), 5000); // Clear the message after 5 seconds
    };

    // Inside AddProfile component
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setNewProfile({ ...newProfile, imageUrl });
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-500">
            <form onSubmit={handleSubmit} className="w-full max-w-md ">
                <NavBar />
                <p className='text-center text-8xl jura mb-10 text-gray-800'>Findr</p>
                <p className='text-2xl mb-2 font-semibold'>Register your profile:</p>
                <div className="text-black grid gap-4 mb-2">
                    <input type="text" name="name" placeholder="Name" value={newProfile.name} onChange={handleChange} required className="input px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                    <input type="email" name="email" placeholder="Email" value={newProfile.email} onChange={handleChange} required className="input px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                    <input type="text" name="role" placeholder="Role" value={newProfile.role} onChange={handleChange} required className="input px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                    <label htmlFor="file-upload" className="custom-file-upload ">
                        Upload Image
                    </label>
                    <input id="file-upload" type="file" onChange={handleImageChange} className="file-input" />
                    <input type="text" name="imageUrl" placeholder="Image URL" value={newProfile.imageUrl} onChange={handleChange} required className="input px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 w-1/4" />

                </div>

                <button type="submit" className="px-4 py-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-150 ease-in-out">
                    Test: Add Profile
                </button>
                <button onClick={() => localStorage.removeItem('profiles')} className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-150 ease-in-out">
                    Test: Delete All Profiles
                </button>
                <Link href="/Profiles" passHref>
                    <button className="px-4 py-2 mt-5 bg-orange-500 text-white rounded hover:bg-blue-700 transition duration-150 ease-in-out">
                        Test: Go to Profiles
                    </button>
                </Link>



                {submissionMessage && (
                    <div className="mt-4 bg-green-100 border-t border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Success! </strong>
                        <span className="block sm:inline">{submissionMessage}</span>
                    </div>
                )}
            </form>
        </div>
    );
}
