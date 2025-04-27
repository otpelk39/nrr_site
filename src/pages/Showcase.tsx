import React from 'react';

export function Showcase() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Showcase</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder content for the showcase page */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Project 1</h2>
          <p className="text-gray-600">Project description goes here</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Project 2</h2>
          <p className="text-gray-600">Project description goes here</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Project 3</h2>
          <p className="text-gray-600">Project description goes here</p>
        </div>
      </div>
    </div>
  );
}