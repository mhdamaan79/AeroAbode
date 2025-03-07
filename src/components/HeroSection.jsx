import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const COLORS_TOP = ["#FF9494", "#FFD1D1", "#FFE3E1", "#FFF5E4"];

export const HeroSection = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(100% 125% at 50% 0%, #F9F5F6 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-[#F9F5F6] px-4 py-8 md:py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center justify-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-900/50 px-3 py-1.5 text-sm text-white">
          🏡 Explore Our Exclusive Listings!
        </span>
        <h1 className="max-w-4xl bg-gradient-to-br from-[#393E46] to-[#393E46] bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          Find Your Perfect Property <br />
          Buy, Sell & Rent Seamlessly!
        </h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed text-[#1B262C]">
          Looking for your next home or investment? Browse verified properties,
          get expert insights, and make informed decisions today!
        </p>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-[#000000] px-4 py-2 text-gray-50 transition-colors hover:bg-white hover:text-black cursor-pointer"
        >
          Book a Call
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>

        <AnimatedTooltipPreview />
      </div>
    </motion.section>
  );
};

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center w-full -mb-20 mt-10">
      <AnimatedTooltip items={people} />
    </div>
  );
}
