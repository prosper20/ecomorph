
interface Props{
    children: React.ReactNode;
}

const PageLayout: React.FC<Props> = ({children}) => {
    const baseStyle = {
        backgroundImage: "url('/1ada531f4c90297912f5edc095b96bf1aba1b3e2.png')",
        backgroundColor: 'transparent',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '140vh',
    }
    
    return <div className="relative !px-[5%] !pt-[50px] !mt-[50px] md:!mt-[150px] !mb-[70px] !overflow-y-hidden" style={baseStyle}>
        {children}
    </div>
}

export default PageLayout