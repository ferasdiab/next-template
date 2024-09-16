import Hero from "@/components/Hero";
// import BenSection from "@/components/BenSection";
import dynamic from "next/dynamic";

const BenSection = dynamic(() => import("@/components/BenSection"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Hero />
      <BenSection />
    </>
  );
}
