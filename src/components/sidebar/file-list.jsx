import React from 'react';
import docs_data from '../../mock/data';
import SideTab from './side-tab';

export default function FileList() {
  return (
    <div className='file-list-wrapper'>
      {
        docs_data.map((item, index) => (
          <SideTab
            isActive={index === 0}
            fileName={item.fileName}
            author={item.author}
            sharedWith={item.sharedWith}
            key={item.fileName} />
        ))
      }
    </div>
  )
}
