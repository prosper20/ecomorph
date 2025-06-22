// import { LucideProps } from 'lucide-react'

// interface Props{
//     Icon: React.FC<LucideProps>
//     details: string;
//     heading: string;
//     rating: string;
//     className: string;
//     stroke: string;
//     fill: string;
//     spanText: string;
//     ratingClass?: string;
// }

// const InfoCard: React.FC<Props> = ({Icon, details, heading, rating, className, stroke, fill, spanText, ratingClass}) => {
//     return <div className={`xl:!px-[70px] xl:!py-[40px] !p-[30px] w-full  xl:w-[320px] flex flex-col xl:gap-3 justify-self-center ${ratingClass} ${className}`}>
//           <Icon size={65} fill={fill} stroke={stroke} strokeWidth={1} />
//           <p className={`lg:text-[90px] text-[55px] font-extrabold `}>{rating}<span className="lg:text-[60px] text-[30px]">{spanText}</span></p>
//           <div>
//             <h1 className="lg:text-[22px] text-[16px] font-bold">{heading}</h1>
//             <p className='text-[16px]'>{details}</p>
//           </div>
//     </div>
// }

// export default InfoCard