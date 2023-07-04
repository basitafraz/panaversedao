import Image from "next/image";
import Hero from "@/components/widgets/Hero";
import CoreTracks from "@/components/widgets/CoreTracks";
import SpecializedTracks from "@/components/widgets/SpecializedTracks";
import Outcome from "@/components/widgets/Outcome";

// import Button from "@/components/shared/button";

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <Hero />
      {/* Core Tracks Section */}
      <CoreTracks />
      {/* Specialized Tracks */}
      <SpecializedTracks/>
      {/* Outcome */}
      <Outcome/>
    </main>
  );
}
