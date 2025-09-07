// import { useEffect, useRef } from 'react';
// import TagCloud from 'TagCloud';
// import type { TagCloudOptions } from 'TagCloud';

// export default function TagSphere() {
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const texts = [
//       'React',
//       'TypeScript',
//       'Node.js',
//       'Postgresql',
//       'MonggoDB',
//       'DigitalOcean',
//       'Javascript',
//       'Tailwind',
//       'Nextjs',
//       'AdobePhotoshop',
//       'AdobeXD',
//       'Linux',
//     ];

//     const options: TagCloudOptions = {
//       radius: 180,
//       maxSpeed: 'fast',
//       initSpeed: 'normal',
//       keep: true,
//     };

//     const instance = TagCloud([containerRef.current], texts, options);

//     return () => instance.destroy?.();
//   }, []);

//   return <div ref={containerRef} style={{ width: '100%', height: '400px' }} />;
// }

// import { useEffect, useRef } from 'react';
// import { TagCloud } from 'tag-cloud';

// import React from 'react';
import { TagCloud } from 'react-tagcloud';

type TagType = {
  value: string;
  count: number;
};

const data = [
  { value: 'React', count: 25 },
  { value: 'MongoDB', count: 18 },
  { value: 'JavaScript', count: 38 },
  { value: 'Nginx', count: 30 },
  { value: 'Nodejs', count: 28 },
  { value: 'Express.js', count: 25 },
  { value: 'HTML5', count: 33 },
  { value: 'CSS3', count: 20 },
  { value: 'Webpack', count: 22 },
  { value: 'Vite', count: 7 },
  { value: 'Typescript', count: 25 },
  { value: 'Jest', count: 15 },
  { value: 'Postgresql', count: 17 },
  { value: 'Firebase', count: 27 },
  { value: 'Supabase', count: 30 },
  { value: 'Digitalocean', count: 15 },
  { value: 'Vercel', count: 30 },
  { value: 'Lunacy', count: 11 },
  { value: 'Figma', count: 28 },
  { value: 'Photoshop', count: 14 },
  { value: 'XD', count: 35 },
  { value: 'Stripe', count: 30 },
];

// randomSeed - seed passed to the seeded random number generator
export default () => (
  <TagCloud
    minSize={12}
    maxSize={35}
    tags={data}
    style={{ textAlign: 'center' }}
  />
);
