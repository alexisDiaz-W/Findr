import {
    Home,
    AddPhotoAlternateOutlined,
    GroupOutlined,
    BookmarksOutlined,
    FavoriteBorder,
    ManageAccountsRounded,
    ManageAccountsOutlined,
    PersonSearch,
  } from "@mui/icons-material";
  
  export const sidebarLinks = [
    {
      icon: <Home sx={{ color: "white", fontSize: "26px" }} />,
      route: "/Profiles",
      label: "Home",
      description: "Go to Home Page",
    },
    {
      icon: <PersonSearch sx={{ color: "white", fontSize: "26px" }} />,
      route: "/",
      label: "Search",
      description: "Search Intern",
    },
   
    // {
    //   icon: <GroupOutlined sx={{ color: "white", fontSize: "26px" }} />,
    //   route: "/people",
    //   label: "People",
    // },
    // {
    //   icon: <BookmarksOutlined sx={{ color: "white", fontSize: "26px" }} />,
    //   route: "/saved-posts",
    //   label: "Saved Posts",
    // },
    {
      icon: <ManageAccountsOutlined sx={{ color: "white", fontSize: "26px" }} />,
      route: "./components/Modals/EditProfileModal.tsx",
      label: "Manage",
      description: "Manage/Confirm Changes",
    
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
  