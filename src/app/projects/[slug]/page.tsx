// app/projects/[slug]/page.tsx
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/data/projects';
import { ContactForm } from '@/components/ContactForm';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `Project: ${project.slug}`,
    description: project.description,
    openGraph: {
      title: `Project: ${project.slug}`,
      description: project.description,
      images: [{ url: project.image, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Project: ${project.slug}`,
      description: project.description,
      images: [project.image],
    },
  };
}

const ProjectDetailPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <>
    <div className="max-w-5xl mx-auto md:pt-12">
      {/* Image */}
      <div className="w-full relative aspect-[4/3] md:aspect-[16/9] mb-8 mt-[6rem] overflow-hidden">
        <Image
          src={project.image}
          alt={project.slug}
          fill
          className="object-cover md:hidden"
        />
        <Image
          src={project.largeImage}
          alt={project.slug}
          fill
          className="object-cover hidden md:block"
        />
      </div>

      {/* Logo */}
      <div className="mb-6 px-4">
        <Image src={project.logo} alt={project.slug} width={120} height={40} />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mb-6 px-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-zinc-800 text-white text-sm px-4 py-1.5 rounded-full cursor-pointer hover:bg-zinc-700 transition"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <div className="text-zinc-200 space-y-5 text-base leading-relaxed px-4">
        <p>{project.description}</p>
        <p>{project.description2}</p>
      </div>

      {/* Live Link */}
      {project.liveUrl && (
        <div className="mt-10 px-4 pb-12">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-bold text-white transition-transform duration-200 hover:scale-105"
          >
            Visit Site
          </a>
        </div>
      )}
    </div>
    <ContactForm />
    </>
  );
};

export default ProjectDetailPage;

// theme: {
//   extend: {
//     colors: {
//       zinc: {
//         800: '#1f1f1f',
//         700: '#2b2b2b',
//         200: '#e5e5e5',
//       },
//     },
//   },
// }
