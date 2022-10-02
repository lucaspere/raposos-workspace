import React from 'react';
import { NavBar } from './components/NavBar';
import { NoteContainer } from './components/NoteContainer';

export const App = () => {
  return (
    <div>
      <NavBar />
      <NoteContainer />
    </div>
  );
};
