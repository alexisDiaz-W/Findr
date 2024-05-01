import React, { useEffect, useState} from 'react';
import { useNotifications } from '@/contexts/NotificatonContext'; // Ensure the path is correct
import { format, parseISO } from 'date-fns'; // Import formatting function

interface NotificationsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const NotificationsModal: React.FC<NotificationsModalProps> = ({ isOpen, onClose }) => {
    const { messages } = useNotifications();
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isOpen) {
            setShowModal(true);
        } else {
            timer = setTimeout(() => setShowModal(false), 300);
        }
        return () => clearTimeout(timer);
    }, [isOpen]);

    return (
        showModal && (
            <div className={`text-black fixed bottom-0 inset-x-0 w-full md:w-96 bg-white shadow-lg rounded-t-lg transition-transform ${isOpen ? '-translate-y-16 ease-in duration-800' : 'translate-y-full ease-out duration-300'}`}
                 aria-hidden={!isOpen}>
                <div className="flex justify-between items-center border-b border-gray-200 px-5 py-3">
                    <span className=" text-lg font-semibold">Notifications ({messages.length})</span>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <ul className="max-h-80 overflow-y-auto">
                    {messages.map((message) => (
                        <li key={message.id} className="border-b last:border-b-0 border-gray-200 px-5 py-3">
                            {message.content}
                            {/* Display formatted date */}
                            <div className="text-sm font-light text-gray-400">
                                {format(parseISO(message.createdAt), 'PPP p')} {/* Adjust format as needed */}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    );
};
// interface NotificationsModalProps {
//     isOpen: boolean;
//     onClose: () => void;
// }

// export const NotificationsModal: React.FC<NotificationsModalProps> = ({ isOpen, onClose }) => {
//     const { messages } = useNotifications();
//     const [showModal, setShowModal] = useState(isOpen); // Initialize showModal based on isOpen

//     useEffect(() => {
//         let timer: NodeJS.Timeout; // Typing the timer variable correctly as NodeJS.Timeout
//         if (isOpen) {
//             setShowModal(true); // Open modal immediately on isOpen true
//         } else {
//             timer = setTimeout(() => setShowModal(false), 300); // Delay hiding modal to allow animation to complete
//         }
//         return () => clearTimeout(timer); // Cleanup the timer
//     }, [isOpen]);

//     // Using TailwindCSS for sliding effect:
//     // "translate-y-full" to start off-screen
//     // "translate-y-0" to slide to the viewable area
//     // "ease-out" for a smooth start of the animation, "ease-in" for a smooth end
//     return (
        
//         showModal && (
//             <div className={`text-black fixed bottom-0 inset-x-0 w-full md:w-96 bg-white shadow-lg rounded-t-lg transition-transform ${isOpen ? '-translate-y-16 ease-in duration-800' : 'translate-y-full ease-out duration-300'}`}
//                  aria-hidden={!isOpen}>
//                 <div className="flex justify-between items-center border-b border-gray-200 px-5 py-3">
//                     <span className=" text-lg font-semibold">Notifications ({messages.length})</span>
//                     <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
//                     </button>
//                 </div>
//                 <ul className="max-h-80 overflow-y-auto">
//                     {messages.map((message) => (
//                         <li key={message.id} className="border-b last:border-b-0 border-gray-200 px-5 py-3">
//                             {message.content}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         )
//     );
// };
