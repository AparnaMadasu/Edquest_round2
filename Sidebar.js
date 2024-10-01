import React from 'react';

const components = [
  { id: 1, name: 'Hero Section' },
  { id: 2, name: 'Product Card' },
  { id: 3, name: 'Blog Post Listing' },
];

export const Sidebar = ({ onComponentSelect }) => {
  return (
    <div className="sidebar">
      <h2>Components</h2>
      <ul>
        {components.map((component) => (
          <li key={component.id} onClick={() => onComponentSelect(component)}>
            {component.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
