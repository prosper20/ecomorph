'use client';

import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/lib/data/blogs";

interface DoubleBlogRowProps {
  blogs: Blog[];
}

export const DoubleBlogRow = ({ blogs }: DoubleBlogRowProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 py-10">
      {blogs.map((blog) => (
        <div key={blog.id} className="w-full md:w-1/2 flex flex-col gap-4">
          <Link href={`/blog/${blog.id}`} className="relative group overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              width={800}
              height={400}
              className="w-full h-[240px] object-cover"
            />
            {/* Shine effect */}
            <div className="absolute inset-0 group-hover:before:animate-shine before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.3),transparent)] before:w-full before:h-full before:translate-x-[-100%] group-hover:before:translate-x-[100%] before:transition-transform before:duration-[1200ms] before:skew-x-[-20deg]" />
          </Link>
          <div>
            <p className="text-sm text-muted-foreground uppercase font-medium mb-1">{blog.category}</p>
            <Link href={`/blog/${blog.id}`}>
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            </Link>
            <p className="text-muted-foreground text-sm line-clamp-2">{blog.description}</p>
            <p className="text-xs text-muted-foreground mt-1">{blog.date} • {blog.readTime} read</p>
          </div>
        </div>
      ))}
    </div>
  );
};
