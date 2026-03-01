"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const lettersRef = useRef([]);
  const statsRef = useRef([]);
  const carRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // headline animation
      gsap.from(lettersRef.current, {
        opacity: 0,
        y: 60,
        stagger: 0.06,
        duration: 1,
        ease: "power4.out"
      });

      // stats animation
      gsap.from(statsRef.current, {
        opacity: 0,
        y: 40,
        delay: 0.7,
        stagger: 0.2,
        duration: 0.9,
        ease: "power2.out"
      });

      // scroll animation (only car moves)
      gsap.to(carRef.current, {
        x: 900,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1400",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1
        }
      });

    }, sectionRef);

    return () => ctx.revert(); // prevents duplicate triggers
  }, []);

  const text = "WELCOME ITZ FIZZ".split("");

  const stats = [
    { value: "95%", label: "Client Satisfaction" },
    { value: "120+", label: "Projects Done" },
    { value: "10x", label: "Growth Rate" }
  ];

  return (
    <section
      ref={sectionRef}
      className="h-screen flex flex-col justify-center items-center relative overflow-hidden bg-black text-white"
    >

      {/* TITLE */}
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

      {/* STATS */}
      <div className="flex gap-10 mt-12">
        {stats.map((item, i) => (
          <div
            key={i}
            ref={(el) => (statsRef.current[i] = el)}
            className="text-center"
          >
            <p className="text-3xl font-bold">{item.value}</p>
            <p className="text-gray-400 text-sm tracking-wide">{item.label}</p>
          </div>
        ))}
      </div>

      {/* CAR IMAGE */}
      <img
  ref={carRef}
  src="/car.png"
  alt="car"
  style={{ width: "160px", height: "auto" }}
  className="absolute bottom-24 left-[-160px] pointer-events-none select-none"
/>

      {/* STATIC SCROLL TEXT */}
      <p className="absolute bottom-6 text-gray-400 text-sm tracking-[0.4em]">
        SCROLL DOWN
      </p>

    </section>
  );
}