import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaEye, FaLink } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ORGANZE",
      image: "/PORTFLIO/portfolio1.jpg",
      link: "/PORTFLIO/portfolio/1",
    },
    {
      id: 2,
      title: "Smart Watch",
      image: "/PORTFLIO/portfolio2.jpg",
      link: "/PORTFLIO/portfolio/2",
    },
    {
      id: 3,
      title: "Cosmetic Packaging",
      image: "/PORTFLIO/portfolio3.jpg",
      link: "/PORTFLIO/portfolio/3",
    },
  ];
  return (
    <>
    {/* Project section */}
      <section className="bg-gray-300 py-10 text-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 ">Projects</h2>
          <div className="w-16 h-1 bg-blue-500 mb-6"></div>
          <p className="mb-12 max-w-3xl">
            The projects showcased below illustrate my hands-on experience in
            developing interactive and responsive web solutions. From frontend
            interfaces to backend functionality, each project demonstrates my
            commitment to clean code, modern development practices, and
            practical problem-solving.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0  bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                  {/* View Icon */}
                  <button
                    onClick={() => window.open(project.image, "_blank")}
                    className="p-3 bg-white rounded-full text-blue-600 hover:scale-110 transition"
                  >
                    <FaEye size={20} />
                  </button>

                  {/* Link Icon */}
                  <Link
                    to={project.link}
                    className="p-3 bg-white rounded-full text-blue-600 hover:scale-110 transition"
                  >
                    <FaLink size={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects