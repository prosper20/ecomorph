import { CallToAction } from "@/components/CallToAction";
import { ContactForm } from "@/components/ContactForm";
import { Testimonials } from "@/components/CustomerTestimonials";
import Hero  from "@/components/Hero";
// import HowWeWork from "@/components/HowWeWork";
// import { Mission } from "@/components/Mission";
// import PieCharts from "@/components/PieCharts";
import ServiceDetails from "@/components/ServiceDetails";
// import Stats from "@/components/Stats";



export default function ServicesPage() {
  return (
    <>
      <Hero />
      <ServiceDetails />
      {/* <HowWeWork /> */}
      <Testimonials />
      {/* <Mission data={["You have a project in mind? Let’s bring it to life with the 9stack team.",
        "At 9stack, we build more than just websites. We craft premium digital experiences for ambitious brands and individuals. Our team has built websites for some of Nigeria’s finest brands, and collaborated with companies to manage and evolve their digital presence. We care about doing things properly, clear communication, clean code, and thoughtful design."]} className="lg:!px-[15%] !px-[5%]" /> */}
      {/* <Stats /> */}
      <CallToAction />
      <ContactForm />
    </>
  )
}
