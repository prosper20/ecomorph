// import { notFound } from 'next/navigation';
// import { getMediumPost } from '@/lib/data/medium';
// import parse from 'html-react-parser';
// import Hero  from '@/components/Hero';
// import { ContactForm } from '@/components/ContactForm';

// interface PageProps {
//   params: Promise<{ slug: string }>;
// }

// function extractFirstImage(html: string) {
//   const match = html.match(/<img[^>]+src="([^">]+)"/);
//   return match?.[1] ?? null;
// }

// export async function generateMetadata({ params }: PageProps) {
//   const { slug } = await params;
//   const post = await getMediumPost(slug);
//   if (!post) return {};

//   return {
//     title: post.title,
//     description: post.description.replace(/<[^>]*>/g, '').slice(0, 160),
//     openGraph: {
//       title: post.title,
//       description: post.description,
//       images: [{ url: extractFirstImage(post.content) ?? '', width: 1200, height: 630 }],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: post.title,
//       description: post.description,
//       images: [extractFirstImage(post.content) ?? ''],
//     },
//   };
// }

// const BlogDetailPage = async ({ params }: PageProps) => {
//   const { slug } = await params;
//   const post = await getMediumPost(slug);
//   if (!post) return notFound();

//   const formattedDate = new Date(post.pubDate).toLocaleDateString('en-US', {
//   year: 'numeric',
//   month: 'short',
//   day: 'numeric',
// });

// const estimateReadTime = () => {
//     const words = post.content.replace(/<[^>]*>/g, "").split(/\s+/).length;
//     const minutes = Math.ceil(words / 200);
//     return `${minutes} min`;
//   };

//   return (
//     <>
//     <Hero />
//     <article className="max-w-3xl mx-auto px-4 pb-16">
//       <div className="prose prose-invert max-w-none">{parse(post.content)}</div>
//     </article>
//     <ContactForm />
//     </>
    
//   );
// };

// export default BlogDetailPage;

