import { sidebarLinks } from "@/constants/index.mjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import EditProfileModal from "../Modals/EditProfileModal";
import { UserButton } from "@clerk/nextjs";


const SocialBottomBarComp = () => {
    const pathname = usePathname();
    const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
    const toggleEditProfileModal = () => setIsEditProfileModalOpen(!isEditProfileModalOpen);

   

    return (
        <div className="sticky flex bottom-0 z-20 w-full bg-black px-6 py-3 items-center justify-between md:hidden">
            {sidebarLinks.map((link) => {
                let isActive = pathname === link.route;
                const isManageLink = link.label === "Manage";

                // Adjust logic for "Home" button: It's not active if the modal is open
                if (link.label === "Home" && isEditProfileModalOpen) {
                    isActive = false;
                }

                // For the "Manage" link, consider it active if the modal is open
                const isManageActive = isManageLink && isEditProfileModalOpen;

                return (
                    isManageLink ? (
                        // For "Manage" link, specifically handle active state and modal toggle
                        <div key={link.label} onClick={toggleEditProfileModal} className={`flex gap-2 items-center rounded-lg py-2 px-4 ${isManageActive ? "bg-blue-500" : ""}`} role="button" tabIndex={0}>
                            {link.icon} <p className="text-sm font-medium text-gray-200 max-sm:hidden">{link.label}</p>
                        </div>
                    ) : (
                        // For other links, including "Home", render as normal
                        <Link key={link.label} href={link.route} passHref title={link.description} className={`flex gap-2 items-center rounded-lg py-2 px-4 ${isActive ? "bg-blue-500" : ""}`}>
                            {link.icon} <p className="text-sm font-medium text-gray-200 max-sm:hidden">{link.label.split(/\s+/)[0]}</p>
                        </Link>
                    )
                );
            })}
            {/* Conditionally render the EditProfileModal based on its visibility state */}
            <EditProfileModal isOpen={isEditProfileModalOpen} onClose={toggleEditProfileModal} />
            <UserButton />
        </div>
    );
};

export default SocialBottomBarComp;

