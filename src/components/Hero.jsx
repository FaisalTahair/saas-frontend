import React from "react";

function Hero() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our SaaS Platform</h1>
        <p className="text-lg mb-6">Powerful AI-driven solutions for your business.</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
          Get Started

        </button>
        <p className="text-red-500">If this text is red, Tailwind is working!</p>

      </div>
    </div>
  );
}

export default Hero;
