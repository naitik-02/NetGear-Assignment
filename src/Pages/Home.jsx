import React, { useState, useEffect } from "react";
import Hero from "../Components/Hero";
import ContactUs from "../Components/ContactUs";
import HowItWork from "../Components/HowItWork";
import Nav from "../Components/Nav";
import Services from "../Components/Services";
import WhyChooseUs from "../Components/WhyChooseUs";
import AboutUs from "../Components/AboutUs";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSheetData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://api.sheetbest.com/sheets/e3666537-ceba-403b-a59d-ca6826c15246"
      );
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
 

  useEffect(() => {
    fetchSheetData();
  }, []);

  const filterData = (section) => {
    return data.filter((item) => item.Section === section);
  };

  return (
    <div className="min-h-screen bg-white">
    
      

      <main className="relative">
       
        <section className="relative z-10">
          <Hero />
        </section>

       
        <section className="relative z-20">
          <AboutUs data={filterData("About Us")} />
        </section>

      
        <section className="relative z-20">
          <Services data={filterData("Services")} />
        </section>

        
        <section className="relative z-20">
          <WhyChooseUs data={filterData("Why Choose Us?")} />
        </section>

        
        <section className="relative z-20">
          <HowItWork data={filterData("How It Works")} />
        </section>

       
        <section className="relative z-20">
          <ContactUs data={filterData("Contact Us")} />
        </section>
      </main>

     
      {loading && (
        <div className="fixed inset-0 bg-white bg-opacity-80 z-50 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-indigo-600 font-medium">Loading content...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;