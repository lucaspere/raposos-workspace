import * as React from 'react';
import { NoteDescription, NoteDescriptionProps } from './NoteDescription';
import { NoteTitle, NoteTitleProps } from './NoteTitle';

export type NoteProps = NoteTitleProps & NoteDescriptionProps;

export const NoteCard = (note: NoteProps) => {
  return (
    <div>
      <NoteTitle text={note.text} />
      <NoteDescription description={note.description} />
    </div>
  );
};
