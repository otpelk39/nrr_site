import React from 'react';

export function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Web Development</h2>
          <p className="text-gray-600">Custom web applications built with modern technologies and best practices.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">UI/UX Design</h2>
          <p className="text-gray-600">Beautiful, intuitive interfaces designed with your users in mind.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Consulting</h2>
          <p className="text-gray-600">Expert guidance to help your digital projects succeed.</p>
        </div>
      </div>
    </div>
  );
}