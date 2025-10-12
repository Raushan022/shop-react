import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";
import "remixicon/fonts/remixicon.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
