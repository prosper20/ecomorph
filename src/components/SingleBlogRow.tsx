'use client';

import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/lib/data/blogs";
import { cn } from "@/lib/utils";

interface SingleBlogRowProps {
  blog: Blog;
  reverse?: boolean;
}

export const SingleBlogRow = ({ blog, reverse = false }: SingleBlogRowProps) => {
  return (
    <div className={cn("flex flex-col md:flex-row gap-6 py-10", reverse && "md:flex-row-reverse")}>
      <Link href={`/blog/${blog.id}`} className="relative w-full md:w-2/3 group overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          width={1200}
          height={600}
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 pointer-events-none" />
        {/* Shine effect */}
        <div className="absolute inset-0 group-hover:before:animate-shine before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.3),transparent)] before:w-full before:h-full before:translate-x-[-100%] group-hover:before:translate-x-[100%] before:transition-transform before:duration-[1200ms] before:skew-x-[-20deg]" />
      </Link>
      <div className="flex flex-col justify-center w-full md:w-1/3">
        <p className="text-sm text-muted-foreground uppercase font-medium mb-2">{blog.category}</p>
        <Link href={`/blog/${blog.id}`}>
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">{blog.title}</h2>
        </Link>
        <p className="text-muted-foreground mb-4 line-clamp-3">{blog.description}</p>
        <p className="text-xs text-muted-foreground">{blog.date} • {blog.readTime} read</p>
      </div>
    </div>
  );
};
