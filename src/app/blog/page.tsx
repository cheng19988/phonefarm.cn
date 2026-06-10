import Link from "next/link";
import { PageBanner, SectionHeader } from "@/components/site-sections";
import { BLOG_POSTS } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";
import { IMAGES } from "@/lib/images";

export const metadata = buildMetadata({
  title: "Technical Articles",
  description: "Phone farm hardware notes - OTG setup, motherboard box comparison, automation API and enterprise deployment.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageBanner
        title="Technical Articles"
        subtitle="Supplementary guides — primary setup reference is the Installation Manual."
        image={IMAGES.deck.slide2}
      />
      <section className="section">
        <div className="container-wide">
          <SectionHeader
            title="Hardware guides"
            subtitle="Supplementary notes — see the Installation Manual for the primary setup reference."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-flat hover:border-cyan-500/30 transition-all block h-full"
              >
                <span className="text-xs text-cyan-400/90 uppercase tracking-wide font-semibold">{post.category}</span>
                <span className="text-xs text-slate-600 ml-2">{post.date}</span>
                <h2 className="font-bold text-white text-lg mt-3 mb-2 leading-snug">{post.title}</h2>
                <p className="text-sm text-slate-500 leading-relaxed">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
