export interface NewsResponse {
  data: NewsResource[];
  links: Links;
  meta: Meta;
}

export interface NewsResource {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  images: string[];
  content: string;
  typeMedia: null | string;
  category: string;
  category_id: number;
  newsRelated: NewsRelated[];
}

export interface NewsRelated {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
}

export interface Links {
  first: string;
  last: string;
  prev: null;
  next: string;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface Link {
  url: null | string;
  label: string;
  active: boolean;
}
