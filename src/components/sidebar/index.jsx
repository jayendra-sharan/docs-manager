import React, {useState} from 'react'
import FileList from './file-list.jsx';
import SidebarHeader from './sidebar-header';

export default function Sidebar() {

  const [showSidebar, setShowSidebar] = useState(false);

  const sidebarClass = `sidebar-wrapper ${showSidebar ? " show-sidebar" : ""}`;
  const toggleButtonClass = `sidebar-toggle-button ${showSidebar ? " move-sidebar-toggle-button" : ""}`;

  return (
    <React.Fragment>
      <div className={sidebarClass}>
        <SidebarHeader />
        <div className="sidebar-top-border"></div>
        <FileList /> 
      </div>
      <div
        onClick={() => setShowSidebar(!showSidebar)}
        className={toggleButtonClass}
      >
        <div className={`button-arrow ${showSidebar ? "hide-arrow" : "show-arrow"}`}></div>
      </div>
    </React.Fragment>
  )
}

