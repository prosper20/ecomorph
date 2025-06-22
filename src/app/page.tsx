import { CallToAction } from "@/components/CallToAction";
import { Features } from "@/components/Features";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";


export default function HomePage() {
  return (
    <>
      {/* <Hero title="We build premium websites that make your brand stand out." align="left" /> */}
      <Hero />
      <Features />
      <ProjectsSection />
      {/* 
      <Testimonials />
      <ServicesSection />
      <SelfTestimonialCard />
      <Mission isHomePage className="!px-[5%]" />
      <Clients />
      <ContactForm /> */}
      <CallToAction />
    </>
  )
}
