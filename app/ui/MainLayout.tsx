import { Outlet } from 'react-router';

export default function MainLayout() {
  return (
    <>
      <section className="max-w-[1300px] mt-[calc(80px+80px)] md:mt-30 mx-auto px-6 my-8">
        <Outlet />
      </section>
    </>
  );
}
