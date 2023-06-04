import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
      <Link to="/form-builder">
        <button className="fixed top-4 left-4 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700">
          Build a form
        </button>
      </Link>
      <div className="text-center px-5">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Welcome to Dynamic Form Builder
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700">
          Experience the most intuitive way to create and manage forms. Click on
          &apos;Build a form&apos; to start crafting your own!
        </p>
      </div>
    </div>
  );
};

export default Homepage;
