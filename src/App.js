import React from 'react';
import {Space } from 'antd';
import Navbar from './components/Navbar';
import Page from './components/Page'
import './App.css';
import 'antd/dist/antd.css';



function App() {
  return (
<Space wrap>
    <div className="App">
      <Navbar />
      <Page />
    </div>
    </Space>
  );
}

export default App;
