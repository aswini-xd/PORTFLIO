
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaEye, FaLink } from "react-icons/fa";

const Skills = () => {

   const skills = [
    { name: "HTML", percent: 100 },
    { name: "CSS", percent: 90 },
    { name: "JAVASCRIPT", percent: 75 },
    { name: "REACT", percent: 80 },
    { name: "WORDPRESS/CMS", percent: 70 },
    { name: "TAILWIND,BOOTSTRAP", percent: 90 },
  ];

  return (
    <>
    <section className="bg-gray-100 py-10 text-black">
        <div className="container mx-auto px-6">
          {/* Title */}
          <h2 className="text-3xl font-bold mb-2 ">Skills</h2>
          <div className="w-12 h-1 bg-blue-500 mb-4"></div>
          <p className="text-gray-700 mb-8 max-w-3xl">
             I believe skills are not just tools—they’re the bridge between ideas and impact. Over time, I’ve honed my expertise in crafting intuitive, user-friendly, and visually appealing digital experiences.
          </p>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-semibold text-gray-800">
                    {skill.name}
                  </span>
                  <span className="text-sm font-semibold text-gray-800">
                    {skill.percent}%
                  </span>
                </div>
                <div className="w-full bg-gray-300 h-2 rounded-full">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills