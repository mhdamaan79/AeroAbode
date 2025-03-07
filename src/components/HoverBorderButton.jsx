import React from "react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { FiArrowRight } from "react-icons/fi";

export function HoverBorderGradientDemo() {
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="cursor-pointer dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span>Book a Call</span>
        <FiArrowRight className="hover:-rotate-45 transition-all duration-100 ease-in-out" />
      </HoverBorderGradient>
    </div>
  );
}
