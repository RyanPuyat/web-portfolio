import type { Route } from './+types';
import { useLoaderData, useNavigate } from 'react-router';
import { blogLoader } from '~/routes/loader/blogLoader';
import PostCard from '~/ui/PostCard';
import Pagination from '~/ui/Pagination';
import Search from '~/ui/Search';
import { useState } from 'react';

export const loader = blogLoader;

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Ryan Puyat | Blog' },
    { name: 'description', content: 'Just another day!' },
  ];
}

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const { posts, totalPages, page } = useLoaderData() as Awaited<
    ReturnType<typeof loader>
  >;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    navigate(`?search=${encodeURIComponent(query)}&page=1`);
  };

  return (
    <>
      <div className="glass max-w-[1300px] mx-auto mt-10 px-6 py-6 ">
        <h2 className="text-4xl  text-white mb-4">Blog</h2>
        <Search value={searchQuery} onChange={handleSearch} />
        <div className="space-y-8">
          {posts.length === 0 ? (
            <p className="text-gray-400 text-center">No posts found</p>
          ) : (
            posts.map((post) => <PostCard key={post.slug} post={post} />)
          )}
        </div>
      </div>

      <Pagination totalPages={totalPages} />
    </>
  );
}
