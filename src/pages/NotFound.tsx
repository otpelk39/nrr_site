import React from 'react';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-white">
      <div className="absolute inset-0 bg-primary-900 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">404 - Page Not Found</h1>
          <p className="text-xl text-primary-200 mb-10">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-md transition-colors text-lg font-medium"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </section>
  );
}