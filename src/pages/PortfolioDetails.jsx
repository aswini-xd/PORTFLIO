import React, { useState } from "react";
import { useParams } from "react-router-dom";

const projectDetails = {
  1: {
    title: "ORGANZE:-The Organic e-Commerce",
    images: ["/PORTFLIO/portfolio1.jpg", "/PORTFLIO/portfolio1-2.jpg"], 
    category: "Web development",
    client: "portfolio",
    date: "07 June, 2025",
    url: "https://aswini-xd.github.io/organze/",
    description:
      "Organze is a fully responsive, user-centric e-commerce website designed to promote and sell organic products. Developed as part of my frontend development practice, the project showcases a clean UI, structured layout, and modern design elements tailored for a seamless online shopping experience.  ROLE : Frontend Developer  TECH STACK : HTML5, CSS3, JavaScript, Tailwind CSS, GitHub Pages.Why It Matters: Organze represents my ability to convert UI ideas into real, accessible, and interactive websites. It reflects my design sense, code discipline, and willingness to evolve into a full-stack developer. TO BE UPDATED:Backend integration using like NODE + EXPRESS + MYSQL.  Add dynamic features like cart, login/signup, and order tracking using REACT .Implement form validation and secure data handling for contact & order pages"
  },
  2: {
    title: "UnnatiMitra – Growth, Learning & Giving",
    images: ["/PORTFLIO/portfolio2-1.jpg", "/PORTFLIO/portfolio2-2.jpg","/PORTFLIO/portfolio2-3.jpg"], 
    category: "Web Development",
    client: "Udyogimtra",
    date: "10 April, 2024",
    url: "https://aswini-xd.github.io/UnnatiMitra/",
    description:
"UnnatiMitra is a versatile, fully responsive website built to support and promote initiatives in charity, education, and business development. Designed with a modern, minimalistic aesthetic, it offers an intuitive user experience and clear navigation to help visitors connect with the platform’s mission. The site features engaging home and about sections, cause/project showcases, contact forms, and calls-to-action that encourage user participation and support. ROLE : Frontend Developer  TECH STACK : HTML5, TailwindCSS, JavaScript, GitHub Pages.Why It Matters: UnnatiMitra reflects my ability to design and implement user-focused platforms that serve multiple social and business purposes. It demonstrates my skill in creating clean layouts, responsive components, and a consistent visual identity across different sections.TO BE UPDATED: Expand the website with fully developed subpages for each focus area (charity, education, and business promotion), integrate backend functionality using Node.js, Express, and MySQL, and implement advanced features such as user authentication, donation/payment gateways, and an admin dashboard for content management."
  },
  3: {
   title: "Heart Animation On Double-click",
    images: ["/PORTFLIO/portfolio3.jpg", "/PORTFLIO/portfolio3-2.jpg"], 
    category: "Web Design",
    client: "portfolio",
    date: "10 April, 2024",
    url: "https://aswini-xd.github.io/portfolio/Heart.html",
    description: "This project features an interactive heart animation effect when the user double-clicks on an image, creating a visually interaction. ROLE : Frontend Developer  TECH STACK : HTML5, CSS3, JavaScript."
  }
};

const PortfolioDetails = () => {
  const { id } = useParams();
  const project = projectDetails[id];
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) return <p className="p-8">Project not found</p>;

  const steps = project.description
    .replace(/ROLE\s*:/g, "\nROLE:")
    .replace(/TECH STACK\s*:/g, "\nTECH STACK:")
    .replace(/Why It Matters\s*:/g, "\nWhy It Matters:")
    .replace(/TO BE UPDATED\s*:/g, "\nTO BE UPDATED:")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:flex gap-10">
        {/* Left Image Slideshow */}
        <div className="flex-1 relative">
          <img
            src={project.images[currentImage]}
            alt={project.title}
            className="w-full h-[700px] rounded-lg shadow-lg object-cover"
          />
          {/* Prev & Next Buttons */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-3 bg-black/50 text-white px-3 py-1 rounded-full"
              >
                ◀
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-3 bg-black/50 text-white px-3 py-1 rounded-full"
              >
                ▶
              </button>
            </>
          )}
        </div>

        {/* Right Info */}
        <div className="flex-1 text-black">
          <div className="bg-gray-50 p-6 rounded-lg shadow mb-6">
            <h3 className="text-lg font-bold mb-4">Project information</h3>
            <p><strong>Category:</strong> {project.category}</p>
            <p><strong>Client:</strong> {project.client}</p>
            <p><strong>Project date:</strong> {project.date}</p>
            <p>
              <strong>Project URL:</strong>{" "}
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                {project.url}
              </a>
            </p>
          </div>
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          <div className="space-y-3">
            {steps.map((step, index) => (
              <div key={index} className="p-3 bg-gray-100 rounded-md">
                <strong>Step {index + 1}:</strong> {step}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetails;
