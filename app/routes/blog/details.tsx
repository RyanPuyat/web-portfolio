import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router';
import { useLoaderData } from 'react-router';
import { blogDetailsLoader } from '../loader/blogLoader';
export const loader = blogDetailsLoader;

export default function details() {
  const { markdown, postMeta } = useLoaderData() as Awaited<
    ReturnType<typeof loader>
  >;

  return (
    <div className="max-w-[1300px] mx-auto px-6 py-12 glass">
      <h1 className="text-3xl font-bold text-purple-400 mb-2">
        {postMeta.title}
      </h1>
      <p className="text-sm text-gray-400 mb-6">
        {new Date(postMeta.date).toLocaleDateString()}
      </p>

      <div className="prose prose-invert max-w-none mb-12 ">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>

      <Link to="/blog" className="text-purple-300 text-sm hover:underline">
        {' '}
        ← Back to Posts
      </Link>
    </div>
  );
}
