"use client";

import { useEffect, useState } from "react";

export default function AnimatedCursor({ className }: { className?: string }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setLinkHovered(true);
      }
    };

    const handleLinkHoverEnd = () => setLinkHovered(false);

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleLinkHoverStart);
    document.addEventListener("mouseout", handleLinkHoverEnd);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleLinkHoverStart);
      document.removeEventListener("mouseout", handleLinkHoverEnd);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 transition-all duration-100 ${
          visible ? "opacity-100" : "opacity-0"
        } ${clicked ? "scale-75" : "scale-100"} ${
          linkHovered ? "scale-150 bg-primary/30" : "bg-primary/50"
        } ${className ? className : ""}`}
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
          mixBlendMode: "hard-light",
        }}
      />

      {/* Trailing dot */}
      <div
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-50 transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translate(${position.x - 1}px, ${position.y - 1}px)`,
          transition: "transform 0.15s ease-out",
        }}
      />
    </>
  );
}