import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="h-[300vh] bg-gradient-to-b from-black to-gray-900 flex items-center justify-center text-4xl">
        Scroll Down
      </div>
    </>
  );
}