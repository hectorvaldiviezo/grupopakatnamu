import Header from "@/components/header";
import Footer from "@/components/footer";
import JobSearch from "@/components/career/job-search";

export const metadata = {
  title: "Convocatorias | Grupo Pakatnamu",
  description:
    "Explora todas nuestras convocatorias laborales actuales y encuentra la oportunidad perfecta para desarrollar tu carrera profesional en Grupo Pakatnamu.",
};

export default function JobListingsPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <JobSearch />
      <Footer />
    </main>
  );
}
