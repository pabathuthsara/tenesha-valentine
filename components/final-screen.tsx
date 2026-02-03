"use client";

import { useEffect, useState } from "react";
import { Heart, Sparkles, Star } from "lucide-react";

export function FinalScreen() {
  const [showContent, setShowContent] = useState(false);
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; delay: number }>>([]);

  useEffect(() => {
    // Trigger content animation
    setTimeout(() => setShowContent(true), 500);

    // Create falling hearts
    const newHearts = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Animated falling hearts */}
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute text-primary animate-fall"
          style={{
            left: `${heart.x}%`,
            top: "-50px",
            width: `${Math.random() * 30 + 20}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${Math.random() * 3 + 4}s`,
          }}
          fill="currentColor"
        />
      ))}

      {/* Background sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-accent/40 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 25 + 15}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 2 + 1}s`,
            }}
          />
        ))}
        {[...Array(15)].map((_, i) => (
          <Star
            key={`star-${i}`}
            className="absolute text-primary/30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 10}px`,
              animationDelay: `${Math.random() * 3}s`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      <div
        className={`relative z-10 flex flex-col items-center transition-all duration-1000 ${showContent ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
      >
        {/* Celebration hearts */}
        <div className="flex items-center gap-4 mb-6">
          <Heart
            className="w-12 h-12 text-primary animate-bounce"
            fill="currentColor"
            style={{ animationDelay: "0s" }}
          />
          <Heart
            className="w-16 h-16 text-primary animate-bounce"
            fill="currentColor"
            style={{ animationDelay: "0.2s" }}
          />
          <Heart
            className="w-20 h-20 text-primary animate-bounce"
            fill="currentColor"
            style={{ animationDelay: "0.4s" }}
          />
          <Heart
            className="w-16 h-16 text-primary animate-bounce"
            fill="currentColor"
            style={{ animationDelay: "0.2s" }}
          />
          <Heart
            className="w-12 h-12 text-primary animate-bounce"
            fill="currentColor"
            style={{ animationDelay: "0s" }}
          />
        </div>

        {/* Main message */}
        <h1 className="text-5xl md:text-7xl font-serif text-primary mb-4 text-center animate-pulse">
          YAY!
        </h1>

        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 text-center text-balance">
          I Knew You&apos;d Say Yes!
        </h2>

        <div className="bg-card rounded-3xl p-8 shadow-2xl border-4 border-primary/30 max-w-md mb-8">
          <p className="text-lg text-foreground/90 text-center leading-relaxed font-serif">
            I love you so damn much chutaaaaa. Thank for being my forever valentine.
            I&apos;m so lucky to have you in my life.
          </p>
          <div className="flex justify-center gap-2 mt-6">
            <Heart className="w-6 h-6 text-primary" fill="currentColor" />
            <Heart className="w-6 h-6 text-primary" fill="currentColor" />
            <Heart className="w-6 h-6 text-primary" fill="currentColor" />
          </div>
        </div>

        <p className="text-2xl md:text-3xl font-serif text-primary italic text-center">
          Happy Valentine&apos;s Day, My Love!
        </p>

        <p className="text-muted-foreground mt-8 text-center">
          Forever Yours
        </p>
      </div>

    </div>
  );
}
