import { FaUser, FaEnvelope } from 'react-icons/fa';
import { useEmailForm } from '~/routes/contact/useEmailForm';

const ContactForm = () => {
  const { formRef, sendEmail } = useEmailForm();

  return (
    <div className="py-5 w-auto">
      <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
        <div className="flex items-center border-2 border-neutral-300 rounded-2xl h-12 p-2 text-sm">
          <FaUser className="text-neutral-500 mr-2 bg-transparent" />
          <input
            className="flex-grow outline-none"
            name="from_name"
            type="text"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="flex items-center border-2 border-neutral-300 rounded-2xl h-12 p-2 text-sm">
          <FaEnvelope className="text-neutral-500 mr-2 bg-transparent" />
          <input
            className="flex-grow outline-none"
            name="from_email"
            type="email"
            placeholder="example@sample.com"
            required
          />
        </div>

        <textarea
          className="border-2 border-neutral-300 rounded-2xl p-2 text-sm"
          name="message"
          placeholder="Message"
          rows={9}
          required
        ></textarea>

        <div className="gradient-border">
          <button
            type="submit"
            className="button-submit bg-gradient-to-r from-[#3e1f90] to-[#2c1468] hover:from-[#2c1468] hover:to-[#3e1f90] text-white font-bold py-2 px-4 rounded-2xl transition-colors duration-300 border-1 border-neutral-400 shadow-neutral-700 hover:shadow-lg hover:shadow-[#3e1f90]/60 cursor-pointer glow-effect"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
