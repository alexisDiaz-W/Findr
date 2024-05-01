

import { sidebarLinks } from "@/constants/index.mjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import EditProfileModal from "../Modals/EditProfileModal";
import SearchProfileModal from "../Modals/SearchProfileModal";
import { NotificationsModal } from "../Modals/NotificationsModal";
import { UserButton } from "@clerk/nextjs";
import { NotificationProvider } from "@/contexts/NotificatonContext";

interface SocialBottomBarCompProps {
    onSearchChange: (searchTerm: string) => void;
}

const SocialBottomBarComp: React.FC<SocialBottomBarCompProps> = ({ onSearchChange }) => {
    const pathname = usePathname();
    const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
    const [isSearchProfileModalOpen, setIsSearchProfileModalOpen] = useState(false);
    const [isNotificationsModalOpen, setIsNotificationsModalOpen] = useState(false);

    const toggleEditProfileModal = () => setIsEditProfileModalOpen(!isEditProfileModalOpen);
    const toggleSearchProfileModal = () => setIsSearchProfileModalOpen(!isSearchProfileModalOpen);
    const toggleNotificationsModal = () => setIsNotificationsModalOpen(!isNotificationsModalOpen);

    return (
  
        <NotificationProvider>
            <div className="z-50 sticky flex bottom-0 w-full bg-black px-6 py-3 items-center justify-between md:hidden">
                {sidebarLinks.map((link) => {
                    let isActive = false; // Default to false

                    // Special handling based on modals
                    if (link.label === "Manage" && isEditProfileModalOpen) {
                        isActive = true;
                    } else if (link.label === "Search" && isSearchProfileModalOpen) {
                        isActive = true;
                    } 
                    else if (!isEditProfileModalOpen && !isSearchProfileModalOpen && pathname === link.route) {
                        // If no modals are open and the route matches, then it's active
                        isActive = true;
                    }

                    if (link.label === "Search") {
                        return (
                            <div key={link.label} onClick={toggleSearchProfileModal} className={`flex gap-2 items-center rounded-lg py-2 px-4 cursor-pointer ${isActive ? "bg-blue-500" : ""}`}>
                                {link.icon} <p className="text-sm font-medium text-gray-200 max-sm:hidden">{link.label}</p>
                            </div>
                        );
                    }

                    if (link.label === "Manage") {
                        return (
                            <div key={link.label} onClick={toggleEditProfileModal} className={`flex gap-2 items-center rounded-lg py-2 px-4 ${isActive ? "bg-blue-500" : ""}`} role="button" tabIndex={0}>
                                {link.icon} <p className="text-sm font-medium text-gray-200 max-sm:hidden">{link.label}</p>
                            </div>
                        );
                    }

                    if (link.label === "Notifications") {
                        return (
                            <div key={link.label} onClick={toggleNotificationsModal} className={`flex gap-2 items-center rounded-lg py-2 px-4 cursor-pointer ${isNotificationsModalOpen ? "bg-blue-500" : ""}`}>
                                {link.icon} <p className="text-sm font-medium text-gray-200 max-sm:hidden">{link.label}</p>
                            </div>
                        );
                    }


                    // Other links
                    return (
                        <Link key={link.label} href={link.route} passHref title={link.description} className={`flex gap-2 items-center rounded-lg py-2 px-4 ${isActive ? "bg-blue-500" : ""}`}>
                            {link.icon} <p className=" text-sm font-medium text-gray-200 max-sm:hidden">{link.label.split(/\s+/)[0]}</p>
                        </Link>
                    );
                })}
                <EditProfileModal isOpen={isEditProfileModalOpen} onClose={toggleEditProfileModal} />
                <SearchProfileModal isOpen={isSearchProfileModalOpen} onClose={toggleSearchProfileModal} onSearchChange={onSearchChange} />
                <NotificationsModal isOpen={isNotificationsModalOpen} onClose={toggleNotificationsModal} />
                <UserButton />
            </div>
            </NotificationProvider>
    );
};

export default SocialBottomBarComp;
