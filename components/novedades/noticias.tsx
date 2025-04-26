"use client";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TitleComponent from "@/components/title";
import { AnimatedElement } from "@/components/animated-element";
import { NewsResource, NewsResponse } from "./lib/novedades.interface";
import { useEffect, useState } from "react";
import useNovedadesStore from "./lib/novedades.store";
import CustomPagination from "../Pagination";

export interface NovedadesProps {
  newsData: NewsResponse;
}

export default function Novedades({ newsData }: NovedadesProps) {
  const { news: noticiasClient, setData, loadNews, meta } = useNovedadesStore();
  const [displayedNews, setDisplayedNews] = useState<NewsResource[]>(
    newsData.data
  );

  useEffect(() => {
    setData(newsData);
  }, [newsData, setData]);

  useEffect(() => {
    if (noticiasClient.length > 0) {
      setDisplayedNews(noticiasClient);
    }
  }, [noticiasClient]);

  const handlePageChange = async (page: number) => {
    loadNews(page);
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 mt-16">
      <TitleComponent
        title="Novedades"
        description="Manténgase informado sobre las últimas noticias, eventos y novedades de Grupo Pakatnamú."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {displayedNews.map((noticia, index) => (
          <AnimatedElement
            key={noticia.id}
            animation="fade-up"
            delay={index * 100}
            className="group"
          >
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
              <div className="relative h-48">
                <Image
                  src={noticia.image || "/placeholder.svg"}
                  alt={noticia.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
              </div>
              <CardContent className="pt-6">
                <div className="text-sm text-gray-500 mb-2">{noticia.date}</div>
                <h2 className="text-xl font-bold mb-3 text-secondary">
                  {noticia.title}
                </h2>
                <p className="line-clamp-3">{noticia.description}</p>
              </CardContent>

              <CardFooter>
                <Button asChild variant="link" className="text-primary p-0">
                  <Link href={`/novedades/${noticia.id}`}>Leer más</Link>
                </Button>
              </CardFooter>
            </Card>
          </AnimatedElement>
        ))}
      </div>

      {/* Paginación */}
      <CustomPagination meta={meta} onPageChange={handlePageChange} />
    </div>
  );
}
