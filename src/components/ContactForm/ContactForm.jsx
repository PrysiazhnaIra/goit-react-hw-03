import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  message: Yup.string()
    .min(3, "Too short")
    .max(256, "Too long")
    .required("Required"),
  level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required"),
});

// const initialValues = {
//   username: "",
//   email: "",
// };

export const ContactForm = () => {
  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   const form = evt.target;
  //   form.reset();
  // };

  // const initialValues = {
  //   username: "",
  //   email: "",
  // };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik initialValues={{ name: "", tel: "" }} onSubmit={handleSubmit}>
      <Form onSubmit={handleSubmit} className={css.form}>
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
      </Form>
    </Formik>
  );
};

export default ContactForm;
