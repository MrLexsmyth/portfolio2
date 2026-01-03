"use client";

import { motion } from "framer-motion";
import {
  ReactNode,
  ReactElement,
  isValidElement,
  cloneElement,
} from "react";

interface AnimatedTextProps {
  children: ReactNode;
}

export default function AnimatedText({ children }: AnimatedTextProps) {
  const animateText = (text: string) =>
    text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 10 }}        // start hidden and slightly below
        animate={{ opacity: 1, y: 0 }}         // fade in and move up
        transition={{
          delay: index * 0.03,                 // stagger letters
          duration: 0.4,
          type: "spring",
          stiffness: 500,
          damping: 12,
        }}
        whileHover={{
          y: -10,
          color: "#FFD700",
        }}
        className="inline-block cursor-pointer"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));

  const renderNode = (node: ReactNode): ReactNode => {
    // Plain text → animate letters
    if (typeof node === "string") {
      return animateText(node);
    }

    // Array → recurse
    if (Array.isArray(node)) {
      return node.map((child, index) => (
        <span key={index}>{renderNode(child)}</span>
      ));
    }

    // React element → clone safely WITH proper typing
    if (isValidElement(node)) {
      const element = node as ReactElement<{ children?: ReactNode }>;

      return cloneElement(element, {
        children: renderNode(element.props.children),
      });
    }

    return node;
  };

  return <div className="text-white">{renderNode(children)}</div>;
}
