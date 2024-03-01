"use client";

import { useEffect, useState } from "react";
import { Add, Logout, Person, Search } from "@mui/icons-material";


const TopBar = () => {
const [search, setSearch] = useState("");

  return(

    <div>
      <div className="relative py-4">
        <input
          type="text"
          className="search-bar"
          placeholder="Search people, ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search
          className="search-icon"
          onClick={() => {}}/>
      </div>
    </div>
  );
};

export default TopBar;
