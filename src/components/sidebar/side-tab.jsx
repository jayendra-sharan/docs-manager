import React from 'react';
import AppState from '../../app-state';
import { Subscribe } from 'unstated';

export default function SideTab({isActive, file}) {
  const { fileName, author, sharedWith, id } = file;
  return (
    <Subscribe to={[AppState]}>
      {
        (appState) => (
          <div
            onClick={() => appState.selectDoc(id)}
            className="side-tab-wrapper">
            <div className="file-title">
              { fileName }
            </div>
            <div className="file-persons">
              {`${author}, ${sharedWith}`}
            </div>
            {
              isActive && (
                <React.Fragment>
                  <div className="active-base"></div>
                  <div className="active-border"></div>
                </React.Fragment>
              )
            }
          </div>
        )
      }
    </Subscribe>
  )
}
