import React from 'react';

export default function Content({filePath}) {
  return (
    <div>
      <embed src={filePath} height="300" width="300" />
    </div>
  )
}
