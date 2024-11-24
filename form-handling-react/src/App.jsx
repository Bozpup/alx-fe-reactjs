import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FormikForm from "./components/FormikForm";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <>
      <FormikForm />
      <RegistrationForm />
    </>
  );
}

export default App;
