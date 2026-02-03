"use client";

import { useState } from "react";
import { Heart, ChevronRight, Camera, ImageIcon } from "lucide-react";
import Image from "next/image";

interface MemoriesScreenProps {
  onNext: () => void;
}

const memories = [
  { id: 1, caption: "Our first date together", image: "/photo1.png" },
  { id: 2, caption: "That special moment", image: "/photo2.png" },
  { id: 3, caption: "Making memories", image: "/photo3.png" },
  { id: 4, caption: "My favorite smile", image: "/photo4.png" },
  { id: 5, caption: "Us being us", image: "/photo5.png" },
  { id: 6, caption: "Forever grateful for you", image: "/photo6.png" },
];

export function MemoriesScreen({ onNext }: MemoriesScreenProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center bg-background p-4 py-12 relative overflow-hidden">
      {/* Background hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 40 + 20}px`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-5xl w-full">
        {/* Title */}
        <div className="flex items-center gap-3 mb-2">
          <Camera className="w-8 h-8 text-primary" />
          <h1 className="text-3xl md:text-4xl font-serif text-foreground text-center">
            Our Memories
          </h1>
          <Camera className="w-8 h-8 text-primary" />
        </div>

        <p className="text-muted-foreground text-lg mb-10 text-center max-w-md">
          Every moment with you is a treasure I hold close to my heart
        </p>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full mb-10">
          {memories.map((memory) => (
            <div
              key={memory.id}
              className="relative group"
              onMouseEnter={() => setHoveredId(memory.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-card bg-card transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02] group-hover:border-primary/30 relative">
                {memory.image ? (
                  <Image
                    src={memory.image}
                    alt={memory.caption}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-secondary flex flex-col items-center justify-center p-4">
                    <ImageIcon className="w-12 h-12 text-muted-foreground/50 mb-2" />
                    <p className="text-xs text-muted-foreground text-center">
                      Add photo {memory.id}
                    </p>
                  </div>
                )}
              </div>

              {/* Caption overlay */}
              <div
                className={`absolute bottom-0 left-0 right-0 bg-foreground/80 backdrop-blur-sm text-card p-3 rounded-b-2xl transition-all duration-300 ${hoveredId === memory.id
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
                  }`}
              >
                <p className="text-sm font-medium text-center flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4" fill="currentColor" />
                  {memory.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-foreground/80 italic text-lg mb-8 font-serif max-w-lg">
          &quot;These photos are just snapshots, but the love we share is an endless movie&quot;
        </p>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          I Have A Question...
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
