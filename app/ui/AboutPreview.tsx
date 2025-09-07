import { Link } from 'react-router';

function AboutPreview() {
  return (
    <section className="mt-12 p-10 flex flex-col lg:flex-row items-center gap-10 bg-gray-900">
      <div className="card-wrapper flex items-center justify-center w-[150px] h-[149px] sm:w-[150px] sm:h-[160px] md:w-[160px] md:h-[160px] lg:w-[550px] lg:h[170px] xl:w-[480px] overflow-hidden rounded-full">
        <img
          src="/aboutImg.png"
          alt="profile"
          className="w-38 h-38 rounded-full object-cover b shadow-md z-2 "
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">About Me</h2>
        <p className="text-gray-200 mb-4 max-w 4xl line-clamp-2">
          I’m a web developer based in South Korea who loves bringing ideas to
          life online. I enjoy building websites and apps that look great and
          actually work — from the layout and design all the way to the
          behind-the-scenes logic. Whether I’m creating smooth user experiences
          or solving tricky backend challenges, I get excited about turning
          complex problems into simple, useful tools that people enjoy using.
        </p>
        <Link
          to="/about"
          className="inline-block text-purple-400 hover:underline text-sm"
        >
          Learn More About Me
        </Link>
      </div>
    </section>
  );
}

export default AboutPreview;
