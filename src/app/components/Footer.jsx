"use client";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h3 className="text-2xl font-bold mb-4 md:mb-0">Tintin</h3>
          <ul className="flex space-x-6">
            <li className="hover:text-gray-300">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link href="/shopNow">Shop Now</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link href="/cart">Cart</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social media links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Bottom section */}
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Tintin. All rights reserved.</p>
          <p>
            Built by <span className="text-blue-500">Nitin Kant</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
