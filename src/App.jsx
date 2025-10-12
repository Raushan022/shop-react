import { BrowserRouter, Routes, Route } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import NotFound from "./components/NotFound";
import Products from "./components/Admin/Products";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin">
          <Route path="products" element={<Products />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
