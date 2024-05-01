"use client";

import { useEffect, useState } from "react";
import { Add, Logout, Person, Search } from "@mui/icons-material";

interface SocialSearchBarProps {
  onSearchChange: (searchTerm: string) => void;
}

const SocialSearchBar: React.FC<SocialSearchBarProps> = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearch(newValue);
    onSearchChange(newValue); // Call the passed onSearchChange function with the new search term
  };

  return (
    <div className="relative py-4">
      <input
        type="text"
        className="search-bar"
        placeholder="Search interns, ..."
        value={search}
        onChange={handleChange} // Use the handleChange function here
      />
      <Search className="search-icon" onClick={() => { }} />
    </div>
  );
};

export default SocialSearchBar;

// const SocialSearchBar = () => {
//   const [search, setSearch] = useState("");

//   // SocialSearchBar.tsx

//   interface SocialSearchBarProps {
//     onSearchChange: (searchTerm: string) => void;
//   }
  

//   return (

//     <div>
//       <div className="relative py-4">
//         <input
//           type="text"
//           className="search-bar"
//           placeholder="Search interns, ..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <Search
//           className="search-icon"
//           onClick={() => { }} />
//       </div>
//     </div>
//   );
// };

// export default SocialSearchBar;
