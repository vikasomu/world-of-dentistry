import { cn } from "@/lib/utils/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export function Container({ children, className, narrow = true }: ContainerProps) {
  return (
    <div className={cn(narrow ? "container-narrow" : "mx-auto max-w-[1400px]", className)}>
      {children}
    </div>
  );
}
