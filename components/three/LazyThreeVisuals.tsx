"use client";

import dynamic from "next/dynamic";
import { useThreeEnabled } from "@/lib/hooks/use-three-enabled";
import { cn } from "@/lib/utils/cn";

const HeroToothScene = dynamic(
  () => import("./HeroToothScene").then((m) => m.HeroToothScene),
  { ssr: false, loading: () => null }
);

const TechnologyScanScene = dynamic(
  () => import("./TechnologyScanScene").then((m) => m.TechnologyScanScene),
  { ssr: false, loading: () => null }
);

export function HeroVisual3D({ className }: { className?: string }) {
  const enabled = useThreeEnabled();

  if (!enabled) {
    return <HeroVisualFallback className={className} />;
  }

  return (
    <div className={cn("relative overflow-hidden rounded-3xl", className)}>
      <HeroToothScene className="absolute inset-0 h-full w-full bg-gradient-to-br from-aqua-light/80 via-white to-secondary" />
      <HeroVisualOverlay />
    </div>
  );
}

export function TechnologyVisual3D({
  progress = 0,
  className,
}: {
  progress?: number;
  className?: string;
}) {
  const enabled = useThreeEnabled({ allowMobile: false });

  if (!enabled) {
    return <TechnologyVisualFallback className={className} />;
  }

  return (
    <TechnologyScanScene
      progress={progress}
      className={cn("h-full w-full", className)}
    />
  );
}

function HeroVisualFallback({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-aqua-light via-white to-secondary",
        className
      )}
      aria-hidden
    >
      <svg viewBox="0 0 200 240" className="h-2/3 w-2/3 text-navy/15">
        <path
          d="M100 20 C130 20 160 50 160 90 C160 130 140 180 100 220 C60 180 40 130 40 90 C40 50 70 20 100 20 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
      <HeroVisualOverlay />
    </div>
  );
}

function TechnologyVisualFallback({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-2xl bg-navy/5",
        className
      )}
      aria-hidden
    >
      <svg viewBox="0 0 120 140" className="h-32 w-32 text-aqua/40">
        <ellipse cx="60" cy="55" rx="35" ry="42" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M40 95 Q60 120 80 95" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function HeroVisualOverlay() {
  return (
    <>
      <div className="pointer-events-none absolute left-6 top-8 rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm">
        <p className="text-xs font-medium text-muted-foreground">Technology</p>
        <p className="text-sm font-semibold text-navy">CBCT · CAD/CAM</p>
      </div>
      <div className="pointer-events-none absolute bottom-20 right-6 rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm">
        <p className="text-xs font-medium text-muted-foreground">Care</p>
        <p className="text-sm font-semibold text-navy">Comfort-Focused</p>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent p-6">
        <p className="font-heading text-lg font-medium text-white">Precision dental care</p>
        <p className="text-sm text-white/75">Modern technology · Experienced team</p>
      </div>
    </>
  );
}
