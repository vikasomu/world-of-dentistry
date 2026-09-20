"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

function detectWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

function computeThreeEnabled(allowMobile?: boolean): boolean {
  const mobile = window.matchMedia("(max-width: 768px)").matches;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  if (mobile && coarse && !allowMobile) return false;
  return detectWebGL();
}

export function useThreeEnabled(options?: { allowMobile?: boolean }) {
  const reducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;

    const frame = requestAnimationFrame(() => {
      setEnabled(computeThreeEnabled(options?.allowMobile));
    });

    return () => cancelAnimationFrame(frame);
  }, [reducedMotion, options?.allowMobile]);

  return !reducedMotion && enabled;
}
