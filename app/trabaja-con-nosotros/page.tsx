import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroCareer from "@/components/career/hero-career";
import WhyJoinUs from "@/components/career/why-join-us";
import JobListings from "@/components/career/job-listings";
import ApplicationForm from "@/components/career/application-form";
import EmployeeTestimonials from "@/components/career/employee-testimonials";
import RecruitmentProcess from "@/components/career/recruitment-process";
import WorkplaceGallery from "@/components/career/workplace-gallery";
import FAQ from "@/components/career/faq";

export const metadata = {
  title: "Trabaja con Nosotros | Grupo Pakatnamu",
  description:
    "Únete a nuestro equipo y forma parte de una empresa líder en el sector. Descubre nuestras oportunidades laborales actuales.",
};

export default function CareerPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <HeroCareer />
      <WhyJoinUs />
      <JobListings />
      <RecruitmentProcess />
      <EmployeeTestimonials />
      <WorkplaceGallery />
      {/* <FAQ /> */}
      {/* <ApplicationForm /> */}
      <Footer />
    </main>
  );
}
