"use client";
import { ParallaxScroll } from "../ui/parallax-scroll";
import tra1 from '../../../public/assets/images/tra1.jpg'
import tra2 from '../../../public/assets/images/tra2.jpg'
import tra3 from '../../../public/assets/images/tra3.jpg'
import tra4 from '../../../public/assets/images/static/cambodia3.webp'
import tra5 from '../../../public/assets/images/static/azerbaijan1.webp'
import { ParallaxScrollSecond } from "../ui/parallax-scroll-2";



export function Compains() {
  return <ParallaxScrollSecond  images={images} />;
}

const images = [
  tra1,
  tra2,
  tra3,
  tra1,
  tra2,
  tra3,
  tra5,
  tra1,
  tra3,
  tra5,
  tra4,
  tra2,
  tra3,
  tra4,
  tra2,
  tra4,
  tra2,
  tra3,
  tra4,
  tra2,
  tra4,
  tra2,
  tra3,
  tra4,
  tra2,
];
