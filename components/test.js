"use client";
import { useState, useEffect } from 'react';

export default function FreeTrials() {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleStartTrial = () => {
    if (email) {
      console.log('Email submitted:', email);
      // Add your form submission logic here
    }
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: 'url("/gg.jpg")',
          backgroundColor: '#0a4d4d',
          transform: isVisible ? 'scale(1)' : 'scale(1.1)'
        }}
      ></div>
      
      {/* Dark Overlay with animation */}
      <div className={`absolute inset-0 bg-gradient-to-br from-teal-900/40 to-teal-800/30 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-2 h-2 bg-lime-400/30 rounded-full animate-float-slow" style={{top: '20%', left: '10%'}}></div>
        <div className="absolute w-3 h-3 bg-teal-300/20 rounded-full animate-float-medium" style={{top: '60%', left: '80%'}}></div>
        <div className="absolute w-2 h-2 bg-lime-300/40 rounded-full animate-float-fast" style={{top: '40%', left: '90%'}}></div>
        <div className="absolute w-4 h-4 bg-teal-400/10 rounded-full animate-float-slow" style={{top: '80%', left: '20%'}}></div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(20px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-40px) translateX(-15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-50px) translateX(25px); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-right {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-slide-right { animation: slide-right 0.8s ease-out forwards; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.6s ease-out forwards; }
        .animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Heading */}
            <div className={`${isVisible ? 'animate-slide-up opacity-0' : 'opacity-0'}`}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-7xl font-bold text-white leading-tight">
                Transform Your <span className="text-lime-400 inline-block hover:scale-110 transition-transform duration-300">Accounting</span>
                <br />
                Into the Cloud Era
              </h1>
            </div>

            {/* Subheading */}
            <p className={`text-lg sm:text-xl lg:text-2xl text-gray-50 leading-relaxed max-w-2xl ${isVisible ? 'animate-slide-up opacity-0 delay-200' : 'opacity-0'}`}>
              Join thousands of businesses managing their finances smarter, faster, and more securely with our cloud-based accounting platform.
            </p>

            {/* CTA Container */}
            <div className={`bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 ${isVisible ? 'animate-scale-in opacity-0 delay-300' : 'opacity-0'} hover:shadow-3xl transition-shadow duration-300`}>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Start Your Free 30-Day Trial
              </h3>
              
              <div className="space-y-4">
                {/* Email Input */}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="w-full px-6 py-4 text-gray-700 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 focus:scale-[1.02]"
                />

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleStartTrial}
                    className="group flex-1 px-6 py-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 active:scale-95"
                  >
                    <span className="inline-block group-hover:scale-105 transition-transform duration-300">
                      Start Free Trial
                    </span>
                  </button>

                  <button
                    onClick={() => console.log('Demo clicked')}
                    className="group flex-1 px-6 py-4 border-2 border-teal-600 text-teal-600 font-semibold rounded-xl hover:bg-teal-50 transition-all duration-300 hover:border-teal-700 transform hover:-translate-y-1 active:scale-95"
                  >
                    <span className="inline-block group-hover:scale-105 transition-transform duration-300">
                      View Demo
                    </span>
                  </button>
                </div>

                {/* Disclaimer */}
                <div className="flex items-center justify-center gap-2 text-sm text-teal-700">
                  <svg className="w-4 h-4 animate-bounce-gentle" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No credit card required • Cancel anytime</span>
                </div>
              </div>
            </div>

            {/* App Download Section */}
            <div className={`pt-6 ${isVisible ? 'animate-slide-up opacity-0 delay-500' : 'opacity-0'}`}>
              <p className="text-white text-sm font-medium mb-4">Available on mobile</p>
              <div className="flex flex-wrap gap-4">
                {/* App Store Button */}
                <a 
                  href="#" 
                  className="group inline-flex items-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 active:scale-95"
                >
                  <svg className="w-8 h-8 mr-3 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold leading-tight">App Store</div>
                  </div>
                </a>

                {/* Google Play Button */}
                <a 
                  href="#" 
                  className="group inline-flex items-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 active:scale-95"
                >
                  <svg className="w-8 h-8 mr-3 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-lg font-semibold leading-tight">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`hidden lg:flex justify-center items-center ${isVisible ? 'animate-slide-right opacity-0 delay-400' : 'opacity-0'}`}>
            <div className="relative group">
              <img 
                src="/man-removebg-preview.png" 
                alt="Business professional managing accounting on mobile"
                className="w-full max-w-lg h-auto drop-shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}







"use client";
import { useState } from 'react';

export default function FreeTrials() {
  const [email, setEmail] = useState('');

  const handleStartTrial = () => {
    if (email) {
      console.log('Email submitted:', email);
      // Add your form submission logic here
    }
  };

  return (
    <section className="bg-linear-to-b from-white to-green-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Is Your <span className="text-green-600">Accounting</span> Still
          <br />
          Stuck in the Past?
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Experience the Most Efficient Way to Manage Your Accounting in the Cloud.
        </p>

        {/* CTA Container */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            {/* Email Input */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 w-full sm:w-auto px-6 py-4 text-gray-700 placeholder-gray-400 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            />

            {/* Start Free Trial Button */}
            <button
              onClick={handleStartTrial}
              className="w-full sm:w-auto px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors shadow-md hover:shadow-lg"
            >
              Start Free Trial
            </button>

            {/* Explore Demo Button */}
            <button
              onClick={() => console.log('Demo clicked')}
              className="w-full sm:w-auto px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-colors"
            >
              Explore Demo Account
            </button>
          </div>

          {/* Disclaimer Text */}
          <p className="text-sm text-green-600 italic mt-4">
            No Payment or Commitment Required
          </p>
        </div>
      </div>
    </section>
  );
}