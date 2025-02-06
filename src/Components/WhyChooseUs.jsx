import React from "react";
import { 
  Award, 
  Clock, 
  Users, 
  Target, 
  Shield, 
  Zap 
} from "lucide-react";

const WhyChooseUs = ({ data }) => {
 
  const getIcon = (index) => {
    const icons = [Award, Clock, Users, Target, Shield, Zap];
    const Icon = icons[index % icons.length];
    return <Icon className="w-12 h-12 text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300" />;
  };

  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, indigo 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
            Our Strengths
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600">
            We stand out in the IT consulting industry by delivering innovative solutions, 
            exceptional support, and proven results that drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-2 flex justify-center">
                    {getIcon(index)}
                  </div>
                  
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {item.Title}
                    </h3>
                    <div className="h-1 w-12 bg-indigo-600 mx-auto mb-4 transform origin-left group-hover:scale-x-150 transition-transform duration-300"></div>
                  </div>
                  
                  <p className="text-gray-600">
                    {item.Description}
                  </p>

                  <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="inline-flex items-center text-indigo-600 font-medium">
                      Learn More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 py-20">
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-12 w-12 bg-gray-200 rounded-full mb-4"></div>
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

export default WhyChooseUs;