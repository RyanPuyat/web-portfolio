import { Link } from 'react-router';

const Hero = ({
  name = 'Ryan Puyat',
  text = `💻 I'm a dynamic Full Stack Web Developer with a Bachelor's degree in Computer Science,`,
}) => {
  return (
    <header className="mt-[calc(80px+80px)] md:mt-20 text-center  py-20 px-4 bg-gray-900 text-white transition-colors duration-300">
      <h2 className="text-4xl font-bold mb-4">Hey, I'm {name} 👋</h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">{text}</p>
      <div className="flex justify-center gap-4">
        <Link
          to="/projects"
          className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="border border-purple-500 text-purple-400 px-6 py-2 rounded hover:bg-purple-600 hover:text-white transition"
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
};

export default Hero;
