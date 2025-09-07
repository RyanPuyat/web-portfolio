import type { Route } from './+types/index';
import FeaturedProjects from '~/ui/FeaturedProjects';
import { projectLoader } from '../loader/projectLoader';
import { useLoaderData } from 'react-router-dom';
import AboutPreview from '~/ui/AboutPreview';
// import Spa from '~/ui/ProfileImage';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Ryan Puyat | Welcome' },
    { name: 'description', content: 'Just another day!' },
  ];
}
export const loader = projectLoader;

export default function HomePage() {
  const { allProjects } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  // console.log(allProjects);
  return (
    <>
      <FeaturedProjects projects={allProjects} count={2} />
      <AboutPreview />
      {/* <Test /> */}
    </>
  );
}
