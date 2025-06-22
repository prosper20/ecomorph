/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/data/medium.ts
import { Blog } from './blogs'; // same interface

export async function getMediumPosts(): Promise<Blog[]> {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bubstack",
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch Medium posts");

  const data = await res.json();

  const extractFirstImage = (html: string) => {
    const match = html.match(/<img[^>]+src="([^">]+)"/);
    return match?.[1] ?? "/default-blog.jpg"; // fallback image
  };

  const estimateReadTime = (content: string) => {
    const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min`;
  };

  return data.items.map((item: any) => ({
    id: item.guid.split('/').pop() || item.guid,
    title: item.title,
    date: new Date(item.pubDate).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
}),
    category: item.categories[0] || "General",
    image: extractFirstImage(item.content),
    description: item.description.replace(/<[^>]*>/g, "").slice(0, 200),
    readTime: estimateReadTime(item.content),
  }));
}

export async function getMediumPost(slug: string) {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bubstack",
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch Medium posts");

  const data = await res.json();

  const post = data.items.find((item: any) =>
    item.guid.includes(slug)
  );

  return post ?? null;
}

// export async function getMediumPost() {
//   const res = await fetch(
//     "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bubstack",
//     { cache: "no-store" }
//   );
//   if (!res.ok) throw new Error("Failed to fetch Medium posts");

//   const data = await res.json();
//   return data.items;
// }