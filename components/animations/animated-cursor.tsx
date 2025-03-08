"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedCursor({ className }: { className?: string }) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-[40px] h-[40px] rounded-full bg-[#1abc9c] pointer-events-none z-[99999999] "
        ref={cursorRef}
      />
      <div
        className="fixed top-0 left-0 w-[5px] h-[5px] rounded-full bg-white pointer-events-none z-[99999999]  "
        ref={dotRef}
      />
    </>
  );
}
