import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaDiscord,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img
                src="https://t3.ftcdn.net/jpg/03/18/30/42/360_F_318304293_znjwZnQifVU2pveb1VpWlVNlVE4BfcRV.jpg"
                className="h-10 mr-3"
                alt="Titan Fitness Logo"
              />
              <span className="text-xl font-bold text-gray-800">
                Titan Fitness
              </span>
            </Link>
            <p className="text-gray-600 text-sm">
              Your premier destination for fitness and wellness. Transform your
              body, elevate your life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-orange-600">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-600">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-600">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Vishallokhande8788"
                className="text-gray-500 hover:text-orange-600"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-orange-600 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-orange-600 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-orange-600 text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-orange-600 text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/blog"
                  className="text-gray-600 hover:text-orange-600 text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-600 hover:text-orange-600 text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-gray-600 hover:text-orange-600 text-sm"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-600 hover:text-orange-600 text-sm"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-600 hover:text-orange-600 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-600 hover:text-orange-600 text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/refund"
                  className="text-gray-600 hover:text-orange-600 text-sm"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                Contact Us
              </h4>
              <p className="text-gray-600 text-sm">info@titanfitness.com</p>
              <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} Titan Fitness. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link
              to="/sitemap"
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              Sitemap
            </Link>
            <Link
              to="/careers"
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              Careers
            </Link>
            <Link
              to="/press"
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              Press
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
