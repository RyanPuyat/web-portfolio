import type { Route } from './+types';
import { useLoaderData } from 'react-router';
import { blogLoader } from '~/routes/loader/blogLoader';
import PostCard from '~/ui/PostCard';
import Pagination from '~/ui/Pagination';

export const loader = blogLoader;

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Ryan Puyat | Blog' },
    { name: 'description', content: 'Just another day!' },
  ];
}

export default function BlogPage() {
  const { posts, totalPages } = useLoaderData() as Awaited<
    ReturnType<typeof loader>
  >;

  return (
    <>
      <div className="glass max-w-[1300px] mx-auto mt-10 px-6 py-6 ">
        <h2 className="text-4xl  text-white mb-4">Blog</h2>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      <Pagination totalPages={totalPages} />
    </>
  );
}
