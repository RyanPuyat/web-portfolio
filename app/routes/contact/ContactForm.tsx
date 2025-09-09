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
            className="button-submit px-3 py-2 rounded-md text-sm transition bg-purple-600 text-white hover:bg-purple-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
