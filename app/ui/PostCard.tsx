import { Link } from 'react-router';
import type { PostMeta } from '~/api/blog';

function PostCard({ post }: { post: PostMeta }) {
  return (
    <div>
      <article
        className=" bg-gray-800 p-6 rounded-lg shadow mb-4"
        key={post.slug}
      >
        <h3 className="text-2xl font-semibold text-purple-400">{post.title}</h3>
        <p className="text-sm text-gray-400 mb-2">
          {new Date(post.date).toLocaleDateString()}
        </p>

        <p className="text-gray-300 mb-4 line-clamp-1">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="text-purple-300 text-sm hover:underline"
        >
          Read More →
        </Link>
      </article>
    </div>
  );
}

export default PostCard;
