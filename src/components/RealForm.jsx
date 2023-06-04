import { useContext, useEffect, useState } from "react";
import { FormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";

const RealForm = () => {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { form, formData, setFormData } = useContext(FormContext);

  useEffect(() => {
    const initialFormData = {};

    for (const field of form) {
      if (field.type === "checkbox" || field.type === "radio") {
        initialFormData[field.label] = false;
      } else if (field.type === "dropdown") {
        initialFormData[field.label] = field.options[0];
      }
    }
    setFormData(initialFormData);
  }, []);

  const handleChange = (event, fieldName, fieldType) => {
    let value;

    if (fieldType === "check") {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }

    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const renderInput = field => {
    switch (field.type) {
      case "text":
        return (
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={e => handleChange(e, field.label, "text")}
          />
        );
      case "checkbox":
        return (
          <input
            type="checkbox"
            className="mr-2 align-middle"
            onChange={e => handleChange(e, field.label, "check")}
          />
        );
      case "radio":
        return (
          <input
            type="radio"
            className="mr-2 align-middle"
            onChange={e => handleChange(e, field.label, "check")}
          />
        );
      case "dropdown":
        return (
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={e => handleChange(e, field.label, "text")}
          >
            {field.options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
        );
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    for (const field of form) {
      if (field.required && !formData[field.label]) {
        setError(`Please fill in the ${field.label}`);
        return;
      }
    }

    setError("");
    navigate("/form-data");
  };

  return (
    <div className="container mx-auto px-4 border p-6 mt-6 bg-white shadow-md rounded w-96">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Form</h2>
      {form.map((field, index) => (
        <div key={index} className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {field.label}{" "}
            {field.required && <span className="text-red-600">{"*"}</span>}
          </label>
          {renderInput(field)}
        </div>
      ))}
      {error && <div className="text-red-600">{error}</div>}
      <div className="flex justify-center mt-6">
        <button
          className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default RealForm;
