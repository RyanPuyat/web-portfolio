import type { Route } from '../about/+types';
import type { PostMeta } from '~/api/blog';
// import { PAGE_SIZE } from '~/utils/constant';

export async function blogLoader({ request }: Route.LoaderArgs): Promise<{
  posts: PostMeta[];
  // totalPost: number;
  totalPages: number;
  page: number;
}> {
  const PAGE = 5;
  const requestUrl = new URL(request.url);
  const searchQuery =
    requestUrl.searchParams.get('search')?.toLowerCase() || '';

  // const url = new URL('/posts-meta.json', request.url);
  const res = await fetch(new URL('/posts-meta.json', request.url).href);
  // const searchQuery = url.searchParams.get('search')?.toLowerCase() || '';

  // const res = await fetch(url.href);

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

  const filtered = searchQuery
    ? data.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery) ||
          post.excerpt.toLowerCase().includes(searchQuery)
      )
    : data;

  const totalPages = Math.ceil(filtered.length / PAGE);
  const start = (page - 1) * PAGE;
  const end = start + PAGE;
  const paginatedPosts = filtered.slice(start, end);

  return {
    posts: paginatedPosts,
    totalPages,
    page,
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
