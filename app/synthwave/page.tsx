"use client";
import React from "react";
import { Navigation } from "../[...page]/dummyNav";
import { Footer } from "@/components/footer/Footer";
import { SynthwaveBackground } from "@/components/synthwave/SynthwaveBackground";
import { GlowText } from "@/components/synthwave/GlowText";

export default function SynthwavePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navigation />
      <main className="grow relative overflow-hidden bg-[#0d0221] flex items-center justify-center">
        <SynthwaveBackground />
        <div className="z-10 text-center py-24 px-4">
          <GlowText
            text="HELLO WORLD"
            mainColor="#ff00ff"
            shadowColor="#00ffff"
            className="text-6xl md:text-8xl font-bold tracking-wider mb-6"
          />
          <p className="text-purple-300 text-xl md:text-2xl max-w-2xl mx-auto">
            Welcome to the neon grid of tomorrow, where the digital dawn never
            ends.
          </p>
          <div className="mt-10">
            <button className="px-6 py-3 bg-transparent border-2 border-[#ff00ff] text-[#ff00ff] hover:bg-[#ff00ff]/20 transition-all duration-300 rounded-lg font-bold tracking-wider mx-2">
              EXPLORE
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff]/20 transition-all duration-300 rounded-lg font-bold tracking-wider mx-2">
              CONNECT
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
