import type { Route } from '../about/+types';
import type { PostMeta } from '~/api/blog';
import { PAGE_SIZE } from '~/utils/constant';

export async function blogLoader({ request }: Route.LoaderArgs): Promise<{
  posts: PostMeta[];
  // totalPost: number;
  totalPages: number;
}> {
  const url = new URL('/posts-meta.json', request.url);
  const res = await fetch(url.href);

  if (!res.ok) throw new Error('Failed to fetch data');

  const data = await res.json();
  //   console.log(data);

  data.sort((a: PostMeta, b: PostMeta) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  if (!Array.isArray(data)) {
    throw new Error('Expected an array of post objects');
  }

  const urlPage = new URL(request.url);
  const page = Number(urlPage.searchParams.get('page')) || 1;

  const totalPages = Math.ceil(data.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const paginatedPosts = data.slice(start, end);

  return {
    posts: paginatedPosts,
    totalPages,
    // totalPost: data.length use this for showing total number of posts items
  };
}

export async function blogDetailsLoader({
  request,
  params,
}: {
  request: Request;
  params: { slug: string };
}) {
  const { slug } = params;
  if (!slug) throw new Response('Missing slug parameter', { status: 400 });

  const url = new URL('/posts-meta.json', request.url);
  const res = await fetch(url.href);

  if (!res.ok) throw new Error('Failed to fetch data');

  const index = await res.json();
  //   console.log(data);

  if (!Array.isArray(index)) {
    throw new Error('Expected an array of post objects');
  }

  const postMeta = index.find((post: PostMeta) => post.slug === slug);

  //   console.log(postMeta);

  if (!postMeta) throw new Response('Not found', { status: 404 });

  const markdown = await import(`../../posts/${slug}.md?raw`);

  return {
    postMeta,
    markdown: markdown.default,
  };
}
