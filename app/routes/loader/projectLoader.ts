import type { Route } from '../projects/+types/index';
import { fetchProjects } from '~/api/projects';
import { PAGE_SIZE } from '~/utils/constant';
import type { Project } from '~/api/projects';

export async function projectLoader({ request }: Route.LoaderArgs): Promise<{
  projects: Project[];
  // totalCount: number;
  categories: string[];
  selectedCategory: string;
  allProjects: Project[];
  totalPages: number;
}> {
  //Pagination
  const url = new URL(request.url);
  const page = Number(url.searchParams.get('page')) || 1;
  const selectedCategory = url.searchParams.get('category') || 'All';

  const { project: allProjects } = await fetchProjects();

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
  const totalPages = Math.ceil(filteredProjects.length / PAGE_SIZE);

  // console.log(categories);

  return {
    projects: paginatedProjects,
    // totalCount: filteredProjects.length,  use this for showing total number of porject items
    totalPages,
    categories,
    selectedCategory,
    allProjects,
  };
}
