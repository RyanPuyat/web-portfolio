import type { LoaderFunctionArgs } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL;

export type Project = {
  id: string;
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

export async function fetchProjects(
  request: Request
): Promise<ProjectsResponse> {
  const res = await fetch(`${API_URL}/projects`);
  const data = await res.json();
  return { project: data, totalCount: data.length };
}

export type ProjectsDetailsResponse = {
  project: Project;
};

export async function fetchProjectsDetails({
  request,
  params,
}: LoaderFunctionArgs): Promise<ProjectsDetailsResponse> {
  console.log('Fetching project with ID:', params.id);
  const res = await fetch(`${API_URL}/projects/${params.id}`);

  if (!res.ok) throw new Response('Project not found', { status: 404 });

  const data = await res.json();
  console.log(data);
  return { project: data };
}
