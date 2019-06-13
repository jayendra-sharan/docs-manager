import React from 'react';
import { Subscribe } from 'unstated';
import AppState from '../../app-state';

export default function Content() {

  return (
    <Subscribe to={[AppState]}>
      {
        (appState) => {
          const { fileName, filePath } = appState.state.selectedDoc;
          return (
            <div className="main-content-wrapper position-all-0">
              <div className="main-header position-all-0">
                <div className="main-header-title">
                  { fileName }
                </div>
              </div>
              <div className="document-wrapper">
                <div className="document-preview">
                  <embed
                    key={filePath}
                    width="100%"
                    height="100%"
                    src={filePath} />
                </div>
              </div>
            </div>
          )
        }
      }
    </Subscribe>
  )
}
