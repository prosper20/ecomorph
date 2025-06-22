'use client'

import { useEffect, useRef, useState } from 'react'

type Testimonial = {
  testimony: string,
  testifier: string,
  position: string
  company: string;
}

const testimonial: Testimonial[] = [
  {
    testimony: "They truly delivered on their promise, the skill level is top-notch.",
    testifier: "Prince O. John",
    position: "COO",
    company: "Olclare Homes"
  },
  {
    testimony: "One of the most professional teams I've worked with. The experience was seamless and impressive.",
    testifier: "Philip Bobzom",
    position: "IT Manager",
    company: "Olclare Homes"
  }
];


export const Testimonials = () => {
  // fetch or define testimonials
  const [currentActive, setCurrentActive] =  useState<number>(0)
  const ref = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
   
     ref.current = setTimeout(() => {
      setCurrentActive(prev => {
        if(prev >= testimonial.length - 1){
          return prev = 0
        }

       return prev + 1
      })
    }, 8000)

    return () => clearTimeout(ref.current!)
  }, [currentActive])

  const testimonials = testimonial[currentActive]

  const slide = Object.fromEntries(Object.entries(testimonials))

  return (
    <section className="mx-auto !-z-50 lg:!pb-12 !pt-12 !mt-[-220px] !h-auto bg-white w-full">
      <div className="w-fit !mx-auto flex items-center flex-col !pt-[200px] xl:!pt-[270px] !pb-11 !px-4 sm:!px-11 bg-no-repeat" style={{backgroundImage: "url('/quotation.svg')", backgroundPosition: "0% 270px", backgroundSize: '30%'}}>
        <div className="flex w-fit items-center !mb-2 lg:!mb-[30px]">
        <h2 className="text-[20px] text-center md:text-left sm:text-2xl text-[#000000] font-semibold z-50 ">What Our Customers Say<span className="rounded-full !text-[5px] !bg-blue-500 !h-[1px] !px-[3px] !mt-3"></span></h2>
        
        </div>
      {/* Carousel or testimonial cards */}
      <div key={currentActive}>
        <p className="animate-slideIn text-[20px] lg:text-[40px] md:text-[30px] text-[#333333]/[70%] !font-[100] max-w-[1150px] text-center !mb-[30px] sm:!mb-[60px] lg:!mb-[120px]">{slide.testimony}</p>

        <p className="!text-center sm:!text-left self-start font-bold text-black animate-bottom">{slide.position} - {slide.company}</p>
        <p className="!text-center sm:!text-left self-start text-[#333333]/[70%] animate-bottom">{slide.testifier}</p>

        <div className="!w-full !h-[4px] border-b-3 border-gray-300 !mt-[40px]"></div>
      </div>
      </div>
    </section>
  )
}
