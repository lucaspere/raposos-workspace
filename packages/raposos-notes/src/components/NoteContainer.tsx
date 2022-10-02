import React from 'react';
import { NoteMenu } from './NoteMenu';
import { NoteContent } from './NoteContent';

export const NoteContainer = () => {
  return (
    <div>
      <NoteMenu />
      <NoteContent />
    </div>
  );
};
