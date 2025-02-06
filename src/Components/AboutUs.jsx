import React from "react";

const AboutUs = ({ data }) => {
  return (
    <section className="bg-gradient-to-b from-white to-indigo-50 py-24 px-6 md:px-12 relative overflow-hidden">
     
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2" 
             style={{ 
               backgroundImage: "radial-gradient(circle at 2px 2px, indigo 1px, transparent 0)",
               backgroundSize: "30px 30px"
             }}>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-8">
            About Us
          </h2>
          
          {data && data.length > 0 ? (
            <div className="space-y-8">
              <p className="text-xl leading-relaxed text-gray-600">
                {data[0].Content}
              </p>
              <div className="flex items-center justify-center space-x-4">
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">
                  Learn More
                </button>
                <button className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          ) : (
            <div className="animate-pulse space-y-4">
              <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;