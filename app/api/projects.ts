import type { LoaderFunctionArgs } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL;

export type Project = {
  id: string;
  documentId: string;
  title: string;
  description: string;
  image: string;
  url: string;
  date: string;
  category: string;
  featured: boolean;
};

export type ProjectsResponse = {
  project: Project[];
  totalCount: number;
};

export type StrapiResponse<T> = {
  data: T[];
};

export type StrapiProject = {
  id: string;
  documentId: string;
  title: string;
  description: string;
  image?: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  };
  url: string;
  date: string;
  category: string;
  featured: boolean;
};

export async function fetchProjects() {
  const res = await fetch(`${API_URL}/projects?populate=*`);
  const json: StrapiResponse<StrapiProject> = await res.json();

  const data = json.data.map((item) => ({
    id: item.id,
    documentId: item.documentId?.toString() ?? '',
    title: item.title,
    description: item.description,
    image: item.image?.url
      ? `${import.meta.env.VITE_STRAPI_URL}${item.image.url}`
      : '/images/no-images.png',
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured,
  }));

  return { project: data, totalCount: data.length };
}

// export type ProjectsDetailsResponse = {
//   project: Project;
// };

export async function fetchProjectsDetails({ params }: LoaderFunctionArgs) {
  const { id } = params;
  const res = await fetch(
    `${API_URL}/projects?filters[documentId][$eq]=${id}&populate=*`
  );

  if (!res.ok) throw new Response('Project not found', { status: 404 });

  const json: StrapiResponse<StrapiProject> = await res.json();
  const item = json.data[0];

  const project: Project = {
    id: item.id,
    documentId: item.documentId?.toString() ?? '',
    title: item.title,
    description: item.description,
    image: item.image?.url
      ? `${import.meta.env.VITE_STRAPI_URL}${item.image.url}`
      : '/images/no-images.png',
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured,
  };
  return { project };
}
