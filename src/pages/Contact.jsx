import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaEye, FaLink } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  
    // Handle input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    // Handle form submit
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // For now, just log the data
      console.log("Form Submitted:", formData);
  
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    };
  return (
   <>
   {/* Contact section */}
      <section className="bg-gray-400 py-16 text-black">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-left mb-12">
            <h2 className="text-3xl font-bold">Contact</h2>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="bg-white p-6 rounded-lg shadow">
              {/* Address */}
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 text-blue-500 rounded-full p-4 mr-4">
                  📍
                </div>
                <div>
                  <h4 className="font-bold">Address</h4>
                  <p className="text-gray-600">BBSR,ODISHA,751010</p>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 text-blue-500 rounded-full p-4 mr-4">
                  📞
                </div>
                <div>
                  <h4 className="font-bold">Call Us</h4>
                  <p className="text-gray-600">+91 9348503025</p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 text-blue-500 rounded-full p-4 mr-4">
                  ✉️
                </div>
                <div>
                  <h4 className="font-bold">Email Us</h4>
                  <p className="text-gray-600">aswinidalasinghray@gmail.com</p>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239486.66728487329!2d85.65563903334204!3d20.30112904837954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1755165966060!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Right Column (Form) */}
            <div className="bg-white p-6 rounded-lg shadow">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded w-full"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded w-full"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 rounded w-full"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 rounded w-full"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-sky-500 text-white px-6 py-2 rounded-full hover:bg-sky-600 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
   </>
  )
}

export default Contact