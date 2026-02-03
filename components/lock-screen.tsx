"use client";

import { useState } from "react";
import { Heart, Lock, Unlock } from "lucide-react";

interface LockScreenProps {
  onUnlock: () => void;
}

export function LockScreen({ onUnlock }: LockScreenProps) {
  const [date, setDate] = useState({ day: "", month: "", year: "" });
  const [error, setError] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);

  const correctDate = { day: "18", month: "07", year: "2024" };

  const handleSubmit = () => {
    if (
      date.day === correctDate.day &&
      date.month === correctDate.month &&
      date.year === correctDate.year
    ) {
      setIsUnlocking(true);
      setError(false);
      setTimeout(() => {
        onUnlock();
      }, 1500);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 30 + 15}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Lock Icon */}
        <div
          className={`mb-8 transition-all duration-700 ${isUnlocking ? "scale-125 rotate-12" : ""
            }`}
        >
          <div className="w-32 h-32 rounded-full bg-card shadow-xl flex items-center justify-center border-4 border-primary/30">
            {isUnlocking ? (
              <Unlock className="w-16 h-16 text-primary animate-bounce" />
            ) : (
              <Lock className="w-16 h-16 text-primary" />
            )}
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-2 text-center text-balance">
          Hii Chutiii
        </h1>
        <p className="text-muted-foreground text-lg mb-8 text-center">
          Enter our special date to unlock
        </p>

        {/* Date Input */}
        <div className="flex gap-3 mb-6">
          <div className="flex flex-col items-center">
            <input
              type="text"
              maxLength={2}
              placeholder="DD"
              value={date.day}
              onChange={(e) =>
                setDate({ ...date, day: e.target.value.replace(/\D/g, "") })
              }
              className={`w-16 h-16 text-center text-2xl font-serif bg-card border-2 rounded-xl focus:outline-none focus:border-primary transition-all ${error
                ? "border-destructive animate-shake"
                : "border-border"
                }`}
            />
            <span className="text-xs text-muted-foreground mt-1">Day</span>
          </div>
          <span className="text-3xl text-primary self-start mt-3">/</span>
          <div className="flex flex-col items-center">
            <input
              type="text"
              maxLength={2}
              placeholder="MM"
              value={date.month}
              onChange={(e) =>
                setDate({ ...date, month: e.target.value.replace(/\D/g, "") })
              }
              className={`w-16 h-16 text-center text-2xl font-serif bg-card border-2 rounded-xl focus:outline-none focus:border-primary transition-all ${error
                ? "border-destructive animate-shake"
                : "border-border"
                }`}
            />
            <span className="text-xs text-muted-foreground mt-1">Month</span>
          </div>
          <span className="text-3xl text-primary self-start mt-3">/</span>
          <div className="flex flex-col items-center">
            <input
              type="text"
              maxLength={4}
              placeholder="YYYY"
              value={date.year}
              onChange={(e) =>
                setDate({ ...date, year: e.target.value.replace(/\D/g, "") })
              }
              className={`w-20 h-16 text-center text-2xl font-serif bg-card border-2 rounded-xl focus:outline-none focus:border-primary transition-all ${error
                ? "border-destructive animate-shake"
                : "border-border"
                }`}
            />
            <span className="text-xs text-muted-foreground mt-1">Year</span>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <p className="text-destructive mb-4 animate-pulse">
            That&apos;s not quite right... Try again!
          </p>
        )}

        {/* Unlock Button */}
        <button
          onClick={handleSubmit}
          disabled={isUnlocking}
          className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 disabled:opacity-50"
        >
          {isUnlocking ? (
            <>
              <Heart className="w-5 h-5 animate-pulse" fill="currentColor" />
              Unlocking...
            </>
          ) : (
            <>
              <Heart className="w-5 h-5" />
              Unlock My Heart
            </>
          )}
        </button>

        <p className="text-sm text-muted-foreground mt-6 italic">
          Hint: When did we become &quot;us&quot;?
        </p>
      </div>
    </div>
  );
}
