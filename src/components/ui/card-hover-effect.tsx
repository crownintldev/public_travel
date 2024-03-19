"use client"
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HeadingH3 } from "../Common/Heading";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    icon: any;
    title: string;
    dec: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
    <div className="container p-2 mt-10 lg:mt-32">

    <HeadingH3 title={"Our Services"}/>
        <hr className='w-14 border-2 border-primary-orange-200 '/>
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
        )}
        >
        
      {items.map((item, index) => (
          <div
          
          key={index}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
              className="absolute inset-0 h-full w-full  bg-primary-orange-200 dark:bg-primary-orange-200 block  rounded-3xl"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                }}
                />
                )}
          </AnimatePresence>
          <Card>
            <CardIcon>{item.icon}</CardIcon>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.dec}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
    </div>

</>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn( "rounded-2xl h-full w-full p-4 overflow-hidden border-t-primary-orange-200 border-t-4  bg-white shadow group-hover:border-primary-orange-200 relative z-10",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardIcon = ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => {
    return (
        <div className={cn("w-16 h-16 rounded-full flex justify-center items-center transition duration-200 border-primary-orange-200 group-hover:bg-primary-orange-200 border-2", className)}>
          {children}
          </div>
     
    );
  };
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-black font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-black tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
