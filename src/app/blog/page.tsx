import Hero  from "@/components/Hero";
import { BlogsPage } from "@/components/BlogsPage";
import { getMediumPosts } from '@/lib/data/medium';
import { ContactForm } from "@/components/ContactForm";

export default async function BlogPage() {
     const blogs = await getMediumPosts();
  return (
    <>
      <Hero />
      <BlogsPage blogs={blogs} />
      <ContactForm />
    </>
  );
}
