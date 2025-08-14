import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0 text-sm">
          &copy; {new Date().getFullYear()} Aswini. All rights reserved.
        </p>
        <div className="flex space-x-4">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/aswini.dalasinghray.7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/aswinii._.xd/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm4.75-3a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aswinikumar2/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.4 8.5h4.2v14.99H.4V8.5zM8.5 8.5h4.02v2.17h.06c.56-1.06 1.94-2.17 4-2.17 4.28 0 5.07 2.82 5.07 6.48v7.51h-4.2v-6.67c0-1.59-.03-3.64-2.22-3.64-2.23 0-2.57 1.74-2.57 3.53v6.78H8.5V8.5z" />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.46 6.011c-.793.352-1.644.59-2.54.696a4.515 4.515 0 0 0 1.984-2.496 9.034 9.034 0 0 1-2.865 1.095 4.505 4.505 0 0 0-7.675 4.106 12.788 12.788 0 0 1-9.29-4.71 4.505 4.505 0 0 0 1.393 6.018 4.48 4.48 0 0 1-2.04-.563v.056a4.505 4.505 0 0 0 3.612 4.415 4.517 4.517 0 0 1-2.034.077 4.506 4.506 0 0 0 4.205 3.126 9.038 9.038 0 0 1-5.604 1.932A9.144 9.144 0 0 1 0 19.54a12.76 12.76 0 0 0 6.92 2.03c8.3 0 12.844-6.874 12.844-12.843 0-.196-.005-.392-.014-.586a9.174 9.174 0 0 0 2.25-2.336z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
    </>
  )
}



export default Footer