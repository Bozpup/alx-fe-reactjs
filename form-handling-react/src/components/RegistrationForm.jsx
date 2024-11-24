import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "Yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Usernme is required!!!"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(8, "Password should be longer than 8")
    .max(20, "Password shouldnt be longer than 20")
    .required("password required"),
});
const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {() => (
        <Form>
          <label htmlFor="username">Username</label>
          <Field type="" name="username" />
          <ErrorMessage name="username" component="div" />
          <label htmlFor="email"> Email</label>
          <Field type="text" name="email" />
          <ErrorMessage name="email" component="div" />
          <label htmlFor="password">Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
