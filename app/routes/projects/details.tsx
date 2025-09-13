import { Link } from 'react-router-dom';
import { fetchProjectsDetails } from '~/api/projects';
import type { Project } from '~/api/projects';
import type { LoaderFunctionArgs } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export async function loader(
  args: LoaderFunctionArgs
): Promise<{ project: Project }> {
  return await fetchProjectsDetails(args);
}

export interface ComponentProps {
  loaderData: { project: Project };
}

export default function ({ loaderData }: ComponentProps) {
  const { project } = loaderData;

  if (!project) {
    return <p>No projects available.</p>;
  }

  return (
    <>
      <Link
        to="/projects"
        className="flex items-center text-purple-500 hover:text-purple-700 mb-6 transition"
      >
        <FaArrowLeft className="mr-2" />
        Back to projects
      </Link>

      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div>
          <img
            src={project.image || '/images/no-images.png'}
            alt={project.title || 'Untitled'}
            className="rounded-lg shadow-md"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-purple-500 mb-4">
            {project.title}
          </h1>
          <p className="text-gray-300 text-sm mb-4">
            {new Date(project.date).toLocaleDateString()} • {project.category}
          </p>

          <p className="text-gray-200 mb-6">{project.description}</p>

          <a
            href={project.url}
            target="_blank"
            className="inline-block text-white bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded transition"
          >
            View Live Site{' '}
          </a>
        </div>

        <div></div>
      </div>
    </>
  );
}
