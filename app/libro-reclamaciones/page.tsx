import Hero from "@/components/Hero";
import { EMPRESA_ID, MILLA_BASE } from "@/lib/config";
import { getSedes } from "@/components/sedes/lib/sedes.actions";
import ComplaintForm from "@/components/ComplaintForm";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default async function Home() {
  const sedes = await getSedes(EMPRESA_ID);
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero
          title="LIBRO DE RECLAMACIONES"
          subtitle=""
          description=""
          src={
            MILLA_BASE +
            "/webImages/4/Libro de Reclamaciones"
          }
          height="h-[400px]"
          gradient={true}
          complaint={true}
        />
        <ComplaintForm sedes={sedes} />
      </main>
      <Footer />
    </div>
  );
}
