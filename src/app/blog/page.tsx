import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Technical Articles",
  description: "Phone farm hardware notes - OTG setup, motherboard box comparison, automation API and enterprise deployment.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="section">
      <div className="container-wide">
        <h1 className="section-title">Technical Articles</h1>
        <p className="section-subtitle">
          Supplementary guides - primary setup reference is the{" "}
          <Link href="/manual" className="text-blue-400 hover:underline">Installation Manual</Link>.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card-flat hover:border-blue-800 transition-colors block">
              <span className="text-[10px] text-blue-400 uppercase tracking-wide">{post.category}</span>
              <span className="text-[10px] text-slate-600 ml-2">{post.date}</span>
              <h2 className="font-medium text-white text-sm mt-2">{post.title}</h2>
              <p className="text-xs text-slate-500 mt-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
