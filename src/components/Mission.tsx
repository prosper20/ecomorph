// // components/Mission.tsx

// import { highlightFirstAndLastChar, highlightLastChar } from "@/utils/utils";
// import { Cta1 } from "./CallToAction";

// interface MissionProps{
//   data?: string[];
//   button?: boolean;
//   className?: string;
//   props?:  React.CSSProperties;
//   isHomePage?: boolean;
// }

// const mission: string[] = [ 
//   "“The Bottom is too crowded, so aim for the sky”",
//   "Our mission at 9stack is to set a new standard for how elite websites are built. We believe the most exceptional outcomes happen when the people building the product care as much as the people using it. This mindset is why we don’t deliver “good enough”, we deliver “world-class.” And it’s why we work with classic brands that rise above the noise."]

// export const Mission: React.FC<MissionProps> = ({button, className, props, isHomePage, data = mission}) => {
//   // fetch or define mission content
  

//   return (
//     <section className={`bg-white flex justify-center mx-auto  ${isHomePage ? "!py-[70px] md:!py-[130px]" : "!py-[30px] md:!py-[50px]"}`}>
//       <div className={`flex flex-col md:flex-row gap-4 md:gap-16 ${className}`}>
//         <h1 style={props} className="md:!basis-[40%] max-w-[500px] text-[20px] md:text-[30px] text-black font-bold">{isHomePage ? highlightFirstAndLastChar(data[0]) : highlightLastChar(data[0])}</h1>
//         <div className="md:!basis-[60%] text-black leading-[33px]">
//         <p >{data[1]}</p>
//       {button && <Cta1 light link={"/why-us#contact"} text={"Let's talk"} className="!px-4 !py-1 !mt-[50px] hover:!text-white"></Cta1>}
//         </div>
//       </div>

//     </section>
//   )
// }
