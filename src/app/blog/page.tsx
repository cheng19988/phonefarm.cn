import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "安装指南与技术文档",
  description: "广州手机农场安装手册、OTG 配置、主板盒选型、群控 API 及企业部署指南。",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="section">
      <div className="container-wide">
        <h1 className="section-title">安装指南与技术文档</h1>
        <p className="section-subtitle">手机农场硬件选型、部署教程、群控配置与企业批量部署最佳实践。</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card p-6 hover:border-emerald-800 transition-colors group">
              <span className="text-xs text-emerald-400">{post.category}</span>
              <span className="text-xs text-slate-500 ml-2">{post.date}</span>
              <h2 className="font-bold text-white mt-2 group-hover:text-emerald-400 transition-colors">{post.title}</h2>
              <p className="text-sm text-slate-400 mt-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
