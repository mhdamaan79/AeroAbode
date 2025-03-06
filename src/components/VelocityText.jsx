import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";
import React, { useRef } from "react";

export const VelocityText = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  // -- First paragraph animations (left to right) --
  const skewXRaw = useTransform(
    scrollVelocity,
    [-0.5, 0.5],
    ["45deg", "-45deg"]
  );
  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

  // -- Second paragraph animations (right to left) --
  const skewXRaw2 = useTransform(
    scrollVelocity,
    [-0.5, 0.5],
    ["-45deg", "45deg"]
  );
  const skewX2 = useSpring(skewXRaw2, { mass: 3, stiffness: 400, damping: 50 });

  const xRaw2 = useTransform(scrollYProgress, [0, 1], [-1000, 0]);
  const x2 = useSpring(xRaw2, { mass: 3, stiffness: 400, damping: 50 });

  return (
    <section
      ref={targetRef}
      className="h-[40vh] md:h-[100vh] text-neutral-950 max-sm:mt-10 max-sm:-mb-20"
    >
      <div className="sticky top-0 flex flex-col justify-center h-40vh md:h-screen px-4 py-12 overflow-hidden gap-8 md:gap-16">
        {/* First paragraph - moves right to left */}
        <motion.p
          style={{ skewX, x }}
          className="origin-bottom-left whitespace-nowrap text-4xl font-black uppercase leading-[0.85] md:text-6xl md:leading-[0.85]"
        >
          Find a place that feels like home, where comfort meets elegance. From
          cityscapes to serene retreats, we bring you the finest properties.
          Explore, envision, and own the space you’ve always dreamed of. Your
          perfect home is just a click away!
        </motion.p>

        {/* Second paragraph - moves left to right */}
        <motion.p
          style={{ skewX: skewX2, x: x2 }}
          className="origin-bottom-left whitespace-nowrap text-4xl font-black uppercase leading-[0.85] md:text-6xl md:leading-[0.85]"
        >
          Unlock the door to endless possibilities—luxury homes, modern
          apartments, and breathtaking escapes. Whether you seek comfort, style,
          or investment, we have the perfect space for you. Discover, explore,
          and make it yours today!
        </motion.p>
      </div>
    </section>
  );
};
