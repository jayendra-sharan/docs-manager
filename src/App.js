import React from 'react';

import './styles/index.scss';
import Sidebar from './components/sidebar';
import Content from './components/content';

function App() {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <Content
        selectedFile={{
          fileName: "Document #1"
        }}
        />
    </div>
  );
}

export default App;
