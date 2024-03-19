"use client"
import React, { useState, useEffect } from "react";

// Define a type for the props
interface CounterProps {
  start: any;
  end: any;
  duration: any;
}

const Counter: React.FC<CounterProps> = ({ start, end, duration }) => {
  const [count, setCount] = useState<number>(start);
  const increment = (end - start) / (duration * 3000);

  useEffect(() => {
    let animationFrameId: number;
    const startTime = Date.now();

    const updateCounter = () => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime < duration * 1000) {
        setCount(start + increment * elapsedTime);
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    updateCounter();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [start, end, duration, increment]);

  return <div>{Math.floor(count)}+</div>;
};

export default Counter;
