import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Aurora from '~/ui/Aurora';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const Hero = ({
  name = 'Ryan Puyat',
  text = `Welcome to my digital playground`,
}) => {
  const {
    backgroundImage,
    heroBottomShadow,
    boxShadow,
    border,
    backgroundColor,
    hoverShadow,
  } = Aurora();

  const MotionLink = motion(Link);

  return (
    <motion.section
      style={{
        backgroundImage,
        boxShadow: heroBottomShadow,
      }}
      className="mt-[calc(80px+80px)] relative  md:mt-20 text-center  py-20 px-4 bg-gray-900 text-white transition-colors duration-300"
    >
      <h2 className="text-5xl mb-6">Hey, I'm {name} 👋</h2>
      <p className="text-3xl text-gray-300 max-w-2xl mx-auto mb-8">{text}</p>
      <div className="flex justify-center gap-4">
        <MotionLink
          to="/projects"
          style={{
            border,
            boxShadow,
            backgroundColor,
          }}
          whileHover={{
            boxShadow: hoverShadow.get(), // glow on hover
            filter: 'blur(1px) brightness(1.2)',
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="  z-10 text-white px-6 py-2 rounded  transition"
        >
          View Projects
        </MotionLink>
        <MotionLink
          style={{
            border,
            boxShadow,
          }}
          to="/contact"
          whileHover={{
            boxShadow: hoverShadow.get(),
            filter: 'blur(1px) brightness(1.2)',
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className=" z-10 px-6 py-2 rounded hover:text-white transition"
        >
          Contact Me
        </MotionLink>
      </div>
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <Canvas className="h-full w-full">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars
            radius={100} // Radius of the starfield
            depth={500} // Depth of the starfield
            count={2500} // Number of stars
            factor={4} // Size factor for stars
            saturation={0} // Saturation of stars (0-1)
            fade // Enable/disable fading
            speed={1}
          />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default Hero;
