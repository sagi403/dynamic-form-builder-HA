import { useContext, useEffect } from "react";
import { FormContext } from "../context/FormContext";

const DataDisplay = () => {
  const { formData, setFormData } = useContext(FormContext);

  useEffect(() => {
    return () => {
      setFormData({});
    };
  }, []);

  return (
    <div className="container mx-auto px-4 pt-10">
      <h1 className="text-2xl font-bold mb-6">Form Data</h1>
      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(formData, null, 2)}
      </pre>
    </div>
  );
};

export default DataDisplay;
