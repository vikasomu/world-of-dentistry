import { OptimizedImage } from "@/components/ui/optimized-image";
import { getTreatmentImage } from "@/data/images";

export function TreatmentHeroImage({ slug, alt }: { slug: string; alt: string }) {
  const image = getTreatmentImage(slug);
  return (
    <div className="absolute inset-0">
      <OptimizedImage
        src={image.src}
        alt={alt || image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />
    </div>
  );
}
