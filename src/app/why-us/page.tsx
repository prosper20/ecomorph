import { ContactForm } from "@/components/ContactForm";
import Hero  from "@/components/Hero";
// import { Mission } from "@/components/Mission";
import { ReasonsSection } from "@/components/ReasonsSection";


export default function WhyUsPage() {
  return (
    <>
      <Hero />
      <ReasonsSection />
      {/* <Mission button className="bg-slate-100 md:bg-transparent !py-[60px] !px-[5%] xl:max-w-[75%]" data={[ 
  "We are the most impactful, trustworthy and effective builder of digital products.",
  "We are uncomplicated and flexible on formality, but unrelenting on good processes. We can scale up (or down) with you, on demand. And whether we’re working tightly with your existing software engineering team, or as a more autonomous product team, we’ll always take our time to understand you and your product, and create an aligned vision."]} props={{fontWeight: "normal", }}/> */}
    <ContactForm />
    </>
  )
}
