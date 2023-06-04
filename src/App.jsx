import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./screens/Homepage";
import BuildForm from "./screens/BuildForm";
import { FormProvider } from "./context/FormContext";

const App = () => {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/form-builder" element={<BuildForm />} />
        </Routes>
      </Router>
    </FormProvider>
  );
};

export default App;
