import { highlightLastChar } from "@/utils/utils";
import Image from "next/image";
import { FC } from "react";

type ContactFormProps = {
  title?: string;
  subtitle?: string;
};

export const ContactForm: FC<ContactFormProps> = ({
  title = "Got a project you need help with?",
  subtitle = "Get a quote or send us some love.",
}) => {

  return (
    <section id="contact"
      className={`bg-[#111111] text-white !px-[5%] pb-7 pt-5 md:pb-24 md:pt-30 lg:pt-34"
      }`}
    >
      <div className=" w-[100%] flex flex-col lg:flex-row justify-center !items-center md:items-start gap-2 md:gap-12">
        {/* Left: Headline + BG graphic */}
        <div className="relative w-full lg:w-[60%] h-[200px] lg:h-[350px]">
          <Image
            src="/contact-decor.svg"
            alt=""
            fill
            priority
            className="object-contain"
          />
          <div className="flex justify-center lg:block">
          <h1 className="absolute top-[20%] lg:left-[30%] text-2xl lg:text-[46px] font-bold max-w-[560px] pr-12">
            {highlightLastChar(title)}
          </h1>
          </div>
        </div>

        {/* Right: Form */}
        <div className="w-full max-w-xl">
          <form
            action="mailto:kelperanu@gmail.com"
            method="POST"
            encType="text/plain"
            className="flex flex-col w-full"
          >
            <p className="text-lg font-bold mb-4">
              {highlightLastChar(subtitle)}
            </p>
            <input
              type="email"
              required
              placeholder="Your Email"
              className="bg-transparent border border-gray-600 px-4 py-3 mb-4 focus:outline-none"
            />
            <textarea
              required
              placeholder="Your Message..."
              className="bg-transparent border border-gray-600 px-4 py-3 h-40 mb-5 focus:outline-none"
            />
            <button
              type="submit"
              className="self-start text-sm border border-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-500 transition"
            >
              Send →
            </button>
          </form>

          {/* Contact info */}
          <div className="mt-12 flex justify-center items-center md:justify-start gap-8 text-sm">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <span className="font-semibold">Prefer e-mail?</span>
              <a
                href="mailto:hello@9stack.co"
                className="border-b-2 border-blue-500"
              >
                hello@9stack.co
              </a>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2">
              <span className="font-semibold">or phone?</span>
              <a
                href="tel:+2348132813835"
                className="border-b-2 border-blue-500"
              >
                +234 813 281 3835
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// "use client";

// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { Cta2 } from "./CallToAction";

// type ContactFormProps = {
//   title?: string;
//   subtitle?: string;
// };

// const highlightLastChar = (text: string) => {
//   const main = text.slice(0, -1);
//   const last = text.slice(-1);
//   return (
//     <>
//       {main}
//       <span className="text-blue-500">{last}</span>
//     </>
//   );
// };

// export const ContactForm = ({
//   title = "Got a project you need help with?",
//   subtitle = "Get a quote or send us some love.",
// }: ContactFormProps) => {
//   const path = usePathname();
//   const isHomePage = path === "/";

//   return (
//     <section
//       className={`bg-[#111111] mx-auto ${isHomePage ? "" : "!pt-20"} lg:!pt-24 lg:!pb-30 !pb-14 !px-[8%]`}
//     >
//       <div className="lg:md:flex justify-between min-w-full xl:max-w-[75%]">
//         {/* Mobile heading */}
//         <h1 className="lg:hidden font-bold text-[26px] !mb-[25px]">
//           {highlightLastChar(title)}
//         </h1>

//         {/* Desktop image and heading */}
//         <div className="hidden lg:flex relative !w-[1600px] md:min-w-[350px] !h-[350px] justify-center">
//           <Image
//             src={"/contact-decor.svg"}
//             alt="contact-decor"
//             priority
//             fill
//             className="object-cover"
//           />
//           <h1 className="absolute top-[20%] left-[13%] font-bold text-[46px] xl:max-w-[560px] min-w-[350px] !pr-[120px]">
//             {highlightLastChar(title)}
//           </h1>
//         </div>

//         {/* Form */}
//         <div className="xl:!min-w-[500px] !w-full">
//           <form
//             action="mailto:kelperanu@gmail.com"
//             method="POST"
//             encType="text/plain"
//           >
//             <p className="font-bold !mb-4">
//               {highlightLastChar(subtitle)}
//             </p>
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full !px-2 !py-4 border border-gray-600 !mb-[20px] bg-[#111111] text-white"
//             />
//             <textarea
//               placeholder="Your Message..."
//               className="w-full !p-2 border border-gray-600 !h-[300px] !mb-5 bg-[#111111] text-white"
//             />
//             <Cta2
//               text={"Send"}
//               className={"!py-2 !px-3"}
//               textSize="!text-[14px]"
//             />
//           </form>

//           {/* Contact options */}
//           <div className="flex align justify-around gap-3 lg:flex-col xl:flex-row items-center !mt-16">
//             <div className="flex flex-col md:flex-row justify-center items-center md:gap-5">
//               <h1>Prefer e-mail?</h1>
//               <p className="border-b-2 border-b-blue-500">hello@9stack.com</p>
//             </div>
//             <div className="flex flex-col md:flex-row justify-center items-center md:gap-5">
//               <h1>or phone?</h1>
//               <p className="border-b-2 border-b-blue-500">+234 813 281 3835</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


// "use client"
// // components/ContactForm.tsx
// import Image from 'next/image'
// import { Cta2 } from './CallToAction'
// import { usePathname } from 'next/navigation'

// export const ContactForm = () => {
//   // form logic, state, submission handler
//   const path = usePathname()
//   const isHomePage = path === "/"

//   return (
//     <section className={`bg-[#111111] mx-auto ${isHomePage ? "" : "!pt-20"} lg:!pt-24 lg:!pb-30 !pb-14 !px-[8%]`}>
//       <div className='lg:md:flex justify-between min-w-full xl:max-w-[75%]'>
//         <h1 className="lg:hidden font-bold text-[26px] !mb-[25px]">Got a project you need help with<span className="text-blue-500">?</span></h1>
//         <div className='hidden lg:flex relative !w-[1600px] md:min-w-[350px] !h-[350px] justify-center'>
//           <Image src={'/contact-decor.svg'} alt={''} priority fill className='object-cover' />
//           <h1 className="absolute top-[20%] left-[13%] font-bold text-[46px] xl:max-w-[560px] min-w-[350px] !pr-[120px]">Got a project you need help with<span className="text-blue-500">?</span></h1>
//         </div>

//       <div className="xl:!min-w-[500px] !w-full">
//         <form action="mailto:kelperanu@gmail.com" method="POST" encType="text/plain" >
//           {/* Basic input fields */}
//           <p className="font-bold !mb-4">Get a quote or send us some love<span className='text-[24px] text-blue-500'>.</span></p>
//           <input type="email" placeholder="Email" className="w-full !px-2 !py-4 border border-gray-600 !mb-[20px]" />
//           <textarea placeholder="Your Message..." className="w-full !p-2 border border-gray-600 !h-[300px] !mb-5" />
//           <Cta2
//           text={'Send'} 
//           className={'!py-2 !px-3'} 
//           textSize='!text-[14px]'/>
//         </form>
//         <div className='flex align justify-around gap-3 lg:flex-col xl:flex-row  items-center !mt-16'>
//           <div className='flex flex-col md:flex-row justify-center items-center md:gap-5'>
//             <h1>Prefer e-mail?</h1>
//             <p className='border-b-3 border-b-blue-500'>hello@9stack.com</p>
//           </div>
//           <div className='flex flex-col md:flex-row justify-center items-center md:gap-5'>
//             <h1>or Phone?</h1>
//             <p className='border-b-3 border-b-blue-500'>+234 813 281 3835</p>
//           </div>
//         </div>
//       </div>
//       </div>
//     </section>
//   )
// }
