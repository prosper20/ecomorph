import OurServicesCircle from "./OurServicesCircle"
import Image from "next/image"

interface Item {
  id: string | number;
  name: string;
  image: string;    // URL or image path
  details: string;
}

const items: Item[] = [
  {
    id: 1,
    name: "Website Development",
    image: "/Web Development and Design Icon.svg",
    details: "We build high-performance, modern websites tailored for premium brands, institutions, and businesses. Whether it’s a corporate homepage, hospitality platform, or investor portal, we combine elegant visuals with clean code to deliver digital experiences that inspire confidence and drive engagement.",
  },
  {
    id: 2,
    name: "Website Design & Redesign",
    image: "/ux_ui_design_icon.svg fill.svg",
    details: "Your website should reflect the quality of your brand. We design and redesign sites with a focus on visual clarity, user behavior, and emotional impact. Every detail, from layout to typography, is optimized to create seamless user journeys that feel as luxurious as your brand.",
  },
  {
    id: 3,
    name: "SEO Optimization",
    image: "/App Engineering Icon.svg",
    details: "A beautiful website means nothing if no one sees it. We optimize your site from the inside out, improving structure, speed, mobile performance, and keyword visibility. Our SEO and traffic strategies ensure your website doesn’t just rank, it reaches the right audience and converts.",
  },
];


// components/ServicesSection.tsx
export const ServicesSection = () => {
  // highlight key services

  return (
    <section className="mx-auto !px-[5%] bg-white sm:!pt-[40px] lg:!pt-[40px] xl:!pt-[130px]">
      <div className="flex xl:hidden justify-center items-center !mb-28">
        <OurServicesCircle className={"flex !w-[75vw] !h-[75vw] sm:!w-[400px] sm:!h-[400px]  md:!w-[500px] md:!h-[500px]"} />
      </div>
      {/* Cards or icons of services */}
      <div className="flex flex-col relative xl:items-end !mt-[-30px]">
      {items.map((item, index) => {
        if(index % 2 !== 0){
          return <div className="flex gap-4 xl:!ml-[40px] !mb-[40px] xl:!mb-[108px] xl:w-[72%] !z-50 items-start" key={item.id}>
            <OurServicesCircle className={"w-[550px] h-[550px] !-z-50 xl:flex hidden absolute top-[200px] !mr-[60%] translate-x-[-65%] translate-y-[-30%]"} />
            <Image width={80} height={80} src={item.image} alt={""} priority className="md:flex hidden"/>
            <Image width={45} height={45} src={item.image} alt={""} priority className="md:hidden !mt-4"/>
            <div className="w-[100%]">
            <h1 className="text-[20px] md:text-[38px] text-black font-bold !mb-2">{item.name}<span className="!text-[5.3px] lg:!text-[5px] !px-[3.5px] sm:!px-[3px] bg-blue-500 !ml-[2px] sm:!ml-[1px] !mt-[64px] rounded-full"></span></h1>
            <p className="text-[16px] md:text-[17px] text-justify md:text-left text-gray-600 leading-[28px]">{item.details}</p>
          </div>
        </div>
        }
        return <div className="flex gap-2 md:gap-6 !mb-[40px] xl:!mb-[108px] xl:w-[79%] !z-[51] !items-start" key={item.id}>
          <Image width={80} height={80} src={item.image} alt={""} priority className="md:flex hidden"/>
          <Image width={45} height={45} src={item.image} alt={""} priority className="md:hidden !mt-4"/>
          <div className="xl:w-[75%]">
            <h1 className="text-[20px] md:text-[38px] text-black font-bold !mb-2 ">{item.name}<span className="!text-[5.3px] lg:!text-[5px] !px-[3.5px] sm:!px-[3px] bg-blue-500 !ml-[2px] sm:!ml-[1px] !mt-[64px] rounded-full"></span></h1>
            <p className="text-[16px] md:text-[17px] text-justify md:text-left text-gray-600 leading-[28px]">{item.details}</p>
          </div>
        </div>
      })}
      </div>
    </section>
  )
}
