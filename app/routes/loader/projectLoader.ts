import type { Route } from '../projects/+types/index';
import { fetchProjects } from '~/api/projects';
import { PAGE_SIZE } from '~/utils/constant';
import type { Project } from '~/api/projects';

// import { useState } from 'react';

export async function projectLoader({ request }: Route.LoaderArgs): Promise<{
  projects: Project[];
  totalCount: number;
  categories: string[];
  selectedCategory: string;
  allProjects: Project[];
}> {
  //Pagination
  const url = new URL(request.url);
  const page = Number(url.searchParams.get('page')) || 1;
  const selectedCategory = url.searchParams.get('category') || 'All';

  const { project: allProjects } = await fetchProjects(request);

  const categories = [
    'All',
    ...Array.from(new Set(allProjects.map((project) => project.category))),
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const paginatedProjects = filteredProjects.slice(start, end);
  console.log(categories);

  return {
    projects: paginatedProjects,
    totalCount: filteredProjects.length,
    categories,
    selectedCategory,
    allProjects,
  };
}
