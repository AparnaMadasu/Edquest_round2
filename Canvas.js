import React, { useState } from 'react';

export const Canvas = () => {
  const [layout, setLayout] = useState([]);

  const addComponentToLayout = (component) => {
    setLayout([...layout, component]);
  };

  return (
    <div className="canvas">
      <h2>Canvas</h2>
      <div className="layout">
        {layout.map((component, index) => (
          <div key={index} className="layout-item">
            {component.name}
          </div>
        ))}
      </div>
    </div>
  );
};
