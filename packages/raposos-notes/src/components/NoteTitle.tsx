import * as React from 'react';

export type NoteTitleProps = {
  text: string;
};

export const NoteTitle = ({ text }: NoteTitleProps) => {
  return <p>{text}</p>;
};
