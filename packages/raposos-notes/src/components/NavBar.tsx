import React from 'react';
import { SearchBar } from './SearchBar';

export const NavBar = () => {
  return (
    <div className="flex flex-row">
      <h1>Logo</h1>
      <SearchBar />
    </div>
  );
};
