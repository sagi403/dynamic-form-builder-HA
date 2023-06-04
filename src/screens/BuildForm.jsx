import DemoForm from "../components/DemoForm";
import FormField from "../components/FormField";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { Link } from "react-router-dom";

const BuildForm = () => {
  const { form } = useContext(FormContext);

  return (
    <div className="container mx-auto px-4 pt-5">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Build Your Custom Form:
      </h2>

      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4">
          <FormField />
        </div>

        <div className="w-full md:w-1/2 px-4">
          {form && form.length !== 0 && <DemoForm />}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Create Form
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BuildForm;
