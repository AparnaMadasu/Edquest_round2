import React, { useState } from 'react';

export const RightSidebar = ({ component }) => {
  const [design, setDesign] = useState({});
  const [data, setData] = useState({});

  return (
    <div className="right-sidebar">
      <h2>Design</h2>
      <div>
        <label>Background Color</label>
        <input
          type="color"
          onChange={(e) => setDesign({ ...design, backgroundColor: e.target.value })}
        />
      </div>
      
      <h2>Data</h2>
      <div>
        <label>Content</label>
        <input
          type="text"
          onChange={(e) => setData({ ...data, content: e.target.value })}
        />
      </div>
    </div>
  );
};
