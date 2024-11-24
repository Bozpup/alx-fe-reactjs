// import React, { useState } from "react";
// import * as Yup from "yup";

// const validationSchema = Yup.object({
//   username: Yup.string().required("Username is required!"),
//   email: Yup.string().email("Email is invalid").required("Email is required!"),
//   password: Yup.string()
//     .min(8, "Password should be at least 8 characters long")
//     .max(20, "Password should not exceed 20 characters")
//     .required("Password is required!"),
// });

// const formikForm = () => {
//   const [formValues, setFormValues] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await validationSchema.validate(formValues, { abortEarly: false });
//       console.log("Form Submitted Successfully:", formValues);
//       setErrors({});
//     } catch (validationErrors) {
//       const errorMessages = validationErrors.inner.reduce((acc, error) => {
//         acc[error.path] = error.message;
//         return acc;
//       }, {});
//       setErrors(errorMessages);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username</label>
//         <input
//           id="username"
//           name="username"
//           value={formValues.username}
//           onChange={handleChange}
//         />
//         {errors.username && <div>{errors.username}</div>}
//       </div>
//       <div>
//         <label htmlFor="email">Email</label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           value={formValues.email}
//           onChange={handleChange}
//         />
//         {errors.email && <div>{errors.email}</div>}
//       </div>
//       <div>
//         <label htmlFor="password">Password</label>
//         <input
//           id="password"
//           name="password"
//           type="password"
//           value={formValues.password}
//           onChange={handleChange}
//         />
//         {errors.password && <div>{errors.password}</div>}
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default formikForm;
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "Yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Usernme is required!!!"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(8, "Password should be longer than 8")
    .max(20, "Pass word shouldnt be longer than 20")
    .required("pasword required"),
});
const formikForm = () => {
  <Formik
    initialValues={{ name: "", email: "", password: "" }}
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
        <Field type="text/number" name="password" />
        <ErrorMessage name="password" component="div" />
        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>;
};

export default formikForm;
