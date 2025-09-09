import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router';
import { FaUpwork } from 'react-icons/fa6';

function Social() {
  return (
    <div className="flex justify-center flex-row gap-6">
      <Link
        to="https://www.linkedin.com/in/ryanpuyat"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          <FaLinkedin size={32} />
        </span>
      </Link>
      <Link
        to="https://github.com/RyanPuyat"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          <FaGithub size={32} />
        </span>
      </Link>
      <Link
        to="https://www.upwork.com/freelancers/~01cfaba0230783c449"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          <FaUpwork size={32} />
        </span>
      </Link>
    </div>
  );
}

export default Social;
