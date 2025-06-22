

// interface CoreValue {
//   id: number;
//   number: string;
//   title: string;
//   description: string;
// }

// interface Props {
//   data?: CoreValue[];
// }

// const coreValuesData: CoreValue[] = [
//   {
//     id: 1,
//     number: "01",
//     title: "Precision",
//     description:
//       "We design and engineer with purpose. Every pixel, every line of code, every interaction is intentional. It's how we turn complexity into clarity.",
//   },
//   {
//     id: 2,
//     number: "02",
//     title: "World-Class",
//     description:
//       "We go beyond our best to deliver world-class standards, every component is crafted with precision and intent. The result is digital work that feels effortless yet unforgettable.",
//   },
//   {
//     id: 3,
//     number: "03",
//     title: "Transparency",
//     description:
//       "Expect open communication, thoughtful updates, and a process that respects your time and ambition. We build trust by making excellence visible at every step.",
//   },
// ];

// const HowWeWork: React.FC<Props> = ({ data = coreValuesData }) => {
//   return (
//     <section className="bg-white flex flex-col items-center py-20 px-6 md:px-[5%]">
//       <h2 className="text-[22px] md:text-[3xl] text-[#131415] md:text-4xl font-semibold text-center mb-4">
//         How we work<span className="text-blue-500">.</span>
//       </h2>

//       <div className="w-full max-w-4xl flex flex-col items-center">
//         {data.map((item) => (
//           <div key={item.id} className="relative mb-5 md:mb-10">
//             <h1 className="relative md:left-[-60px] top-5 md:top-0 text-[80px] md:text-[108px] font-extrabold text-[#f5f5f5] leading-none">
//               {item.number}
//             </h1>
//             <h1 className="absolute top-[60px] left-0 text-[22px] sm:text-[3xl] font-bold text-[#131415]">
//               {item.title}
//             </h1>
//             <p className="mt-4 text-[#1c1d1e] text-[14px] md:text-[16px] max-w-2xl">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HowWeWork;



// // interface CoreValue {
// //   id: number;
// //   number: string;
// //   title: string;
// //   description: string;
// // }

// // interface Props{
// //   data?: CoreValue[];
// // }

// // const coreValuesData: CoreValue[] = [
// //   {
// //     id: 1,
// //     number: "01",
// //     title: "Relentless focus",
// //     description: "We never relent our insanity to destroy the status-quo in pursuit of innovation. Our way of doing that is to put people first. You can call that our core strategy.",
// //   },
// //   {
// //     id: 2,
// //     number: "02",
// //     title: "Teamwork",
// //     description: "You won't be just our client. We will be one team. Because that's the only way to build powerful applications.",
// //   },
// //   {
// //     id: 3,
// //     number: "03",
// //     title: "Transparency",
// //     description: "We believe that honesty and transparency prevent errors and mistakes and are key for every good relationship.",
// //   },
// // ];


// // const HowWeWork: React.FC<Props> = ({data = coreValuesData}) => {
// //   // describe the process / pipeline

// //   return (
// //     <section className="bg-white flex flex-col items-center !py-12 !px-[5%]">
// //      {data.map(details => {
// //       return <div key={details.id}>
// //         <div className="relative top-0 left-0 text-black !mb-24">
// //           <h1 className="text-[86px] font-extrabold text-gray-200">{details.number}</h1>
// //           <p className="absolute top-[60px] text-2xl font-bold left-0">{details.title}</p>
// //           <p className="!mt-[-20px] max-w-3xl">{details.description}</p>
// //         </div>
// //       </div>

// //      })}
// //     </section>
// //   )
// // }

// // export default HowWeWork