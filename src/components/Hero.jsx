// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Hero() {
//   const sectionRef = useRef();
//   const lettersRef = useRef([]);
//   const statsRef = useRef([]);
//   const carRef = useRef();

//   useEffect(() => {

//     // headline intro animation
//     gsap.from(lettersRef.current, {
//       opacity: 0,
//       y: 60,
//       stagger: 0.07,
//       duration: 1,
//       ease: "power4.out"
//     });

//     // stats intro animation
//     gsap.from(statsRef.current, {
//       opacity: 0,
//       y: 40,
//       delay: 0.8,
//       stagger: 0.2,
//       duration: 0.9,
//       ease: "power2.out"
//     });

//     // scroll animation (ONLY CAR MOVES + SECTION PINNED)
//     // gsap.to(carRef.current, {
//     //   x: 900,
//     //   scale: 1.1,
//     //   ease: "none",
//     //   scrollTrigger: {
//     //     trigger: sectionRef.current,
//     //     start: "top top",
//     //     end: "+=1600",
//     //     scrub: 1.5,
//     //     pin: true,
//     //     anticipatePin: 1
//     //   }
//     // });
//      gsap.to(carRef.current, {
//   x: window.innerWidth + 300,
//   ease: "none",
//   scrollTrigger: {
//     trigger: sectionRef.current,
//     start: "top top",
//     end: "+=1600",
//     scrub: 1.5
//   }
// });

//   }, []);

//   const text = "WELCOME ITZ FIZZ".split("");

//   const stats = [
//     { value: "95%", label: "Client Satisfaction" },
//     { value: "120+", label: "Projects Done" },
//     { value: "10x", label: "Growth Rate" }
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="h-screen flex flex-col justify-center items-center relative overflow-hidden text-center"
//     >

//       {/* HEADLINE */}
//       <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.6em]">
//         {text.map((letter, i) => (
//           <span
//             key={i}
//             ref={(el) => (lettersRef.current[i] = el)}
//             className="inline-block"
//           >
//             {letter}
//           </span>
//         ))}
//       </h1>

//       {/* STATS */}
//       <div className="flex gap-10 mt-12">
//         {stats.map((item, i) => (
//           <div
//             key={i}
//             ref={(el) => (statsRef.current[i] = el)}
//             className="text-center"
//           >
//             <p className="text-3xl font-bold">{item.value}</p>
//             <p className="text-gray-400">{item.label}</p>
//           </div>
//         ))}
//       </div>

//      <img
//   ref={carRef}
//   src="/car.png"
//   alt="car"
//   style={{ width: "160px", height: "auto" }}
//   className="absolute bottom-24 left-[-160px] pointer-events-none select-none"
// />
//     </section>
//   );
// }
// 
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Hero() {
  const sectionRef = useRef(null);
  const lettersRef = useRef([]);
  const statsRef = useRef([]);
  const carRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      // HEADLINE INTRO
      gsap.from(lettersRef.current, {
        opacity: 0,
        y: 60,
        stagger: 0.06,
        duration: 1,
        ease: "power4.out"
      });

      // STATS INTRO
      gsap.from(statsRef.current, {
        opacity: 0,
        y: 40,
        delay: 0.7,
        stagger: 0.2,
        duration: 0.9,
        ease: "power2.out"
      });

      // CAR SCROLL ANIMATION (ONLY CAR MOVES)
     gsap.to(carRef.current, {
      x: window.innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
       anticipatePin: 1
 // 👈 keep for testing
      }
    });

    }, sectionRef);

    return () => ctx.revert();
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
      className="h-screen flex flex-col justify-center items-center relative overflow-hidden text-center"
    >
      {/* HEADLINE */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.6em]">
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
            <p className="text-gray-400">{item.label}</p>
          </div>
        ))}
      </div>

      {/* CAR */}
      <img
        ref={carRef}
        src="/car.png"
        alt="car"
        style={{width:"200px", height:"auto"}}
        className="absolute bottom-24 left-[-160px] pointer-events-none select-none"
      />

      {/* STATIC TEXT */}
      <p className="absolute bottom-6 text-gray-400 text-sm tracking-[0.4em]">
        SCROLL DOWN
      </p>
    </section>
  );
}