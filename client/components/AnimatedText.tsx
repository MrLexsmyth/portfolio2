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
        initial={{ opacity: 0, y: 10 }}        
        animate={{ opacity: 1, y: 0 }}         
        transition={{
          delay: index * 0.03,               
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
    
    if (typeof node === "string") {
      return animateText(node);
    }


    if (Array.isArray(node)) {
      return node.map((child, index) => (
        <span key={index}>{renderNode(child)}</span>
      ));
    }

    
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
