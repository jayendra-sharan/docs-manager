import React, {useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { Subscribe } from 'unstated';
import AppState from '../../app-state';

export default function SidebarHeader() {
  const inpRef = useRef();
  return (
    <Subscribe to={[AppState]}>
      {
        (appState) => (
          <div className="sidebar-header">
            <div className="sidebar-header-text">Files</div>
            <div
              onClick={() => inpRef.current.click()}
              className="upload-button"
            >
              <div className="upload-btn-text">Upload</div>
              <div className="upload-icon">
                <FontAwesomeIcon icon={faUpload} />
                <input
                  ref={inpRef}
                  className="hide"
                  type="file"
                  onChange={(event) => appState.fakeUploadDocument(event)} />
              </div>
            </div>
          </div>
        )
      }
    </Subscribe>
  )
}
