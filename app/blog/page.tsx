import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { blogPosts } from "@/data/clinic";
import { getBlogImage, siteImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Dental Knowledge Center",
  description:
    "Educational articles about dental health, implants, root canals, aligners, and more from World of Dentistry.",
  alternates: { canonical: "/blog" },
};

const categories = [
  "Dental Health",
  "Implants",
  "Root Canal",
  "Aligners",
  "Cosmetic Dentistry",
  "Children's Dentistry",
  "Oral Hygiene",
];

export default function BlogPage() {
  return (
    <section className="pt-28">
      <div className="section-padding container-narrow">
        <SectionHeading
          eyebrow="Resources"
          title="Dental knowledge center"
          description="Evidence-informed articles for general education. Always consult a dentist for personal advice."
        />

        <div className="relative mb-12 aspect-[21/9] overflow-hidden rounded-3xl">
          <OptimizedImage
            src={siteImages.hero.secondary}
            alt={siteImages.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/50 to-transparent" />
          <div className="absolute inset-0 flex items-end p-8 md:p-10">
            <p className="max-w-xl text-sm leading-relaxed text-white/90 md:text-base">
              Practical guides on implants, preventive care, orthodontics, and everyday oral health — written for patients, not clinicians.
            </p>
          </div>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full bg-aqua-light px-4 py-1.5 text-xs font-medium text-navy"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => {
            const image = getBlogImage(post.slug);
            return (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-aqua">
                  {post.category}
                </span>
                <h2 className="mt-2 font-heading text-xl font-medium text-navy group-hover:text-aqua">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{post.author}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-aqua"
                >
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          );
          })}
        </div>
      </div>
    </section>
  );
}
