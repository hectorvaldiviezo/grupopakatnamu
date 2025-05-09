import Header from "@/components/header";
import Footer from "@/components/footer";
import JobDetail from "@/components/career/job-detail";

export const metadata = {
  title: "Detalle de Convocatoria | Grupo Pakatnamu",
  description:
    "Información detallada sobre nuestra convocatoria laboral. Conoce los requisitos, responsabilidades y beneficios de esta posición en Grupo Pakatnamu.",
};

export default function JobDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <JobDetail id={params.id} />
      <Footer />
    </main>
  );
}
