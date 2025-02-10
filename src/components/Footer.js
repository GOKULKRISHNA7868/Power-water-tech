import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:info@aclanro.com"
            className="hover:text-gray-300"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <p className="text-sm">
            Contact us:{" "}
            <a
              href="mailto:info@aclanro.com"
              className="underline hover:text-gray-300"
            >
              info@aclanro.com
            </a>{" "}
            | +91 12345 67890
          </p>
        </div>

        {/* Copyright */}
        <div>
          <p className="text-xs">&copy; 2025 ACLAN RO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
