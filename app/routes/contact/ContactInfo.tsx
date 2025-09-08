import { CONTACT } from '~/utils/constant';
import { MdOutlineMail } from 'react-icons/md';
// import { FaPhone } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className="my-2 flex flex-col items-center justify-center">
      <SingleInfo text={CONTACT.email} Image={MdOutlineMail} />
      {/* <SingleInfo text={CONTACT.phoneNo} Image={FaPhone} /> */}
      <SingleInfo text={CONTACT.address} Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
