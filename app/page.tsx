"use client";

import { useState } from "react";
import { LockScreen } from "@/components/lock-screen";
import { VideoScreen } from "@/components/video-screen";
import { MemoriesScreen } from "@/components/memories-screen";
import { QuestionScreen } from "@/components/question-screen";
import { FinalScreen } from "@/components/final-screen";

type Screen = "lock" | "video" | "memories" | "question" | "final";

export default function ValentinesPage() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("lock");

  const handleUnlock = () => {
    setCurrentScreen("video");
  };

  const handleVideoNext = () => {
    setCurrentScreen("memories");
  };

  const handleMemoriesNext = () => {
    setCurrentScreen("question");
  };

  const handleYes = () => {
    setCurrentScreen("final");
  };

  return (
    <main className="min-h-screen">
      {currentScreen === "lock" && <LockScreen onUnlock={handleUnlock} />}
      {currentScreen === "video" && <VideoScreen onNext={handleVideoNext} />}
      {currentScreen === "memories" && <MemoriesScreen onNext={handleMemoriesNext} />}
      {currentScreen === "question" && <QuestionScreen onYes={handleYes} />}
      {currentScreen === "final" && <FinalScreen />}
    </main>
  );
}
