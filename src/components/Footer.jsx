// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="p-4 bg-gray-200 text-center">
      <div className="flex justify-center space-x-4">
        <a href="https://github.com/kevindimayuga" target="_blank" rel="noopener noreferrer" className="text-gray-700">
          GitHub
        </a>
        <a href="https://linkedin.com/in/kevindimayuga" target="_blank" rel="noopener noreferrer" className="text-gray-700">
          LinkedIn
        </a>
        {/* Add more links for other platforms */}
      </div>
    </footer>
  );
}

export default Footer;
