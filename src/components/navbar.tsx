"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiOutlineDotsHorizontal } from "react-icons/hi"; // Three-dot icon

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      console.log("scrollTop", scrollTop);

      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#091A24]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">MyApp</div>

        {/* Links - Hidden on small screens */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <Link href="/">
              <span className="hover:text-gray-400">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="hover:text-gray-400">About</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="hover:text-gray-400">Contact</span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon - Visible on small screens */}
        <div className="md:hidden">
          <button className="text-white text-3xl">
            <HiOutlineDotsHorizontal />
          </button>
        </div>
      </div>
    </nav>
  );
}
