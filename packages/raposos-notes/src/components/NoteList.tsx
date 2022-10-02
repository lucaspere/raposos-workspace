import * as React from 'react';
import { NoteCard, NoteProps } from './NoteCard';

type NoteListProps = {
  notes: NoteProps[];
};

export const NoteList = ({ notes }: NoteListProps) => {
  return <div>{notes.map((note) => NoteCard(note))}</div>;
};
