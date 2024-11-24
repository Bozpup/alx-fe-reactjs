import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome ${formData.name}`);
  };
  console.log();
  return (
    <div>
      <input name="name" value={formData.name} onChange={handleForm} />
      <input name="email" value={formData.email} onChange={handleForm} />
      <input name="password" value={formData.password} onChange={handleForm} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default RegistrationForm;
