'use client';

import Link from 'next/link';
import Image from 'next/image';

type Project = {
  id: string;
  name: string;
  imageUrl: string;
  link: string;
  alt: string;
};

const projects: Project[] = [
    {
        id: 'oml-42-upgrade',
        name: 'OML 42 Facility Upgrade – Ecomorph/Nestoil',
        imageUrl: '/projects/project22.jpeg',
        link: '/projects/oml-42-upgrade',
        alt: 'OML 42 Facility upgrade at Odidi/Egwa/Jones Creek',
      },
      {
        id: 'olero-demolition',
        name: 'Olero Creek Facility Demolition – Ecomorph/Chevron',
        imageUrl: '/projects/project28.jpeg',
        link: '/projects/olero-demolition',
        alt: 'Demolition works at Olero Creek facility location',
      },
      {
        id: 'oml-86-88-upgrade',
        name: 'OML 86/88 Offshore Facilities Upgrade – Ecomorph/Pioneer/NEPL',
        imageUrl: '/projects/project21.jpeg',
        link: '/projects/oml-86-88-upgrade',
        alt: 'Offshore facilities upgrade at Funiwa and North Apoi',
      },
];

export default function ProjectsSection() {
  return (
    <section className="py-16 lg:px-16 bg-white w-full">
      <div className="max-w-8xl mx-auto sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">View Our Work</h2>
          <Link href="/projects" className="text-sm font-medium text-gray-700 underline hover:text-black inline-flex items-center gap-1">
            VIEW MORE <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="md:w-2/3 space-y-6">
          {projects.map(project => (
            <Link href={project.link} key={project.id} className="block group overflow-hidden relative">
              <div className="relative w-full h-[360px] md:h-[450px]">
                <Image
                  src={project.imageUrl}
                  alt={project.alt}
                  fill
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.33,0.02,0,0.93)]"
                />
                
                {/* Luxury Classic Filter Overlay - Choose one of these options */}
                
                {/* Option 1: Warm Sepia Luxury Filter */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-amber-800/15 to-amber-700/10 mix-blend-multiply opacity-60 group-hover:opacity-40 transition-opacity duration-1000"></div>
                
                {/* Option 2: Rich Bronze/Gold Filter - Uncomment to use instead */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/25 via-amber-900/20 to-orange-900/15 mix-blend-multiply opacity-70 group-hover:opacity-50 transition-opacity duration-1000"></div> */}
                
                {/* Option 3: Deep Chocolate Luxury Filter - Uncomment to use instead */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-yellow-900/20 to-orange-800/15 mix-blend-overlay opacity-50 group-hover:opacity-30 transition-opacity duration-1000"></div> */}
                
                {/* Option 4: Vintage Film Filter - Uncomment to use instead */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-amber-800/25 via-yellow-800/15 to-orange-700/20 mix-blend-soft-light opacity-60 group-hover:opacity-40 transition-opacity duration-1000"></div> */}
                
                {/* Option 5: Classic Warm Overlay - Uncomment to use instead */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-yellow-900/15 to-orange-900/10 mix-blend-color-burn opacity-40 group-hover:opacity-25 transition-opacity duration-1000"></div> */}
                
                {/* Subtle Vignette Effect for added luxury */}
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20 opacity-30 group-hover:opacity-20 transition-opacity duration-1000"></div>
              </div>
              
              {/* Project Name Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-white text-lg font-semibold leading-tight">
                  {project.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(ellipse at center, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
}
