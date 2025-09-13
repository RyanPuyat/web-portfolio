import type { Route } from '../about/+types';
import type { PostMeta, StrapiBlog, StrapiResponse } from '~/api/blog';
import { fetchPosts } from '~/api/blog';

export async function blogLoader({ request }: Route.LoaderArgs): Promise<{
  posts: PostMeta[];
  allPosts: PostMeta[];
  totalPages: number;
  page: number;
}> {
  const PAGE = 5;
  const requestUrl = new URL(request.url);
  const searchQuery =
    requestUrl.searchParams.get('search')?.toLowerCase() || '';

  const { data } = await fetchPosts();

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
    allPosts: data,
    page,
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

  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/blogs?filters[slug][$eq]=${slug}&populate=*`
  );

  if (!res.ok) throw new Response('Failed to fetch blog post', { status: 500 });

  const json: StrapiResponse<StrapiBlog> = await res.json();

  if (!Array.isArray(json.data) || json.data.length === 0) {
    throw new Error('Expected an array of post objects');
  }
  const item = json.data[0];

  const post: PostMeta = {
    id: item.id,
    title: item.title,
    excerpt: item.excerpt,
    slug: item.slug,
    body: item.body,
    image01: item.image01?.url
      ? `${import.meta.env.VITE_STRAPI_URL}${item.image01.url}`
      : '/images/no-images.png',
    image02: item.image02?.url
      ? `${import.meta.env.VITE_STRAPI_URL}${item.image02.url}`
      : '/images/no-images.png',
    date: item.date,
  };

  return {
    post,
  };
}
