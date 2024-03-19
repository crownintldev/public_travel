//@ts-nocheck
"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import Image from "next/image";
import { flagimg } from "@/components/Constant";

// Function to duplicate the array for a seamless loop
const createLoopedArray = (arr, count) => {
  const loopedArray = [];
  for (let i = 0; i < count; i++) {
    loopedArray.push(...arr);
  }
  return loopedArray;
};

const loopedflagimg = createLoopedArray(flagimg, 5); // Adjust the count based on your needs

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 5000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        {loopedflagimg.map((array, index) => (
          <motion.div
            key={index}
            className="grid place-items-center md:w-[32%] max-w-[30%] ">
            <div className={`p-2 md:p-0 w-20 h-20 md:w-32 md:h-32 ml-2 mr-2 items-center flex shadow border-2 border-primary-orange-200 rounded-full `}>
              <Image
                className="rounded-full"
                src={array.image}
                alt={array.image}
                width={150}
                height={150}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Flag() {
  return (
    <div className={"mt-16 md:mt-32  space-y-3 "}>
      <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
    </div>
  );
}
