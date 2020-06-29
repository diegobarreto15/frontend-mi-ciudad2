import React from 'react';
import Report from '../src/components/Report'
import SideBar from '../src/components/SideBar'
import UploadReport from '../src/components/UploadReport'
import BtnBuscar from '../src/components/BtnBuscar'
import PublicReport from '../src/components/PublicReport'

import './App.css';

function App() {
  return (
    <div>
    <BtnBuscar></BtnBuscar>
    <Report></Report>
    <SideBar></SideBar>
    <UploadReport></UploadReport>
    <PublicReport></PublicReport>
    
    </div>
  );
}

export default App;
