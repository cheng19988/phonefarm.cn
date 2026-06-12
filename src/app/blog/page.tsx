import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";
import { JsonLd } from "@/components/shared";
import { buildMetadata, blogIndexJsonLd } from "@/lib/seo";
import { bannerProps } from "@/lib/banners";
import { PageBanner } from "@/components/site-sections";

export const metadata = buildMetadata({
  title: "Phone Farm Technical Articles & Setup Guides — Guangzhou Phone Farm",
  description:
    "46+ factory-written phone farm guides: motherboard box setup, OTG/LAN deployment, ADB authorization, cooling, export, procurement and WSAPI automation from Guangzhou.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd data={blogIndexJsonLd()} />
      <PageBanner
        title="Technical Articles & Phone Farm Knowledge Base"
        subtitle="46+ guides on setup, scaling, cooling, export and procurement — primary reference is still the Installation Manual."
        {...bannerProps("blog")}
      />
      <section className="section-compact section-alt border-b border-sky-400/12">
        <div className="container-wide max-w-3xl text-center">
          <p className="text-slate-400 text-base leading-relaxed">
            Topics include USB vs OTG/LAN mode, bot farm vs phone farm comparisons, device farming economics, motherboard box applications, game QA labs, export HS codes and factory lead times. Each article links to products, manual sections and RFQ contact.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container-wide">
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
