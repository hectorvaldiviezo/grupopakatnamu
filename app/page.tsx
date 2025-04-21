import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CompaniesSection from "@/components/companies-section"
import AboutSection from "@/components/about-section"
import NewsSection from "@/components/news-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <HeroSection />
      <section id="empresas">
        <CompaniesSection />
      </section>
      <section id="nosotros">
        <AboutSection />
      </section>
      <section id="novedades">
        <NewsSection />
      </section>
      <section id="contacto">
        <Footer />
      </section>
    </main>
  )
}
