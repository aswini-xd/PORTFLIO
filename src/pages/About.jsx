import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaEye, FaLink } from "react-icons/fa";

const About = () => {
  const images = ["/bg-2.jpg", "/icon-2.webp", "/img-1.jpg"];

  const skills = [
    { name: "HTML", percent: 100 },
    { name: "CSS", percent: 90 },
    { name: "JAVASCRIPT", percent: 75 },
    { name: "REACT", percent: 80 },
    { name: "WORDPRESS/CMS", percent: 70 },
    { name: "TAILWIND,BOOTSTRAP", percent: 90 },
  ];

  const projects = [
    {
      id: 1,
      title: "ORGANZE",
      image: "/portfolio1.jpg",
      link: "/portfolio/1",
    },
    {
      id: 2,
      title: "Smart Watch",
      image: "/portfolio2.jpg",
      link: "/portfolio/2",
    },
    {
      id: 3,
      title: "Cosmetic Packaging",
      image: "/portfolio3.jpg",
      link: "/portfolio/3",
    },
  ];

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [presentIndex, setPresentIndex] = useState(0);

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

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto-play every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Cleanup
  }, [images.length]);

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
      {/* Home section */}
      <section className="bg-[#0B0E1A] text-white min-h-screen flex items-center justify-center px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <p className="text-blue-400 tracking-widest mb-3 uppercase text-sm">
              Web Developer
            </p>

            {/* Animated Heading */}
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Hello,<span className="text-blue-500"> I’m Aswini!</span>
            </motion.h1>

            <p className="text-gray-400 mb-6 max-w-md">
              Hi, I’m Aswini, professional web Developer as a fresher. Need any
              help?
            </p>
            <a
              href="/Aswinii.pdf"
              className="px-4 py-2 rounded-md bg-gradient-to-r from-sky-400 to-cyan-400 text-black font-semibold"
            >
              Download Resume
            </a>
          </div>

          {/* Right Image Carousel */}
          <div className="flex-1 relative flex justify-center">
            <motion.img
              key={currentIndex} // Trigger animation on image change
              src={images[currentIndex]}
              alt="Portfolio"
              className="rounded-lg w-[300px] md:w-[400px] object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md hover:scale-110 transition"
            >
              ◀
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md hover:scale-110 transition"
            >
              ▶
            </button>
          </div>
        </div>
      </section>

      {/* About section */}
     <section className="bg-gray-100 py-10 text-black">
        
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 ">About</h2>
          <div className="w-12 h-1 bg-blue-500 mb-4"></div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Left Image */}
          <div className="flex-1">
            <img
              src="/icon.jpeg"
              alt="Profile"
              className="rounded-lg h-[500px] w-[400px] object-cover"
            />
          </div>

          {/* Right Info */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-3">
              UI/UX Designer & Web Developer.
            </h3>
            <p className="italic  mb-6">
              Aspiring Front-end Developer with strong foundational knowledgein
              web technologies and programming. Passionate about
              creatingresponsive, user-friendly interfaces using modern frontend
              stacks.Seeking opportunities to contribute and grow in a
              professionalenvironment.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-gray-800 mb-6">
              <p>
                <span className="text-blue-500 mr-2">›</span>
                <strong>Birthday:</strong> 1 Jan 2001
              </p>
              <p>
                <span className="text-blue-500 mr-2">›</span>
                <strong>Age:</strong> 24
              </p>
              <p>
                <span className="text-blue-500 mr-2">›</span>
                <strong>College:</strong> Niss Institute 
              </p>
              <p>
                <span className="text-blue-500 mr-2">›</span>
                <strong>Degree:</strong> MCA @2025
              </p>
              <p>
                <span className="text-blue-500 mr-2">›</span>
                <strong>Phone:</strong> 9348503025
              </p>
              <p>
                <span className="text-blue-500 mr-2">›</span>
                <strong>Email:</strong> aswinidalasinghray@gmail.com
              </p>
              <p>
                <span className="text-blue-500 mr-2">›</span>
                <strong>City:</strong> BBSR,ODISHA
              </p>
              <p>
                <span className="text-blue-500 mr-2">›</span>
                <strong>Freelance:</strong> Available
              </p>
            </div>

            <p className="">
              My passion for frontend development is not only reflected in my
              Portfolio but also in the enthusiasm and dedication I bring to
              each project.
            </p>
          </div>
        </div>
      </div>
      </section>

      {/* Skill section */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-6">
          {/* Title */}
          <h2 className="text-3xl font-bold mb-2 text-black">Skills</h2>
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

      {/* Project section */}
      <section className="bg-[#f3f8fb] py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-black">Projects</h2>
          <div className="w-16 h-1 bg-blue-500 mb-6"></div>
          <p className="mb-12 text-gray-700 max-w-3xl">
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

      {/* Testi section */}
    <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-6">
          {/* Title */}
          <h2 className="text-3xl font-bold mb-2 text-black">Testimonials</h2>
          <div className="w-12 h-1 bg-blue-500 mb-4"></div>

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
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-white py-16 text-black">
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
  );
};

export default About;
