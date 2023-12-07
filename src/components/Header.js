import React, { useState } from "react";

const Header = ({ searchInput, setSearchInput }) => {
  const handlechange = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div className="search">
      <input
        type="search"
        placeholder="Search Player..."
        value={searchInput}
        onChange={handlechange}
      />
    </div>
  );
};
export default Header;
