import { IconCloud } from '~/magicui/icon-cloud';

const slugs = [
  'typescript',
  'javascript',
  'react',
  'html5',
  'nodedotjs',
  'express',
  'nextdotjs',
  'postgresql',
  'firebase',
  'nginx',
  'vercel',
  'jest',
  'supabase',
  'github',
  'figma',
  'postman',
  'archlinux',
  'linux',
  'digitalocean',
  'lunacy',
  'mongodb',
  'stripe',
];

export default function IconCloudDemo() {
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}`);

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden ">
      <IconCloud images={images} />
    </div>
  );
}
