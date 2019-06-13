import React from 'react';
import docs_data from '../../mock/data';

export default function FileList() {
  return (
    <div className='file-list-wrapper'>
      {
        docs_data.map(item => (
          <div key={item.fileName}>{item.fileName}</div>
        ))
      }
    </div>
  )
}
