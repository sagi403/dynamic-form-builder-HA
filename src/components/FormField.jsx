import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";

const FormField = () => {
  const { form, setForm } = useContext(FormContext);
  const [newField, setNewField] = useState({
    type: "",
    label: "",
    required: false,
    options: "",
  });

  const fieldTypes = ["text", "checkbox", "radio", "dropdown"];

  const handleAddField = e => {
    e.preventDefault();

    if (!newField.type || !newField.label) return;

    if (newField.type === "dropdown") {
      newField.options = newField.options.split(",");
    }

    setForm([...form, newField]);
    setNewField({ type: "", label: "", required: false, options: "" });
  };

  const handleInputChange = e => {
    setNewField({ ...newField, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = e => {
    setNewField({ ...newField, [e.target.name]: e.target.checked });
  };

  return (
    <form
      onSubmit={handleAddField}
      className="mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="type"
        >
          Field Type
        </label>
        <select
          name="type"
          value={newField.type}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select field type...</option>
          {fieldTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="label"
        >
          Field Label
        </label>
        <input
          type="text"
          name="label"
          value={newField.label}
          onChange={handleInputChange}
          placeholder="Field label"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      {newField.type === "dropdown" && (
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="options"
          >
            Dropdown Options (comma separated)
          </label>
          <input
            type="text"
            name="options"
            value={newField.options}
            onChange={handleInputChange}
            placeholder="Dropdown options (comma separated)"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      )}

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="required"
        >
          Required
        </label>
        <input
          type="checkbox"
          name="required"
          checked={newField.required}
          onChange={handleCheckboxChange}
          className="mr-2 align-middle"
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add field
        </button>
      </div>
    </form>
  );
};

export default FormField;
