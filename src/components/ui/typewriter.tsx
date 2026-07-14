"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  texts: string[];
  delay?: number;
  pause?: number;
  className?: string;
}

export function Typewriter({
  texts,
  delay = 100,
  pause = 2000,
  className = "",
}: TypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[currentTextIndex];
    let timeout: ReturnType<typeof setTimeout>;

    const typingSpeed = isDeleting ? delay / 2 : delay;

    if (!isDeleting) {
      if (currentText === fullText) {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }, typingSpeed);
      }
    } else {
      if (currentText === "") {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }, delay);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, delay, pause]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="ml-0.5 inline-block w-0.5 h-4 bg-primary align-middle"
      />
    </span>
  );
}
