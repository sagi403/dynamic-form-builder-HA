import { useContext } from "react";
import { FormContext } from "../context/FormContext";

const DemoForm = () => {
  const { form } = useContext(FormContext);

  return (
    <div className="container mx-auto px-4 border p-6 mt-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6 text-center">Demo Form</h2>
      {form.map((field, index) => (
        <div key={index} className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {field.label}{" "}
            {field.required && <span className="text-red-600">{"*"}</span>}
          </label>
          {renderInput(field)}
        </div>
      ))}
    </div>
  );
};

const renderInput = field => {
  switch (field.type) {
    case "text":
      return (
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      );
    case "checkbox":
      return <input type="checkbox" className="mr-2 align-middle" />;
    case "radio":
      return <input type="radio" className="mr-2 align-middle" />;
    case "dropdown":
      return (
        <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          {field.options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      );
    default:
      return null;
  }
};

export default DemoForm;
