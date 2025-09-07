"use client";

import { Download, Wrench, ShieldCheck, Clock } from "lucide-react";

// Icon wrapper
const IconWrapper = ({ children }) => (
  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4 text-blue-400">
    {children}
  </div>
);

// Feature icon component
const FeatureIcon = ({ icon }) => {
  const icons = {
    Wrench: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    ShieldCheck: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    Clock: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    Download: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" x2="12" y1="15" y2="3" />
      </svg>
    ),
  };
  return icons[icon] || null;
};

export default function HomePage() {
  const handleDownload = () => {
    const confirmed = window.confirm("Do you want to install the Moboflix app?");
    if (confirmed) {
      window.location.href = "/moboflix.apk"; // Triggers APK download
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-gray-900 to-gray-900"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-900/30 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/30 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-4000"></div>
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8">
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Moboflix
          </h1>
          <a
            href="#features"
            className="hidden sm:inline-block px-4 py-2 text-sm font-medium text-gray-300 transition-colors rounded-md hover:text-white hover:bg-white/10"
          >
            Why Us?
          </a>
        </header>

        {/* Hero Section */}
        <section className="text-center flex flex-col items-center justify-center flex-grow pt-20">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Your Phone, Fixed Fast.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mt-2">
                Expert Repair, Simplified.
              </span>
            </h2>
            <p className="max-w-xl mx-auto mt-6 text-lg text-gray-300 sm:text-xl md:text-2xl">
              Cracked screens, battery swaps, and more. Get transparent pricing
              and book a certified technician in minutes with the Moboflix app.
            </p>
          </div>

          <div className="mt-10">
            <button
              onClick={handleDownload}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full shadow-lg hover:from-cyan-700 hover:to-blue-700 hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            >
              <FeatureIcon icon="Download" />
              <span className="ml-3">Download the App</span>
            </button>
            <p className="mt-4 text-sm text-gray-500">
              For Android devices only.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full max-w-5xl py-16 sm:py-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The Moboflix Advantage
            </h3>
            <p className="mt-4 text-lg text-gray-400">
              Fast, reliable, and transparent repairs for your devices.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center p-8 text-center bg-gray-800/50 rounded-2xl">
              <IconWrapper>
                <FeatureIcon icon="Wrench" />
              </IconWrapper>
              <h4 className="text-xl font-semibold">Certified Technicians</h4>
              <p className="mt-2 text-gray-400">
                Our experts are fully trained and vetted to handle any repair
                with precision and care.
              </p>
            </div>
            <div className="flex flex-col items-center p-8 text-center bg-gray-800/50 rounded-2xl">
              <IconWrapper>
                <FeatureIcon icon="Clock" />
              </IconWrapper>
              <h4 className="text-xl font-semibold">Fast & Convenient</h4>
              <p className="mt-2 text-gray-400">
                Book a repair in minutes. Many common issues are fixed the very
                same day.
              </p>
            </div>
            <div className="flex flex-col items-center p-8 text-center bg-gray-800/50 rounded-2xl">
              <IconWrapper>
                <FeatureIcon icon="ShieldCheck" />
              </IconWrapper>
              <h4 className="text-xl font-semibold">Quality & Warranty</h4>
              <p className="mt-2 text-gray-400">
                We use only high-quality parts and back every single repair with
                a solid warranty.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full max-w-5xl pt-8 pb-4 text-center text-gray-500 border-t border-gray-700/50">
          <p>
            &copy; {new Date().getFullYear()} Moboflix Repairs Inc. All rights
            reserved. App by Rachit.
          </p>
        </footer>
      </main>
    </div>
  );
}
