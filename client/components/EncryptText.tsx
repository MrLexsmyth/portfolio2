// EncryptText.tsx
import React, { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

const scrambleText = (target: string, progress: number): string => {
  return target
    .split("")
    .map((char, i) => {
      if (i < progress) return char;
      return characters[Math.floor(Math.random() * characters.length)];
    })
    .join("");
};

interface EncryptTextProps {
  text: string;
  duration?: number;
  className?: string;
}

const EncryptText: React.FC<EncryptTextProps> = ({
  text,
  duration = 1500,
  className,
}) => {
  const [displayText, setDisplayText] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const totalSteps = text.length;
    const intervalTime = duration / totalSteps;

    const id = window.setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next > totalSteps) {
          clearInterval(id);
          return totalSteps;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(id);
  }, [text, duration]);

  useEffect(() => {
    setDisplayText(scrambleText(text, progress));
  }, [progress, text]);

  return (
    <Motion.h1
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: "easeInOut" }}
    >
      {displayText}
    </Motion.h1>
  );
};

export default EncryptText;
