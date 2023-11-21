import React, { useState } from 'react';
import HeaderBar from './components/HeaderBar';
import SideBar from './components/SideBar';

function App() {
  

  

  return (
    <div className="flex">
    <SideBar />
    <div className="flex flex-col w-full h-16 text-2xl justify-end">
      <HeaderBar />
    </div>
  </div>
  






  );
}

export default App;
