import { AxiosRequestConfig } from "axios";
import { NewsResource, NewsResponse } from "./novedades.interface";
import { apiMilla, EMPRESA_ID } from "@/lib/config";

export async function getNews(page: number): Promise<NewsResponse> {
  const config: AxiosRequestConfig = {
    params: {
      company: EMPRESA_ID,
      page,
    },
  };
  const { data } = await apiMilla.get<NewsResponse>(`/news`, config);
  return data;
}

export async function getNewsLimit(limit: number): Promise<NewsResponse> {
  const config: AxiosRequestConfig = {
    params: {
      company: EMPRESA_ID,
      limit,
    },
  };
  const { data } = await apiMilla.get<NewsResponse>(`/news`, config);
  return data;
}

export async function getNewsById(id: number): Promise<NewsResource> {
  const config: AxiosRequestConfig = {
    params: {
      company: EMPRESA_ID,
    },
  };
  const { data } = await apiMilla.get<any>(`/news/${id}`, config);
  return data.data;
}
