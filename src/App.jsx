// import React, { useEffect } from 'react'
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
// import Navbar from './pages/Navbar'
// import About from './pages/About'
// import Skills from './pages/Skills'
// import Projects from './pages/Projects'
// import Blog from './pages/Blog'
// import Contact from './pages/Contact'

// // small helper component to make page scroll-to-top with smooth behavior on route change
// function ScrollToTop(){
//   const { pathname } = useLocation()
//   useEffect(()=>{
//     // smooth scroll to top when route changes
//     window.scrollTo({ top: 0, behavior: 'smooth' })
//   },[pathname])
//   return null
// }

// export default function App(){
//   return (
//     <Router>
//       <ScrollToTop />
//       <div className="min-h-screen text-white">
//         <Navbar/>
//         <Routes>
//           <Route path="/about" element={<About/>} />
//           <Route path="/skills" element={<Skills/>} />
//           <Route path="/projects" element={<Projects/>} />
//           <Route path="/blog" element={<Blog/>} />
//           <Route path="/contact" element={<Contact/>} />
//           <Route path="/" element={<About/>} />
//         </Routes>
//       </div>
//     </Router>
//   )
// }


import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './pages/Navbar'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Testi from './pages/Testi'
import Contact from './pages/Contact'
import PortfolioDetails from './pages/PortfolioDetails'
import Footer from './pages/footer'

const App = () => {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/testi" element={<Testi />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio/:id" element={<PortfolioDetails/>} />
      </Routes>
    <Footer/>
    </div>
  )
}

export default App

