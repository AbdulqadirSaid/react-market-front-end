import LoginForm from "./LoginForm";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";

//ADMIN-RELATED COMPONENTS//
import AdminDash from "./admin/AdminDashboard";

import OwnerDash from "./owner/OwnerDashboard";

//CUSTOMER-RELATED COMPONENTS
import CustDash from "./customer/CustomerDashboard";
import BrowseMarket from "./customer/BrowseMarket";


import BookingForm from "./customer/BookingForm"; 
import BookingInfo from "./customer/BookingInfo";
import ManagePayment from "./customer/ManagePayment";
import SystemSetting from "./customer/SystemSetting";
//import Header from "./components/Header";
//import Sidebar from "./components/Sidebar";
//import Footer from "./components/Footer";
;

function App() {
  return (
    // <><LoginForm />
    // <Dashboard/>
    // </>

    <Routes>
      <Route path="/" element={<LoginForm />} />

      {/* Admin */}

      <Route path="/admin-dash" element={<AdminDash />} />
      <Route path="/account-setting" element={<}

      {/* Owner */}

      <Route path="/owner-dash" element={<OwnerDash />} />

      {/* Customer  */}

      <Route path="/dashboard" element={<CustDash />} />

      <Route path="/browse-market" element={<BrowseMarket />} />

      <Route path="/booking" element={<BookingForm />} />
      <Route path="/booking-info" element={<BookingInfo />} />
      <Route path="/manage-payment" element={<ManagePayment />} />
      <Route path="/system-setting" element={<SystemSetting />} />
    </Routes>
  );
}

export default App;
