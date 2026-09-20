import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { getBlogPostBySlug, blogPosts, medicalDisclaimer } from "@/data/clinic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="pt-28">
        <div className="section-padding container-narrow max-w-3xl">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy"
          >
            <ArrowLeft className="h-4 w-4" />
            All Articles
          </Link>

          <span className="text-sm font-semibold uppercase tracking-wider text-aqua">
            {post.category}
          </span>
          <h1 className="mt-3 font-heading text-4xl font-medium text-navy md:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>{post.author}</span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          <div className="prose prose-navy mt-10 max-w-none">
            {post.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return (
                  <p key={i} className="font-medium text-navy">
                    {paragraph.replace(/\*\*/g, "")}
                  </p>
                );
              }
              if (paragraph.startsWith("**")) {
                const [heading, ...rest] = paragraph.split("**\n");
                return (
                  <div key={i}>
                    <h2 className="font-heading text-xl font-medium text-navy">
                      {heading.replace(/\*\*/g, "")}
                    </h2>
                    {rest.length > 0 && (
                      <p className="mt-2 text-muted-foreground">{rest.join("")}</p>
                    )}
                  </div>
                );
              }
              return (
                <p key={i} className="leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              );
            })}
          </div>

          <div className="mt-10 rounded-xl border border-border bg-cream p-6">
            <p className="text-sm italic text-muted-foreground">
              {medicalDisclaimer}
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
