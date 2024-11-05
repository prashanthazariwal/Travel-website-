import React, { useRef, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const formRef = useRef(null);

  useGSAP(() => {
    gsap.from("#footer", {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: "#footer",
        start: "top bottom",
        end: "top 80%",
        scrub: 1,
      },
    });

    gsap.from(".footer-section", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#footer",
        start: "top bottom",
      },
    });
  });

  useEffect(() => {
    const links = footerRef.current.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(link, { y: -3, duration: 0.2, ease: "power2.out" });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(link, { y: 0, duration: 0.2, ease: "power2.out" });
      });
    });

    const form = formRef.current;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      gsap.to(form, { scale: 1.05, duration: 0.2, yoyo: true, repeat: 1 });
    });
  }, []);

  const socialLinks = [
    { icon: <FaFacebook />, url: "https://www.facebook.com/PepsiIndia" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/pepsi" },
    { icon: <FaTwitter />, url: "https://twitter.com/pepsi" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/company/pepsico" },
  ];

  const navLinks = [
    { title: "Home", nav: "#Home" },
    { title: "Products", nav: "#Products" },
    { title: "About", nav: "#About" },
    { title: "Contact", nav: "#Contact" },
  ];

  return (
    <footer ref={footerRef} id="footer" className="bg-black text-white py-20 px-8 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="footer-section space-y-6">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-red-500">ToGo</h3>
            <p className="text-gray-200 text-sm">Taste the thrill of now!</p>
          </div>
          <div className="footer-section space-y-6">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.nav} className="text-gray-200 hover:text-white transition-colors duration-300 relative group">
                    {link.title}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section space-y-6">
            <h4 className="text-xl font-semibold">Connect</h4>
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} className="text-gray-200 hover:text-white transition-colors duration-300 transform hover:scale-110">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-section space-y-6">
            <h4 className="text-xl font-semibold">Newsletter</h4>
            <form ref={formRef} className="flex flex-col space-y-3">
              <input type="email" placeholder="Your email" className="bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300" />
              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Prashant All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
