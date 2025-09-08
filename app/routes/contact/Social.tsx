import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router';

function Social() {
  return (
    <>
      <Link
        to="https://www.linkedin.com/in/ryanpuyat"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          <FaLinkedin size={32} />
        </span>
      </Link>
    </>
  );
}

export default Social;
