import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaEye, FaLink } from "react-icons/fa";

const Testi = () => {
   const testimonials = [
    {
      text: "Aswini is always so creative and dedicated. I’ve seen the effort he puts into his work, and it’s truly inspiring.",
      name: "Himanshu Mishra",
      role: "Designer",
      image: "/himanshu.jpg",
    },
    {
      text: "Working with him was smooth and enjoyable. He listens carefully and brings ideas to life beautifully.",
      name: "Sikharani Tada",
      role: "Friend",
      image: "/sikha.jpg",
    },
    {
      text: "He’s always patient and ready to help. You can count on him to get things done the right way.",
      name: "Puja Dash",
      role: "Freelancer",
      image: "/puja.jpg",
    },
    {
      text: "Aswini has a very clear way of explaining things, which makes teamwork so much easier.",
      name: "Babu sahoo",
      role: "Engineer",
      image: "/babu.jpg",
    },
    {
      text: "A hardworking friend who never gives up until the job is done perfectly. Respect for his discipline!",
      name: "Priyanka jena",
      role: "Developer",
      image: "/priyanka.jpg",
    },
    {
      text: "Always positive and full of energy. He brings a friendly vibe to every project he’s part of.",
      name: "Mama paikaray",
      role: "Student",
      image: "/mana.jpg",
    },
    {
      text: "His designs are neat, modern, and very user-friendly. I’m always impressed by his attention to detail.",
      name: "Debashis Lala",
      role: "Freelancer",
      image: "/lala.jpg",
    },
  ];
   const [presentIndex, setPresentIndex] = useState(0);

    // Auto-play every 3 seconds
     useEffect(() => {
       const interval = setInterval(() => {
         setPresentIndex((prev) => (prev + 1) % testimonials.length);
       }, 3000);
       return () => clearInterval(interval);
     }, []);
   
     // Get the 3 testimonials to display
     const visibleTestimonials = [
       testimonials[presentIndex],
       testimonials[(presentIndex + 1) % testimonials.length],
       testimonials[(presentIndex + 2) % testimonials.length],
     ];
  return (
    <>
    {/* Testi section */}
      <section className="bg-gray-400 py-16">
        <div className="text-center mb-12 text-black">
          <h2 className="text-3xl font-bold">Testimonials</h2>
        </div>

        <div className="flex justify-center gap-8 transition-all duration-500">
          {visibleTestimonials.map((item, index) => (
            <div
              key={index}
              className="w-[350px] p-6 bg-white rounded-lg shadow-lg text-center"
            >
              <p className="text-gray-600 italic mb-4">
                {item.text}
              </p>
              
              <div className="flex justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                />
              </div>
              <p className="text-gray-600 italic mb-5">
                {item.name}
              </p>
              <p className="text-gray-500 text-sm">{item.role}</p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${
                presentIndex === idx ? "bg-blue-400" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </section>
    </>
  )
}

export default Testi