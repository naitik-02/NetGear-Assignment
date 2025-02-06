import React from "react";
import { 
  Search, 
  FileCheck, 
  Code, 
  Rocket 
} from "lucide-react";

const HowItWork = ({ data }) => {
  const getIcon = (index) => {
    const icons = [Search, FileCheck, Code, Rocket];
    const Icon = icons[index % icons.length];
    return <Icon className="w-10 h-10 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />;
  };

  return (
    <section className="bg-gradient-to-b from-white to-indigo-50/50 py-24 px-6 md:px-12 relative">
      {/* Connector Lines for Desktop */}
      <div className="hidden lg:block absolute top-1/2 left-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2 z-0">
        <div className="h-0.5 bg-indigo-200 w-full"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Our simple and efficient process ensures seamless collaboration 
            and successful project execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {data && data.length > 0 ? (
            data.map((step, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-indigo-600">
                    {index + 1}
                  </span>
                </div>

                <div className="mt-4 flex flex-col items-center">
                  <div className="mb-6">
                    {getIcon(index)}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.Title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {step.Description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-4 py-20">
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-10 w-10 bg-gray-200 rounded-full mb-4"></div>
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

export default HowItWork;