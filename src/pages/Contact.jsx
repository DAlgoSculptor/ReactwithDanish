import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react"; // Icons

const Contact = () => {
  // Simple state to handle form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send email goes here
    console.log("Form Submitted:", formData);
    alert("Message Sent!");
  };

  return (
    <div className="w-full h-screen bg-emerald flex items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Side: Contact Information */}
        <div className="bg-teal-800 p-10 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-4">Get in touch</h2>
            <p className="text-indigo-100 mb-8 text-lg">
              Have a question or want to work together? Fill out the form or contact us directly.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-indigo-300" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-indigo-300" />
                <span>contact@example.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-indigo-300" />
                <span>123 Innovation Drive, Tech City</span>
              </div>
            </div>
          </div>

          {/* decorative circle */}
          <div className="hidden md:block mt-12 relative">
             <div className="w-40 h-40 bg-indigo-500 rounded-full absolute -right-10 -bottom-10 opacity-50"></div>
             <div className="w-20 h-20 bg-indigo-400 rounded-full absolute -right-5 -bottom-20 opacity-50"></div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="p-10 bg-emerald-400">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="w-full text-black px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full text-black px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                className="w-full text-black px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;