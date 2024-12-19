import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search/${e.target.value}`);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        onKeyDown={handleSearch}
      />
    </div>
  );
};

export default SearchInput;
