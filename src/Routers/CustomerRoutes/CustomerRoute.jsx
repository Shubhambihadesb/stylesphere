import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../customer/pages/HomePage/HomePage";
import Cart from "../../customer/components/Cart/Cart";
import NavigationBar from "../../customer/components/navigation/Navigation";
import Footer from "../../customer/components/Footer/Footer";
import Product from "../../customer/components/Product/Product";
import ProductDetails from "../../customer/components/ProductDetail/ProductDetail";
import Checkout from "../../customer/components/Checkout/Checkout";
import Order from "../../customer/components/Order/Order";
import OrderDetails from "../../customer/components/Order/OrderDetails";

const CustomerRoute = () => {
  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:level1/:level2/:level3" element={<Product />}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route
          path="/account/order/:orderId"
          element={<OrderDetails />}
        ></Route>
      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoute;
