'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Message {
    id: number;
    content: string;
    createdAt: string;
}

interface NotificationContextType {
    messages: Message[];
    addMessage: (message: Message) => void;
    removeMessage: (messageId: number) => void;
    deleteMessages: () => void;
    isLoading: boolean; // Add isLoading to the context type
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [messages, setMessages] = useState<Message[]>(() => {
        // Initialization code
        if (typeof window !== 'undefined') {
            const storedMessages = localStorage.getItem('messages');
            return storedMessages ? JSON.parse(storedMessages) : [];
        }
        return [];
    });
    
    const [isLoading, setIsLoading] = useState<boolean>(false); // Manage loading state

    useEffect(() => {
        localStorage.setItem('messages', JSON.stringify(messages));
    }, [messages]);

    const addMessage = (message: Message) => {
        setIsLoading(true); // Optional: Set loading to true if adding involves latency
        setMessages(prevMessages => [...prevMessages, message]);
        setIsLoading(false); // Reset loading state
    };

    const removeMessage = (messageId: number) => {
        setIsLoading(true); // Optional: Set loading while processing
        setMessages(prevMessages => prevMessages.filter(msg => msg.id !== messageId));
        setIsLoading(false); // Reset loading state
    };

    const deleteMessages = () => {
        setIsLoading(true); // Set loading while clearing messages
        setMessages([]);
        setIsLoading(false); // Reset loading state
    };

    return (
        <NotificationContext.Provider value={{ messages, addMessage, removeMessage, deleteMessages, isLoading }}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotifications = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotifications must be used within a NotificationProvider');
    }
    return context;
};

// import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// interface Message {
//     id: number;
//     content: string;
//     createdAt: string;
// }

// interface NotificationContextType {
//     messages: Message[];
//     addMessage: (message: Message) => void;
//     removeMessage: (messageId: number) => void;
//     deleteMessages: () => void; // Add this line to include the deleteMessages signature
// }

// const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

// export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//     // const [messages, setMessages] = useState<Message[]>(() => {
//     //     // Retrieve messages from localStorage when the provider mounts
//     //     const storedMessages = localStorage.getItem('messages');
//     //     return storedMessages ? JSON.parse(storedMessages) : [];
//     // });
//     const [messages, setMessages] = useState<Message[]>(() => {
//         // Check if window is defined which indicates we're running in a browser
//         if (typeof window !== 'undefined') {
//             const storedMessages = localStorage.getItem('messages');
//             return storedMessages ? JSON.parse(storedMessages) : [];
//         }
//         return []; // Return empty array if not in browser
//     });
    

//     useEffect(() => {
//         // Store messages in localStorage whenever they change
//         localStorage.setItem('messages', JSON.stringify(messages));
//     }, [messages]);

//     const addMessage = (message: Message) => {
//         setMessages(prevMessages => [...prevMessages, message]);
//     };

//     const removeMessage = (messageId: number) => {
//         setMessages(prevMessages => prevMessages.filter(msg => msg.id !== messageId));
//     };

//     const deleteMessages = () => {
//         setMessages([]); // Clears all messages
//     };

//     return (
//         <NotificationContext.Provider value={{ messages, addMessage, removeMessage, deleteMessages }}>
//             {children}
//         </NotificationContext.Provider>
//     );
// };

// export const useNotifications = () => {
//     const context = useContext(NotificationContext);
//     if (!context) {
//         throw new Error('useNotifications must be used within a NotificationProvider');
//     }
//     return context;
// };