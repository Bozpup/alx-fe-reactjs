// import React, { useState } from "react";

// function RegistrationForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleForm = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Welcome ${formData.name}`);
//   };
//   console.log();
//   return (
//     <div>
//       <input name="name" value={formData.name} onChange={handleForm} />
//       <input name="email" value={formData.email} onChange={handleForm} />
//       <input name="password" value={formData.password} onChange={handleForm} />
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// }
// export default RegistrationForm;
import React, { useState } from "react";

function RegistrationForm() {
  // Initial form state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Error state for validation messages
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Basic validation logic
  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors if validation fails
    } else {
      alert(`Registration Successful: \nUsername: ${formData.username}`);
      setErrors({}); // Clear errors on successful submission
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username} // Controlled component
            onChange={handleInputChange}
          />
          {errors.username && (
            <div style={{ color: "red" }}>{errors.username}</div>
          )}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email} // Controlled component
            onChange={handleInputChange}
          />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password} // Controlled component
            onChange={handleInputChange}
          />
          {errors.password && (
            <div style={{ color: "red" }}>{errors.password}</div>
          )}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
