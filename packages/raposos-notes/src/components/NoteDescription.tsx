import * as React from 'react';

export type NoteDescriptionProps = {
  description: string;
};

export const NoteDescription = ({ description }: NoteDescriptionProps) => {
  return <textarea>{description}</textarea>;
};
