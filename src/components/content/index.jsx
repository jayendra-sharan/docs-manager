import React from 'react';

const filePath = "/docs/pan_card.pdf" 
const textFilePath = "/docs/test.txt";

export default function Content() {
  return (
    <div>
      <embed src={textFilePath} height="300" width="300" />
    </div>
  )
}

