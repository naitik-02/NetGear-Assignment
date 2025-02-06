import React, { useState } from "react";
import { Send, Mail, User, MessageSquare } from "lucide-react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data on Submit:", formData); 
    await postFormData(); 
  };

  const postFormData = async () => {
    try {
      setIsSubmitting(true); 
      console.log("Sending the following data to API:", formData);  

      const response = await fetch(
        "https://api.sheetbest.com/sheets/23f43a77-f7c5-4f3f-8ac5-371a41e0f2a9",
        {
          method: "POST",
          headers:{
            "Content-type": "application/json"
          },
          body: JSON.stringify(formData),
        }
      );
     setFormData({
        Name: "",
        Email: "",
        Message: "",
     })
    } catch (error) {
      console.error("Error submitting form data:", error);
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-0 w-64 h-64 bg-indigo-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600">
            Have questions? Reach out to us, and we'll get back to you shortly.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-10 rounded-xl shadow-xl max-w-3xl mx-auto relative overflow-hidden"
        >
          <div className="mb-6">
            <label className="flex items-center text-gray-700 font-medium mb-2 text-left">
              <User className="w-5 h-5 mr-2 text-indigo-600" />
              Name
            </label>
            <input
              type="text"
              name="Name" 
              value={formData.Name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow duration-200"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-6">
            <label className="flex items-center text-gray-700 font-medium mb-2 text-left">
              <Mail className="w-5 h-5 mr-2 text-indigo-600" />
              Email
            </label>
            <input
              type="email"
              name="Email" 
              value={formData.Email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow duration-200"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-8">
            <label className="flex items-center text-gray-700 font-medium mb-2 text-left">
              <MessageSquare className="w-5 h-5 mr-2 text-indigo-600" />
              Message
            </label>
            <textarea
              name="Message" 
              value={formData.Message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow duration-200 resize-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 text-white font-semibold py-4 rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center space-x-2 disabled:opacity-70"
          >
            {isSubmitting ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
