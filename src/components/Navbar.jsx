import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// -- navbar component --
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Change this value to adjust when the blur effect starts
      const scrollThreshold = 100;
      setScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full h-auto flex justify-center fixed top-0 left-0 z-50 transition-all duration-300 
      ${scrolled ? "backdrop-blur-md bg-transparent shadow-md" : "pt-6"}`}
    >
      <SlideTabs />
    </div>
  );
};

// -- sidetabs component --
const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({ ...pv, opacity: 0 }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1 my-4"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Properties</Tab>
      <Tab setPosition={setPosition}>Pricing</Tab>
      <Tab setPosition={setPosition}>Contact</Tab>
      <Tab setPosition={setPosition}>About</Tab>

      {/* -- cursor component -- */}
      <Cursor position={position} />
    </ul>
  );
};

// -- tab component --
const Tab = ({ children, setPosition }) => {
  const ref = useRef();
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

// -- cursor component --
const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

export default Navbar;
