import React from 'react';

import AppState from './../../app-state';
import SideTab from './side-tab';
import { Subscribe } from 'unstated';

export default function FileList() {
  return (
    <Subscribe to={[AppState]}>
      {
        (appState) => (
          <div className='file-list-wrapper'>
          {
            appState.state.docList.map((item, index) => (
              <SideTab
                isActive={item.id === appState.state.selectedDoc.id}
                file={item}
                key={item.fileName} />
            ))
          }
        </div>
        )
      }
    </Subscribe>
  )
}
