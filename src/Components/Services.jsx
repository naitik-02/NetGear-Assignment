import React from "react";
import { 
  Code, 
  Smartphone, 
  Globe, 
  Shield, 
  Database, 
  Cloud,
  ArrowRight
} from "lucide-react";

const Services = ({ data }) => {
  // Default icons mapping - can be customized based on your services
  const getIcon = (index) => {
    const icons = [Code, Smartphone, Globe, Shield, Database, Cloud];
    const Icon = icons[index % icons.length];
    return <Icon className="w-8 h-8 mb-4 text-indigo-600" />;
  };

  return (
    <section className="bg-gradient-to-b from-white to-indigo-50 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of IT consulting services designed to help businesses grow, 
            innovate, and succeed in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data && data.length > 0 ? (
            data.map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex flex-col items-center">
                  <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-300">
                    {getIcon(index)}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">
                    {service.Title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-center">
                    {service.Description}
                  </p>
                  
                  <button className="mt-auto flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 py-20">
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-8 w-8 bg-gray-200 rounded-full mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-48 mb-4"></div>
                <div className="h-3 bg-gray-200 rounded w-64"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;