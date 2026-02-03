"use client";

import { useState, useRef, useCallback } from "react";
import { Heart, Sparkles } from "lucide-react";

interface QuestionScreenProps {
  onYes: () => void;
}

export function QuestionScreen({ onYes }: QuestionScreenProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noAttempts, setNoAttempts] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const noMessages = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you crazy?",
    "Think about it!",
    "Come on, say yes!",
    "Please?",
    "Pretty please?",
  ];

  const moveNoButton = useCallback(() => {
    if (!containerRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const buttonWidth = 120;
    const buttonHeight = 50;
    const padding = 20;

    const maxX = container.width - buttonWidth - padding;
    const maxY = container.height - buttonHeight - padding;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    setNoButtonPosition({ x: newX, y: newY });
    setNoAttempts((prev) => Math.min(prev + 1, noMessages.length - 1));
  }, [noMessages.length]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Floating hearts and sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <Heart
            key={`heart-${i}`}
            className="absolute text-primary/20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 35 + 15}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
            fill="currentColor"
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <Sparkles
            key={`sparkle-${i}`}
            className="absolute text-accent/30 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 10}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 1}s`,
            }}
          />
        ))}
      </div>

      <div
        ref={containerRef}
        className="relative z-10 flex flex-col items-center w-full max-w-lg min-h-[500px]"
      >
        {/* Big Heart */}
        <div className="mb-6">
          <Heart
            className="w-24 h-24 text-primary animate-pulse"
            fill="currentColor"
            style={{ animationDuration: "1s" }}
          />
        </div>

        {/* Question */}
        <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4 text-center text-balance">
          Tenesha...
        </h1>
        <h2 className="text-2xl md:text-3xl font-serif text-primary mb-12 text-center">
          Will You Be My Valentine?
        </h2>

        {/* Buttons Container */}
        <div className="relative w-full h-40">
          {/* Yes Button - stays in place */}
          <button
            onClick={onYes}
            className="absolute left-1/2 -translate-x-1/2 top-0 px-12 py-4 bg-primary text-primary-foreground rounded-full font-bold text-xl shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center gap-2 z-10"
          >
            <Heart className="w-6 h-6" fill="currentColor" />
            YES!
            <Heart className="w-6 h-6" fill="currentColor" />
          </button>

          {/* No Button - moves away */}
          <button
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            onClick={moveNoButton}
            className="absolute px-8 py-3 bg-muted text-muted-foreground rounded-full font-semibold text-lg shadow-md transition-all duration-200 hover:bg-muted"
            style={{
              left: noAttempts === 0 ? "50%" : noButtonPosition.x,
              top: noAttempts === 0 ? "80px" : noButtonPosition.y,
              transform: noAttempts === 0 ? "translateX(-50%)" : "none",
            }}
          >
            {noMessages[noAttempts]}
          </button>
        </div>

        {noAttempts > 2 && (
          <p className="text-muted-foreground italic mt-8 animate-pulse">
            Just say yes already!
          </p>
        )}
      </div>
    </div>
  );
}
