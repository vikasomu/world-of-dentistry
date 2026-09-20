"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { blogPosts } from "@/data/clinic";
import { getBlogImage } from "@/data/images";
import { trackEvent } from "@/lib/utils/analytics";

export function BlogPreview() {
  const shouldReduceMotion = useReducedMotion();
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="section-padding bg-cream">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Resources"
          title="Dental knowledge center"
          description="Educational articles to help you understand your oral health better."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, index) => {
            const image = getBlogImage(post.slug);
            return (
              <motion.article
                key={post.slug}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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
                  <h3 className="mt-2 font-heading text-lg font-medium text-navy group-hover:text-aqua">
                    <Link
                      href={`/blog/${post.slug}`}
                      onClick={() =>
                        trackEvent("blog_opened", { slug: post.slug })
                      }
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 font-medium text-aqua"
                    >
                      Read
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-aqua hover:text-navy"
          >
            View all articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
