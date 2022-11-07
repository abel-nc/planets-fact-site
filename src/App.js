import React, { useState } from 'react';
import './main.scss';
import data from './data.json';
import Nav from './components/Nav';
import Planet from './components/Planet';
import { Navigate, Route, Routes } from 'react-router-dom';

const App = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <main>
      <Nav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Routes>
        <Route path='/' element={<Navigate to="/earth"/>}  />
        <Route path='/:name' element={<Planet />} />
      </Routes>
    </main>
  );
}

export default App;
