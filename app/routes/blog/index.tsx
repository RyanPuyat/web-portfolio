import type { Route } from './+types';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Ryan Puyat | Blog' },
    { name: 'description', content: 'Just another day!' },
  ];
}

export default function BlogPage() {
  return (
    <>
      <h2 className="text-4xl  text-white">Blog</h2>
    </>
  );
}
