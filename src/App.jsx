import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import Home from "./pages/home/Home";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

const MainLayout = ({ component: Component }) => {
  return (
    <React.Fragment>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Component />
      </div>
    </React.Fragment>
  );
};

const app = () => {
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser.isAdmin;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {admin && (
            <>
              <Route exact path="/" element={<MainLayout component={Home} />} />
              <Route
                path="/users"
                element={<MainLayout component={UserList} />}
              />
              <Route
                path="/user/:userID"
                element={<MainLayout component={User} />}
              />
              <Route
                path="/newUser"
                element={<MainLayout component={NewUser} />}
              />
              <Route
                path="/products"
                element={<MainLayout component={ProductList} />}
              />
              <Route
                path="/product/:productId"
                element={<MainLayout component={Product} />}
              />
              <Route
                path="/newProduct"
                element={<MainLayout component={NewProduct} />}
              />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default app;
