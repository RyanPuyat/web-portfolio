import { Outlet } from 'react-router';
import Hero from '../ui/Hero';

export default function HomeLayout() {
  return (
    <>
      <Hero />

      <section className="max-w-[1300px] mt-[calc(80px+80px)] md:mt-20 mx-auto px-6 my-8">
        <Outlet />
      </section>

      {/* {typeof window !== 'undefined' && <TechSphere />} */}
    </>
  );
}
