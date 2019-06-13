import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'

export default function SidebarHeader() {
  return (
    <div className="sidebar-header">
      <div className="sidebar-header-text">Files</div>
      <div className="upload-button">
        <div className="upload-btn-text">Upload</div>
        <div className="upload-icon">
          <FontAwesomeIcon icon={faUpload} />
        </div>
      </div>
    </div>
  )
}
