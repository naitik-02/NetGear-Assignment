import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-indigo-600 py-8 text-white">
      <div className="max-w-6xl mx-auto text-center px-6">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">IT Consulting Firm</h3>
          <p className="text-lg mt-2">Providing innovative IT solutions to help businesses grow.</p>
        </div>

        <div className="flex justify-center space-x-8 mb-6">
          <a href="https://facebook.com" className="text-white hover:text-gray-200 transition duration-300">
            Facebook
          </a>
          <a href="https://twitter.com" className="text-white hover:text-gray-200 transition duration-300">
            Twitter
          </a>
          <a href="https://linkedin.com" className="text-white hover:text-gray-200 transition duration-300">
            LinkedIn
          </a>
          <a href="https://instagram.com" className="text-white hover:text-gray-200 transition duration-300">
            Instagram
          </a>
        </div>

        <div className="text-gray-200">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} IT Consulting Firm. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
