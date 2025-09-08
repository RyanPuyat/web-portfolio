import type { Route } from './+types';
import { useLoaderData } from 'react-router-dom';
import ProjectCard from '~/routes/projects/ProjectCard';
import Pagination from '~/ui/Pagination';
import { projectLoader } from '../loader/projectLoader';
import Filter from '~/ui/Filter';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
export const loader = projectLoader;

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Ryan Puyat | Projects' },
    { name: 'description', content: 'Just another day!' },
  ];
}

export default function ProjectRoutes() {
  const { projects, totalCount, categories, selectedCategory } =
    useLoaderData() as Awaited<ReturnType<typeof loader>>;

  if (!Array.isArray(projects)) {
    return <p>No projects available.</p>;
  }

  const navigate = useNavigate();

  const handleCategorySelect = (category: string) => {
    navigate(`?category=${category}`);
  };

  return (
    <section>
      <h2 className="text-4xl text-white mb-8">Projects</h2>

      <Filter
        categories={categories}
        selected={selectedCategory}
        onSelect={handleCategorySelect}
      />
      <AnimatePresence mode="wait">
        <motion.div className="grid gap-6 sm:grid-cols-2 items-stretch">
          {projects.map((project: any) => (
            <motion.div key={project.id} layout>
              <ProjectCard projects={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <Pagination count={totalCount} />
    </section>
  );
}
