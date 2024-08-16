import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Footer from "./customer/components/Footer/Footer";
import NavigationBar from "./customer/components/navigation/Navigation";
import Order from "./customer/components/Order/Order";
import OrderDetails from "./customer/components/Order/OrderDetails";
import Product from "./customer/components/Product/Product";
import ProductDetail from "./customer/components/ProductDetail/ProductDetail";
import HomePage from "./customer/pages/HomePage/HomePage";
import CustomerRoute from "./Routers/CustomerRoutes/CustomerRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<CustomerRoute />}></Route>
      </Routes>
      <div></div>
    </div>
  );
}

export default App;
