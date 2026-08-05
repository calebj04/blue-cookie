"use client";

import { useEffect, useState } from "react";

const messages = [
  "Gathering inspiration...",
  "Connecting ideas...",
  "Researching possibilities...",
  "Designing milestones...",
  "Creating GitHub issues...",
  "Adding finishing touches...",
];

export default function LoadingScreen() {
  const [index, setIndex] = useState(6);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((i) => (i + 1) % messages.length);
        setVisible(true);
      }, 350);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center  px-6">
      <div className="flex flex-col items-center gap-8">
        {/* Message */}
        <div className="h-8">
          <p
            className={`text-center text-3xl font-semibold text-white transition-all duration-300 ${
              visible ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
            }`}
          >
            {messages[index]}
          </p>
        </div>
      </div>
    </div>
  );
}
