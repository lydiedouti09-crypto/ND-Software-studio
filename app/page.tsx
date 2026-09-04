import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Principles from "@/components/Principles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main>
      <Header />
      <ScrollReveal><Hero /></ScrollReveal>
      <ScrollReveal delay={80}><About /></ScrollReveal>
      <ScrollReveal delay={120}><Services /></ScrollReveal>
      <ScrollReveal delay={160}><Process /></ScrollReveal>
      <ScrollReveal delay={200}><Principles /></ScrollReveal>
      <ScrollReveal delay={240}><Contact /></ScrollReveal>
      <ScrollReveal delay={280}><Footer /></ScrollReveal>
      <FloatingWhatsApp />
    </main>
  );
}
