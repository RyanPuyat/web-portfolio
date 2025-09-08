import type { Route } from './+types';
import ContactRight from './ContactRight';
import ContactLeft from './ContactLeft';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Ryan Puyat | Contact' },
    { name: 'description', content: 'Just another day!' },
  ];
}

export default function ContactPage() {
  return (
    <div className="max-w-[1300px] glass  mx-auto mt-12 px-6 py-8 ">
      <h2 className="text-4xl  text-white mb-8 text-center">Connect with me</h2>
      <div className="flex flex-col lg:flex-row p-4 justify-between mx-2 gap-6 lg:gap-15 ">
        <ContactLeft />
        <ContactRight />
      </div>
    </div>
  );
}
