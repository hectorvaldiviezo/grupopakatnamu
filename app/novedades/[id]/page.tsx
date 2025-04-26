import NoticiaDetalle from "@/components/novedades/noticia-detalle";
import { getNewsById } from "@/components/novedades/lib/novedades.actions";
import Hero from "@/components/Hero";
import NotFound from "@/components/404";
import Header from "@/components/header";

export const dynamic = "force-dynamic";
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  try {
    const noticia = await getNewsById(Number(id));

    if (!noticia) {
      // Manejo explícito si no se encuentra la noticia
      return <NotFound />;
    }

    return (
      <main className="min-h-screen overflow-hidden">
        <Header />
        <Hero
          description=""
          title=""
          height="h-[400px] mt-16"
          src={noticia.image || "/placeholder.svg"}
          gradient={false}
        />
        <NoticiaDetalle noticia={noticia} />
      </main>
    );
  } catch (error) {
    // Manejo de errores generales
    return <NotFound />;
  }
}
