import { BrowserRouter, Routes, Route } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Admin/Dashboard";
import Customers from "./components/Admin/Customers";
import Products from "./components/Admin/Products";
import Payments from "./components/Admin/Payments";
import Settings from "./components/Admin/Settings";
import Orders from "./components/Admin/Orders";
import Home from "./components/Home";
import AllProducts from "./components/AllProducts";
import Category from "./components/Category";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "animate.css";
import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/category" element={<Category />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin">
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="payments" element={<Payments />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
