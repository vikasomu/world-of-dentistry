import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 pt-28 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-aqua">
        404
      </p>
      <h1 className="mt-4 font-heading text-4xl font-medium text-navy">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Return Home</Link>
      </Button>
    </section>
  );
}
