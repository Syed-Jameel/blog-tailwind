"use client";
import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    //show/hide the button based on scroll position
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    // Add event listener to track scrolling
    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds a smooth scrolling effect
    });
  };

  return (
    <button className={`${isVisible ? "block" : "hidden"} shadow-lg fixed z-50 bottom-32 -left-10 sm:bottom-40 sm:left-0  bg-gray-200 hover:bg-gray-300 text-gray-900 hover:text-red-600 font-semibold py-2 px-4 rounded-xl -rotate-90`} onClick={scrollToTop} title="Scroll to Top">
      <div> ------ Scroll to top</div>
    </button>
  );
}
