import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils/cn";

interface OptimizedImageProps extends Omit<ImageProps, "alt"> {
  alt: string;
  wrapperClassName?: string;
  priority?: boolean;
}

export function OptimizedImage({
  className,
  wrapperClassName,
  priority = false,
  fill,
  sizes,
  ...props
}: OptimizedImageProps) {
  if (fill) {
    return (
      <div className={cn("relative overflow-hidden", wrapperClassName)}>
        <Image
          {...props}
          fill
          priority={priority}
          sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
          className={cn("object-cover", className)}
        />
      </div>
    );
  }

  return (
    <Image
      {...props}
      priority={priority}
      className={cn("object-cover", className)}
    />
  );
}

interface DoctorPortraitProps {
  initials: string;
  name: string;
  placeholder?: boolean;
  className?: string;
}

export function DoctorPortrait({
  initials,
  name,
  placeholder = true,
  className,
}: DoctorPortraitProps) {
  return (
    <div
      className={cn(
        "relative flex items-end justify-center overflow-hidden bg-gradient-to-br from-navy via-navy-light to-aqua/80",
        className
      )}
      role="img"
      aria-label={`${name}${placeholder ? " — official photograph pending clinic approval" : ""}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.15),transparent_55%)]" />
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent" />
      <span className="relative mb-8 font-heading text-6xl font-medium tracking-tight text-white/90 md:text-7xl">
        {initials}
      </span>
      {placeholder && (
        <span className="absolute bottom-3 left-3 rounded-full bg-white/15 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm">
          Official photo pending
        </span>
      )}
    </div>
  );
}
