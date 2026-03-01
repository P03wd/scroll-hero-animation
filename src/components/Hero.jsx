"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const lettersRef = useRef([]);
  const statsRef = useRef([]);
  const carRef = useRef();

  useEffect(() => {
    // headline intro
    gsap.from(lettersRef.current, {
      opacity: 0,
      y: 60,
      stagger: 0.07,
      duration: 1,
      ease: "power4.out"
    });

    // stats intro
    gsap.from(statsRef.current, {
      opacity: 0,
      y: 40,
      delay: 0.8,
      stagger: 0.2,
      duration: 0.9,
      ease: "power2.out"
    });

    // scroll animation professional
    gsap.to(carRef.current, {
      x: 600,
    //   rotate: 15,
    scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: carRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5
      }
    });

  }, []);

  const text = "WELCOME ITZ FIZZ".split("");

  const stats = [
    { value: "95%", label: "Client Satisfaction" },
    { value: "120+", label: "Projects Done" },
    { value: "10x", label: "Growth Rate" }
  ];

  return (
    <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">

      <h1 className="text-5xl md:text-7xl font-bold tracking-[0.6em] text-center">
        {text.map((letter, i) => (
          <span
            key={i}
            ref={(el) => (lettersRef.current[i] = el)}
            className="inline-block"
          >
            {letter}
          </span>
        ))}
      </h1>

      <div className="flex gap-10 mt-12">
        {stats.map((item, i) => (
          <div
            key={i}
            ref={(el) => (statsRef.current[i] = el)}
            className="text-center"
          >
            <p className="text-3xl font-bold">{item.value}</p>
            <p className="text-gray-400">{item.label}</p>
          </div>
        ))}
      </div>

      <img
  ref={carRef}
  src="/car.png"
  style={{ width: "420px", maxWidth: "90vw", height: "auto" }}
  className="absolute bottom-10 left-10"
  alt="car"
/>
    </section>
  );
}