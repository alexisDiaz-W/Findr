'use client'
import React, { useState } from 'react';

type Message = {
    id: string;
    content: string;
    dueDate: string; // Assuming ISO string format for simplicity
    event: string;
};

const RecruiterProfileBoard: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [content, setContent] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [event, setEvent] = useState('');
    const [editingId, setEditingId] = useState<string | null>(null);

    const handleAddOrUpdateMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingId) {
            setMessages((prev) =>
                prev.map((message) =>
                    message.id === editingId ? { ...message, content, dueDate, event } : message,
                ),
            );
        } else {
            const newMessage = {
                id: Date.now().toString(),
                content,
                dueDate,
                event,
            };
            setMessages((prev) => [...prev, newMessage]);
        }
        setContent('');
        setDueDate('');
        setEvent('');
        setEditingId(null);
    };

    const startEditing = (id: string) => {
        const message = messages.find((message) => message.id === id);
        if (!message) return;
        setContent(message.content);
        setDueDate(message.dueDate);
        setEvent(message.event);
        setEditingId(id);
    };

    return (
        <div className="text-black flex min-h-screen flex-col items-center justify-center max-w-4xl mx-auto py-8 px-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recruiter Profile Messaging Board</h2>
            <form onSubmit={handleAddOrUpdateMessage} className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Message Content"
                        className="p-2 border border-gray-300 rounded-lg"
                        required
                    />
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className="p-2 border border-gray-300 rounded-lg"
                        required
                    />
                    <input
                        type="text"
                        value={event}
                        onChange={(e) => setEvent(e.target.value)}
                        placeholder="Event"
                        className="p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    {editingId ? 'Update' : 'Add'} Message
                </button>
            </form>
            <div>
                {messages.map((message) => (
                    <div key={message.id} className="mb-4 p-4 bg-white shadow-lg rounded-lg">
                        <p className="text-lg font-medium text-gray-900">{message.content}</p>
                        <p className="text-gray-600">Due Date: {message.dueDate}</p>
                        <p className="text-gray-600 mb-4">Event: {message.event}</p>
                        <button
                            onClick={() => startEditing(message.id)}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded"
                        >
                            Edit
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecruiterProfileBoard;
