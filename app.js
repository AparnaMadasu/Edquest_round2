import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Canvas } from './components/Canvas';
import { RightSidebar } from './components/RightSidebar';
import './App.css';

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <div className="app">
      <Sidebar onComponentSelect={setSelectedComponent} />
      <Canvas />
      <RightSidebar component={selectedComponent} />
    </div>
  );
};

export default App;
