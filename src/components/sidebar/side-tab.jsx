import React from 'react';

export default function SideTab({isActive, fileName, author, sharedWith}) {
  return (
    <div className="side-tab-wrapper">
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
