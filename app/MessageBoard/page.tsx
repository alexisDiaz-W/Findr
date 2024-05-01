"use client"
import React, { Suspense, useState } from 'react';
import { useNotifications } from "@/contexts/NotificatonContext";

export default function MessageBoardPage() {
    const { messages, addMessage, deleteMessages, isLoading } = useNotifications();
    const [content, setContent] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const newMessage = {
            id: Date.now(),
            content,
            createdAt: new Date().toISOString(),
        };
        addMessage(newMessage);
        setContent('');
    };

    const handleDeleteAll = () => {
        deleteMessages();
    };

    return (
        <div className="min-h-screen text-black max-w-2xl mx-auto my-10 p-5 border rounded shadow">
            <Suspense fallback={<div>Loading...</div>}>
                {!isLoading && (
                    <>
                        <form onSubmit={handleSubmit} className="mb-4">
                            <textarea
                                className="w-full p-2 border rounded"
                                placeholder="Write a notification..."
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            ></textarea>
                            <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                Send
                            </button>
                        </form>
                        <button onClick={handleDeleteAll} className="mb-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                            Delete All Messages
                        </button>
                        <ul>
                            {messages.map((message) => (
                                <li key={message.id} className="bg-gray-100 p-2 my-2 rounded">
                                    {message.content} - {new Date(message.createdAt).toLocaleString()}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </Suspense>
        </div>
    );
};
// export default function MessageBoardPage() {
//     const { messages, addMessage, deleteMessages, isLoading } = useNotifications();
//     const [content, setContent] = useState('');

//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();
//         const newMessage = {
//             id: Date.now(),
//             content,
//             createdAt: new Date().toISOString(),
//         };
//         addMessage(newMessage);
//         setContent('');
//     };

//     const handleDeleteAll = () => {
//         deleteMessages();
//     };

//     // Wait until messages are loaded before rendering
//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="min-h-screen text-black max-w-2xl mx-auto my-10 p-5 border rounded shadow">
//             <form onSubmit={handleSubmit} className="mb-4">
//                 <textarea
//                     className="w-full p-2 border rounded"
//                     placeholder="Write a notification..."
//                     value={content}
//                     onChange={(e) => setContent(e.target.value)}
//                 ></textarea>
//                 <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//                     Send
//                 </button>
//             </form>
//             <button onClick={handleDeleteAll} className="mb-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
//                 Delete All Messages
//             </button>
//             <ul>
//                 {messages.map((message) => (
//                     <li key={message.id} className="bg-gray-100 p-2 my-2 rounded">
//                         {message.content} - {new Date(message.createdAt).toLocaleString()}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };


// export default function MessageBoardPage() {
//     const { messages, addMessage, deleteMessages } = useNotifications(); // Include deleteMessages here
//     const [content, setContent] = useState('');

//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();
//         const newMessage = {
//             id: Date.now(),
//             content,
//             createdAt: new Date().toISOString(),
//         };
//         addMessage(newMessage);
//         setContent('');
//     };

//     const handleDeleteAll = () => {
//         deleteMessages(); // Function to delete all messages
//     };

//     return (
//         <div className="min-h-screen text-black max-w-2xl mx-auto my-10 p-5 border rounded shadow">
//             <form onSubmit={handleSubmit} className="mb-4">
//                 <textarea
//                     className="w-full p-2 border rounded"
//                     placeholder="Write a notification..."
//                     value={content}
//                     onChange={(e) => setContent(e.target.value)}
//                 ></textarea>
//                 <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//                     Send
//                 </button>
//             </form>
//             <button onClick={handleDeleteAll} className="mb-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
//                 Delete All Messages
//             </button>
//             <ul>
//                 {messages.map((message) => (
//                     <li key={message.id} className="bg-gray-100 p-2 my-2 rounded">
//                         {message.content} - {new Date(message.createdAt).toLocaleString()}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };