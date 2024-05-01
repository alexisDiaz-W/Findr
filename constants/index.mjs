// This component provides functionality to SocialBottomComp.tsx 
// Provides icons and what their fucntion is when pressed
import {
    Home,
    AddPhotoAlternateOutlined,
    GroupOutlined,
    BookmarksOutlined,
    FavoriteBorder,
    ManageAccountsRounded,
    ManageAccountsOutlined,
    PersonSearch,
    MarkChatUnread,
    Announcement,
    CircleNotificationsOutlined,
    NotificationsOutlined,
    MarkChatRead,
    MarkUnreadChatAltOutlined,
  } from "@mui/icons-material";
  import SearchProfileModal from "@/components/Modals/SearchProfileModal";
  import { useNotifications } from '@/contexts/NotificatonContext';

  
  
  export const sidebarLinks = [
  

    {
      icon: <Home sx={{ color: "white", fontSize: "26px" }} />,
      route: "/Profiles",
      label: "Home",
      description: "Go to Home Page",
    },
    {
      icon: <PersonSearch sx={{ color: "white", fontSize: "26px" }} />,
      route: "./components/Modals/SearchProfileModal.tsx",
      label: "Search",
      description: "Search Intern",
    },
   
    // {
    //   icon: <GroupOutlined sx={{ color: "white", fontSize: "26px" }} />,
    //   route: "/people",
    //   label: "People",
    // },
    {
      icon: <ManageAccountsOutlined sx={{ color: "white", fontSize: "26px" }} />,
      route: "./components/Modals/EditProfileModal.tsx",
      label: "Manage",
      description: "Manage/Confirm Changes",
    
     },
    {
      
      icon: <MarkUnreadChatAltOutlined sx={{ color: "white", fontSize: "26px" }} />,
      route: "/Users/manuelllamas-mancinas/Desktop/Findr/components/Modals/NotificationsModal.tsx",
      label: "Notifications",
    },
    
  ];
  
  export const pageTitles = [
    {
      url: "/",
      title: "Feed",
    },
    {
      url: "/edit-profile",
      title: "Edit Profile",
    },
    {
      url: "/create-post",
      title: "Create Post",
    },
    {
      url: "/edit-post",
      title: "Edit Post",
    },
    {
      url: "/search", 
      title: "Search",
    },
    {
      url: "/search", 
      title: "Search",
    },
    {
      url: "/saved-posts",
      title: "Saved Posts",
    },
    {
      url: "/liked-posts",
      title: "Liked Posts",
    }
  ];
  
  export const tabs = [
    {
      link: "posts",
      name: "Posts",
    },
    {
      link: "followers",
      name: "Followers",
    },
    {
      link: "following",
      name: "Following",
    },
  ];
  