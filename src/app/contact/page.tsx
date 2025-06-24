
import { Clients } from "@/components/Clients";
import ContactForm from "./components/ContactForm";
import ContactLocationSection from "./components/ContactLocationSection";
import HeroSection from "./components/HeroSection";

export default function WhyUsPage() {
  return (
    <>
      <HeroSection />
      <ContactLocationSection />
      <ContactForm />
      <Clients />
    </>
  )
}
