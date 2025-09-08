import { FaEnvelope } from 'react-icons/fa';
import { IoMdSquareOutline } from 'react-icons/io';
import ContactInfo from '~/routes/contact/ContactInfo';
import Social from '~/routes/contact/Social';
import { motion } from 'framer-motion';

const ContactRight = () => {
  return (
    <div className="flex flex-col items-center pt-15 px-5 justify-center gap-6 max-w-full overflow-hidden lg:pt-5">
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: [10, -10],
          transition: {
            duration: 1.5,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          },
        }}
        className="flex justify-center items-center"
      >
        <FaEnvelope className="text-7xl text-blue-500" />
        <div className=" absolute -z-10 flex justify-center items-center animate-pulse">
          <IoMdSquareOutline className="w-32 h-32 text-blue-500 blur-md animate-[spin_20s_linear_infinite]" />
        </div>
      </motion.div>
      <ContactInfo />
      <Social />
    </div>
  );
};

export default ContactRight;
