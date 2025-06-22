
interface Props{
    className: string
}

const OurServicesCircle: React.FC<Props> = ({className}) => {
    return <div className={` ${className} rounded-full bg-gray-200/[40%] justify-center items-center`}>
        <p className="text-black text-[22px] md:text-[33px] w-[150px] text-center font-bold">Our Services</p><span className="w-[7px] h-[7px] bg-blue-500 !ml-[-3px] !mt-[8px] md:!mt-[64px] rounded-full"></span>
    </div>
}

export default OurServicesCircle