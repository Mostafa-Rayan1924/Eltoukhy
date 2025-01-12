import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Suppliers from "@/components/Home/Suppliers";

export default function Home() {
  return (
    <main className="space-y-14 md:space-y-18">
      <Hero />
      <Suppliers />
      {/* <About /> */}
    </main>
  );
}
