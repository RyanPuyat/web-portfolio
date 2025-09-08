import ContactForm from '~/routes/contact/ContactForm';

function ContactLeft() {
  return (
    <div className="w-full max-w-md px-4 py-5 ">
      <div>
        <p className="text-neutral-400 text-sm">
          Interested in a collaboration or have queries? <br />
          Feel free to drop a message!
        </p>
      </div>
      <ContactForm />
    </div>
  );
}

export default ContactLeft;
