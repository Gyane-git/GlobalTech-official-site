"use client";
import { useState } from "react";
import Image from "next/image";

export default function HeaderBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-2">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
          >
          <div className="flex items-center mr-2">
           <Image

                src="/globaltech-logo.png"
                alt="Global Tech"
                width={120}
                height={120}
                quality={100}
                priority
                className="transition-all duration-300 hover:scale-105"
              />
          </div>

          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-700 rounded-lg hover:text-white hover:bg-[#01403e] p-4 font-medium">
              DOCS
            </a>
            <a href="#" className="text-gray-700 rounded-lg hover:text-white hover:bg-[#01403e] p-4 font-medium">
              FEATURES
            </a>
            <a href="#" className="text-gray-700 rounded-lg hover:text-white hover:bg-[#01403e] p-4 font-medium">
              PRICING
            </a>
            <a href="#" className="text-gray-700 rounded-lg hover:text-white hover:bg-[#01403e] p-4 font-medium">
              SUPPORT
            </a>
            <a href="#" className="text-gray-700 rounded-lg hover:text-white hover:bg-[#01403e] p-4 font-medium">
              BLOGS
            </a>
            <a href="#" className="text-gray-700 rounded-lg hover:text-white hover:bg-[#01403e] p-4 font-medium">
              HELP
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-6 py-2 bg-[#01403e] text-white font-medium rounded-lg hover:scale-105 transition-all">
              Start Free Trial
            </button>
           <a
            href="http://omslite.globaltech.com.np/Account/Login"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border-2 border-[#01403e] text-green-600 font-medium rounded-lg hover:bg-[#01403e] hover:text-white transition-all"
          >
            Login
          </a>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 rounded-md bg-green-600 hover:bg-[#016f6a] transition"
              >
              {/* Hamburger Icon */}
              {/* <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg> */}
              <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#01403e] bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Sidebar Header with Close Button */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md hover:bg-green-200"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col p-4 space-y-3 text-gray-700">
          <a href="#" className="hover:bg-gray-100 p-2 rounded">DOCS</a>
          <a href="#" className="hover:bg-gray-100 p-2 rounded">FEATURES</a>
          <a href="#" className="hover:bg-gray-100 p-2 rounded">PRICING</a>
          <a href="#" className="hover:bg-gray-100 p-2 rounded">SUPPORT</a>
          <a href="#" className="hover:bg-gray-100 p-2 rounded">BLOGS</a>
          <a href="#" className="hover:bg-gray-100 p-2 rounded">HELP</a>

          <button className="mt-4 w-full bg-[#01403e] text-white py-2 rounded-lg">
            Start Free Trial
          </button>
          <button className="w-full border-2 border-[#01403e] text-green-700 py-2 rounded-lg hover:bg-[#01403e] hover:text-white transition">
            Login
          </button>
        </nav>
      </div>
    </header>
  );
}
