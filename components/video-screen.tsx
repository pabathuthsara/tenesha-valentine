"use client";

import { Heart, Music, ChevronRight } from "lucide-react";

interface VideoScreenProps {
  onNext: () => void;
}

export function VideoScreen({ onNext }: VideoScreenProps) {
  // Replace 'example' with your actual YouTube video ID
  const videoId = "vGJTaP6anOU";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Floating music notes background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Music
            key={i}
            className="absolute text-primary/15 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 25 + 15}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-3xl w-full">
        {/* Title */}
        <div className="flex items-center gap-3 mb-4">
          <Heart className="w-8 h-8 text-primary" fill="currentColor" />
          <h1 className="text-3xl md:text-4xl font-serif text-foreground text-center">
            Our Song
          </h1>
          <Heart className="w-8 h-8 text-primary" fill="currentColor" />
        </div>

        <p className="text-muted-foreground text-lg mb-8 text-center max-w-md">
          Every time I hear this song, I think of you and all our beautiful moments together
        </p>

        {/* YouTube Embed */}
        <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20 mb-8">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
            title="Our Song"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Caption */}
        <p className="text-center text-foreground/80 italic text-lg mb-8 font-serif">
          &quot;This song plays in my heart whenever I think of you&quot;
        </p>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          See Our Memories
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
