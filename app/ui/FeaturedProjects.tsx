import type { Project } from '~/api/projects';
import ProjectCard from '~/routes/projects/ProjectCard';

type FeaturedProps = {
  projects: Project[];
  count: number;
};

function FeaturedProjects({ projects, count }: FeaturedProps) {
  const featured = projects
    .filter((project) => project.featured)
    .slice(0, count);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-gray200">
        Featured Projects
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 z-10">
        {featured.map((project) => (
          <ProjectCard key={project.id} projects={project} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;
