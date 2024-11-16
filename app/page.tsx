"use client";

import ContactForm from "@/components/ContactForm";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { FloatNav } from "@/components/ui/FloatNav";
import { FaHome, FaServicestack, FaQuoteLeft, FaPhoneAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll for smooth scrolling

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("home");

  const navItems = [
    { name: "Home", link: "#home", icon: <FaHome size={20} /> },
    { name: "Service", link: "#service", icon: <FaServicestack size={20} /> },
    { name: "Testimonials", link: "#testimonials", icon: <FaQuoteLeft size={20} /> },
    { name: "Contact Us", link: "#contact", icon: <FaPhoneAlt size={20} /> },
  ];

  const handleScroll = () => {
    const sections = ["home", "service", "testimonials", "contact"];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        if (top <= scrollPosition && bottom >= scrollPosition) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="relative flex flex-col items-center justify-center bg-black mx-auto">
      <div className="w-full h-screen">
        {/* Floating navigation bar */}
        <FloatNav
          navItems={navItems.map((item) => ({
            ...item,
            active: activeSection === item.link,
          }))}
        />
        
        <div id="home">
          <Hero />
        </div>

        <div id="service">
          <Grid />
        </div>

        <div id="testimonials">
          <Testimonials />
        </div>

        <div id="contact">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
