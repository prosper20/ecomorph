"use client"

import { statsClasses } from '@/utils/utils';
import dynamic from 'next/dynamic';

const PieCharts = dynamic(() => import('@/components/PieCharts'), {
  ssr: false,
});

const data = [
    "We think big about partnership and our customers trust us.",
    "How do we know?",
    "83% of our business comes from our existing customers."
]


const Stats: React.FC = () => {
    return <div className="flex flex-col xl:flex-row gap-20 items-center bg-white xl:!px-[9%] !px-[5%] !pt-12 !pb-36">
        <div className=''>
        <PieCharts width={700} className={'lg:block hidden'} outerRadius={200} labelName />
        <PieCharts label width={550} height={350} className={'lg:hidden'} outerRadius={115}  />
        </div>
        <div className=''>
            {data.map((info, index) => {
                const classes = statsClasses(index)
                return <div key={info[index]}>
                    <h1 className={classes}>{info}</h1>
                </div>
            })}
        </div>
    </div>
}

export default Stats