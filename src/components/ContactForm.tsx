import ContactFormName from "./SVGs/ContactFormName";
import ContactFormNumber from "./SVGs/ContactFormNumber";

function ContactForm() {
  return (
    <div className="m-5 flex flex-col justify-between h-[calc(100dvh-100px)]">
      <div className="flex flex-col gap-16">
        <div className="flex gap-5 items-center">
          <ContactFormName />
          <input
            type="text"
            placeholder="Display Name"
            className="p-3 text-sm bg-transparent outline-none text-textPrimary-light dark:text-textPrimary-dark placeholder-textSecondary-light dark:placeholder:text-textSecondary-dark border-solid border-0 border-b-2 border-border-light dark:border-border-dark w-full"
          />
        </div>
        <div className="flex gap-5 items-center">
          <ContactFormNumber />
          <input
            type="text"
            placeholder="Phone Number"
            className="p-3 text-sm bg-transparent outline-none text-textPrimary-light dark:text-textPrimary-dark placeholder-textSecondary-light dark:placeholder:text-textSecondary-dark border-solid border-0 border-b-2 border-border-light dark:border-border-dark w-full"
          />
        </div>
      </div>
      <button className="bg-primary-light dark:bg-primary-dark text-white w-full p-2 rounded-full">
        Save
      </button>
    </div>
  );
}

export default ContactForm;
