import { create } from "zustand";
import { Links, Meta, NewsResource, NewsResponse } from "./novedades.interface";
import { getNews } from "./novedades.actions";

interface NovedadesState {
  news: NewsResource[];
  meta: Meta;
  links: Links;
  loadNews: (page: number) => void;
  setData: (data: NewsResponse) => void;
}

const useNovedadesStore = create<NovedadesState>((set) => ({
  news: [],
  meta: {
    current_page: 0,
    from: 0,
    last_page: 0,
    links: [],
    path: "",
    per_page: 0,
    to: 0,
    total: 0,
  },
  links: {
    first: "",
    last: "",
    prev: null,
    next: "",
  },
  loadNews: async (page: number) => {
    const data = await getNews(page);
    set((state) => ({
      news: data.data,
      meta: data.meta,
      links: data.links,
    }));
  },
  setData: (data: NewsResponse) =>
    set(() => ({
      news: data.data,
      meta: data.meta,
      links: data.links,
    })),
}));

export default useNovedadesStore;
