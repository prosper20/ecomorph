import Image from 'next/image'
import Link from 'next/link'
import { JSX } from 'react'

import { projects } from '@/lib/data/projects'

type Project = {
  slug: string
  image: string
  logo: string
  tags: string[]
  description: string
  description2: string
  liveUrl: string
}

interface Props{
  projectsCompleted?: Project[];
}


export const PortfolioSection: React.FC<Props> = ({projectsCompleted = projects}) => {
  return (
    <section className="bg-transparent !px-[5%] !pb-0 sm:!pb-6 lg:!pb-20 !pt-20 text-white space-y-20">
      {projectsCompleted.reduce((rows: JSX.Element[][], _, i) => {
        if (i % 2 === 0) {
          const first = projects[i]
          const second = projects[i + 1]
          if (second) {
            // Even row index = small left, big right
            rows.push([
              <div key={first.slug} className="w-full h-auto flex flex-col justify-start gap-4 !mt-11">
                <div className="flex items-center gap-1">
                  <Image src={first.logo} alt={`${first.slug} logo`} width={150} height={150} />
                  {/* <p className="text-3xl font-medium">{first.slug}</p> */}
                </div>
                <Link href={`/projects/${first.slug}`}>
                <div className='relative w-fit group'>
                  <Image src={first.image} alt={`${first.slug} screenshot`} width={700} height={400} priority className="!h-auto" />
                  <div className="group-hover:bg-black/40 transition-all duration-300 absolute inset-0 z-[!50] flex justify-center items-center">
                    <h1 className="opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 text-4xl w-[50px] h-[50px] flex justify-center items-center text-center rounded-full bg-blue-500">
                      +
                    </h1>
                  </div>
                </div>
                </Link>
                <div className="text-sm flex-wrap text-gray-300 flex gap-2 sm:gap-5 space-x-3">
                  {first.tags.map((s, i) => <span key={i}>{s}</span>)}
                </div>
              </div>,

              <div key={second.slug} className="w-full flex flex-col justify-end gap-4">
                <div className="flex items-center gap-3">
                  <Image src={second.logo} alt={`${second.slug} logo`} width={150} height={150}/>
                  {/* <p className="text-lg font-medium">{second.slug}</p> */}
                </div>
                <Link href={`/projects/${second.slug}`}>
                <div className='relative w-fit group'>
                  <Image src={second.image} alt={`${second.slug} screenshot`} width={800} height={500} priority className="!h-auto !w-auto" />
                  <div className="group-hover:bg-black/40 transition-all duration-300 absolute inset-0 !z-[50] flex justify-center items-center">
                    <h1 className="opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 text-4xl w-[50px] h-[50px] flex justify-center items-center text-center rounded-full bg-blue-500">
                      +
                    </h1>
                  </div>
                </div>
                </Link>
                <div className="text-sm flex-wrap text-gray-300 flex gap-2 sm:gap-5 space-x-3">
                  {second.tags.map((s, i) => <span key={i}>{s}</span>)}
                </div>
              </div>
            ])
          } else {
            // Odd last item (no pair)
            rows.push([
              <div key={first.slug} className="w-full md:w-full flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Image src={first.logo} alt={`${first.slug} logo`} width={150} height={150}/>
                  {/* <p className="text-lg font-medium">{first.slug}</p> */}
                </div>
                <Link href={`/projects/${first.slug}`}>
                <div className='relative md:w-[48%] group'>
                  <Image src={first.image} alt={`${first.slug} screenshot`} width={800} height={500} priority className="!h-auto" />
                  <div className="group-hover:bg-black/40 transition-all duration-300 absolute inset-0 !z-[50] flex justify-center items-center">
                    <h1 className="opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 text-4xl w-[50px] h-[50px] flex justify-center items-center text-center rounded-full bg-blue-500">
                      +
                    </h1>
                  </div>
                </div>
                </Link>
                <div className="text-sm flex-wrap text-black flex gap-2 sm:gap-5 space-x-3">
                  {first.tags.map((s, i) => <span key={i}>{s}</span>)}
                </div>
              </div>
            ])
          }
        }
        return rows
      }, []).map((row, index) => (
        <div key={index} className="flex flex-col md:flex-row gap-10 !mb-6">
          {index % 2 === 0 ? row : row.reverse()}
        </div>
      ))}
    </section>
  )
}
