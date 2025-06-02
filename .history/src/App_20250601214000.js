// src/App.js
import LoginForm from "./LoginForm";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Assuming these are consumed by your individual Dashboard/Page components now
// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
// import Footer from "./components/Footer";

// If you have a general Dashboard component that was moved to AdminDashboard.js
import AdminDashboard from "./admin/Dashboard"; // This assumes your original 'Dashboard' was for admin
import OwnerDash from "./owner/OwnerDashboard";
import CustomerDashboard from "./customer/CustomerDashboard"; // <-- Ensure this is the correct import for the customer dashboard

import BrowseMarket from "./customer/BrowseMarket";
import { Route, Routes } from "react-router-dom";
import BookingInfo from "./customer/BookingInfo";
import ManagePayment from "./customer/ManagePayment";
import SystemSetting from "./customer/SystemSetting";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />

      {/* Admin Route */}
      <Route path="/admin-dash" element={<AdminDashboard />} />

      {/* Owner Route */}
      <Route path="/owner-dash" element={<OwnerDash />} />

      {/* Customer Routes - CustomerDashboard should render the Sidebar */}
      <Route path="/dashboard" element={<CustomerDashboard />} />
      <Route path="/browse-market" element={<BrowseMarket />} />
      <Route path="/booking-info" element={<BookingInfo />} />
      <Route path="/manage-payment" element={<ManagePayment />} />
      <Route path="/system-setting" element={<SystemSetting />} />
    </Routes>
  );
}

export default App;