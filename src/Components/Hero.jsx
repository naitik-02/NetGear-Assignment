import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div
      className="relative h-[calc(100vh-65px)] bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url('/Heroimg.jpg')
        `,
      }}
    >
     
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>

     
      <div className="relative flex items-center justify-center h-full text-center px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in-up">
            Empowering Businesses with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Cutting-Edge IT Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-200 animate-fade-in-up delay-200">
            We help you innovate, transform, and scale with our expert IT consulting services.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <button className="group bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="px-8 py-4 rounded-lg font-semibold border-2 border-white text-white hover:bg-white/10 transition-all border-dashed duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>


      
    </div>
  );
};

export default Hero;