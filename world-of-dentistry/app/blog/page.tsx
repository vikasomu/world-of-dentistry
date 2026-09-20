import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { blogPosts } from "@/data/clinic";

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
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white"
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-aqua-light to-secondary" />
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
          ))}
        </div>
      </div>
    </section>
  );
}
