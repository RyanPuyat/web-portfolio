export type PostMeta = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image01: string;
  image02: string;
  body: string;
};

export type StrapiResponse<T> = {
  data: T[];
};
export type StrapiBlog = {
  id: string;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  image01?: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  };
  image02?: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  };

  date: string;
  body: string;
};

export async function fetchPosts() {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/blogs?populate=*`);

  const json: StrapiResponse<StrapiBlog> = await res.json();
  const data = json.data.map((item) => ({
    id: item.id,
    title: item.title,
    excerpt: item.excerpt,
    slug: item.slug,
    body: item.body,
    image01: item.image01?.url
      ? `${import.meta.env.VITE_STRAPI_URL}${item.image01.url}`
      : '/images/no-images.png',
    image02: item.image02?.url
      ? `${import.meta.env.VITE_STRAPI_URL}${item.image02.url}`
      : '/images/no-images.png',
    date: item.date,
  }));

  return { data };
}
