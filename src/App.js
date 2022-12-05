import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import AdminPage from "./Page/AdminPage";
import ErrorPage from "./Page/ErrorPage";
import HomePage from "./Page/HomePage";
import OrderStatus from "./Page/OrderStatus";
import SignIn from "./Page/SignIn";
import NewUser from "./Components/AdminContent/NewUser/NewUser";
import Pants from "./Components/AdminContent/Pants/Pants";
import Shirts from "./Components/AdminContent/Shirts/Shirts";
import Orders from "./Components/AdminContent/Orders/Orders";
import MyWorks from "./Components/AdminContent/MyWorks/MyWorks";
import NewOrder from "./Components/AdminContent/NewOrder/NewOrder";
import Payments from "./Components/AdminContent/Payments/Payments";
import OrderDetail from "./Components/AdminContent/Orders/OrderDetail";
import UserDetails from "./Components/AdminContent/UserDetails/UserDetails";
import Statistics from "./Components/AdminContent/Statistics/Statistics";
import PasswordReset from "./Page/PasswordReset";

import PrivateRoute from "./Components/PrivateRoute";
import ProtectByRole from "./Components/ProtectByRole";

import Message from "./utils/Message";
import Spinner from "./utils/Spinner";

function App() {
  const { loading, message } = useSelector((state) => state);

  return (
    <>
      {loading.isLoading && <Spinner />}
      {message.isShow && (
        <Message message={message.message} isFailed={message.isFailed} />
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<AdminPage />}>
            <Route path="" element={<MyWorks />} />
            <Route path="my-works" element={<MyWorks />} />
            <Route element={<ProtectByRole roles={["admin", "lead-tailor"]} />}>
              <Route path="new-order" element={<NewOrder />} />
              <Route path="orders" element={<Orders />} />
              <Route path="orders/:orderId" element={<OrderDetail />} />
              <Route path="pants" element={<Pants />} />
              <Route path="shirts" element={<Shirts />} />
            </Route>
            <Route element={<ProtectByRole roles={["admin"]} />}>
              <Route path="payments" element={<Payments />} />
              <Route path="new-user" element={<NewUser />} />
              <Route path="statistics" element={<Statistics />} />
            </Route>
            <Route path="userDetails" element={<UserDetails />} />
          </Route>
        </Route>
        <Route path="/status/:orderId" element={<OrderStatus />} />
        <Route path="/password-reset/:token" element={<PasswordReset />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
