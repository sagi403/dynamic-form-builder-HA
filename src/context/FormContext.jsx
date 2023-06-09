import { createContext, useState } from "react";
import PropTypes from "prop-types";

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [form, setForm] = useState([]);
  const [formData, setFormData] = useState({});

  return (
    <FormContext.Provider value={{ form, setForm, formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

FormProvider.propTypes = {
  children: PropTypes.node,
};

export { FormContext, FormProvider };
