import React from 'react'
import Newsletter from './newsletter'

const Footer = () => {
    return (
        <footer className="w-full max-w-6xl mx-auto">

        <Newsletter />
        
        <nav className="flex justify-between text-sm p-4  md:p-8 ">
          <p className="">
            Created by{` `}
            <a
              className="font-bold no-underline"
              href="https://truehello.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              truehello
            </a>
          </p>

          <p>
          © {new Date().getFullYear()}, Speech Therapy Resources
          </p>
        </nav>
      </footer>
    )
}

export default Footer;
