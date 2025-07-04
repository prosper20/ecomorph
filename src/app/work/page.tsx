import { Card, CardContent } from '@/components/ui/Card';
import React from 'react';
import { projectsData } from '@/lib/data/projects'
import Image from 'next/image';

const Work = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50"> {/* Changed to match previous bg */}
        {/* Projects Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {projectsData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-20">
                {/* Category Header */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Our Projects
                  </h2>
                  <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-8">
                  {category.projects.map((project) => (
                    <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0">
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-3 gap-0 h-full">
                          {/* Image Gallery - Now takes 2/3 of width */}
                          <div className="md:col-span-2 grid grid-cols-2 gap-1 p-1 bg-gray-100">
                            {project.images.map((image, imageIndex) => (
                              <div
                                key={imageIndex}
                                className={`relative w-full h-64 overflow-hidden group cursor-pointer transition-all duration-300 ${
                                  project.images.length === 1 ? 'col-span-2' :
                                  project.images.length === 3 && imageIndex === 0 ? 'col-span-2' : ''
                                }`}
                              >
                                <Image
                                  src={image}
                                  alt={`${project.title} - Image ${imageIndex + 1}`}
                                  fill
                                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                  priority={imageIndex === 0}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                  <span className="text-white font-medium text-sm">
                                    View Project
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Project Info - Now takes 1/3 of width */}
                          <div className="p-6 flex flex-col justify-center bg-white">
                            <div className="mb-4">
                              <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                                {project.title}
                              </h3>
                              <p className="text-gray-600 mb-3 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {project.location}
                              </p>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                              {project.description}
                            </p>
                            <button className="mt-6 self-start inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium">
                              View Details
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Work;