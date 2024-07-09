import css from "./ContactForm.module.css";

export const ContactForm = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label} htmlFor="name">
        Name
      </label>
      <input type="text" id="name" className={css.input} />

      <label className={css.label} htmlFor="tel">
        Number
      </label>
      <input type="tel" id="tel" className={css.input} />

      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
