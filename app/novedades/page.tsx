import Header from "@/components/header";
import { getNews } from "@/components/novedades/lib/novedades.actions";
import Novedades from "@/components/novedades/noticias";

export const dynamic = "force-dynamic";
export default async function Page() {
  const noticias = await getNews(1);

  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <Novedades newsData={noticias} />
    </main>
  );
}
