"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaEnvelope,
  FaFire,
  FaPaperPlane,
} from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Project from "./components/project";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100 font-open-sans min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Skils Section */}
      <Skills />

      {/* Portfolio Section */}
      <Project />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
