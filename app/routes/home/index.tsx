import type { Route } from './+types/index';
import FeaturedProjects from '~/ui/FeaturedProjects';
import { projectLoader } from '../loader/projectLoader';
import { useLoaderData, type LoaderFunctionArgs } from 'react-router-dom';
import AboutPreview from '~/ui/AboutPreview';
import { blogLoader } from '../loader/blogLoader';
import BlogPreview from '~/ui/BlogPreview';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Ryan Puyat | Welcome' },
    { name: 'description', content: 'Just another day!' },
  ];
}

export async function homeLoader(args: LoaderFunctionArgs) {
  const projectData = await projectLoader(args);
  const blogData = await blogLoader(args);

  return {
    ...projectData,
    ...blogData,
  };
}

export const loader = homeLoader;

export default function HomePage() {
  const { allProjects, allPosts } = useLoaderData() as Awaited<
    ReturnType<typeof homeLoader>
  >;

  return (
    <>
      <FeaturedProjects projects={allProjects} count={2} />
      <AboutPreview />
      <BlogPreview posts={allPosts} count={3} />
      {/* <Test /> */}
    </>
  );
}
