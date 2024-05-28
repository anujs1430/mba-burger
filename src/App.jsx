import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Shipping from "./components/Shipping";
import ConfirmOrder from "./components/ConfirmOrder";
import PaymentSuccess from "./components/PaymentSuccess";
import Login from "./components/Login";
import Profile from "./components/Profile";
import MyOrders from "./components/MyOrders";
import OrderDetails from "./components/OrderDetails";
import Dashboard from "./components/admin/Dashboard";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders";
import Notfound from "./components/Notfound";

import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/contact.scss";
import "./styles/about.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmOrder.scss";
import "./styles/paymentSuccess.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/dashboard.scss";
import "./styles/users.scss";
import "./styles/order.scss";
import "./styles/loader.scss";

const App = () => {
  return (
    <Router>
      <Header isAuthenticated={true} />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/shipping"} element={<Shipping />} />
        <Route path={"/confirmOrder"} element={<ConfirmOrder />} />
        <Route path={"/payment-success"} element={<PaymentSuccess />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/me"} element={<Profile />} />
        <Route path={"/myorders"} element={<MyOrders />} />
        <Route path={"/order/:id"} element={<OrderDetails />} />
        <Route path={"/admin/dashboard"} element={<Dashboard />} />
        <Route path={"/admin/users"} element={<Users />} />
        <Route path={"/admin/orders"} element={<Orders />} />
        <Route path={"*"} element={<Notfound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
