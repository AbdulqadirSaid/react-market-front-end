import LoginForm from "./LoginForm";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";

//ADMIN-RELATED COMPONENTS//
import AdminDash from "./admin/AdminDashboard";
import ManageCustomers from "./admin/ManageCustomers";
import ManageMarketOwners from "./admin/ManageMarketOwner";
import GenerateReport from "./admin/GenerateReport";
import AccountSettings from "./admin/AccountSetting";


//OWNER-RELATED COMPONENTS//
import OwnerDash from "./owner/OwnerDashboard";
import ManageMarketInfo from "./owner/ManageMarketInfo";
import ManageBookings from "./owner/ManageBookings";
impo

//CUSTOMER-RELATED COMPONENTS//
import CustomerDash from "./customer/CustomerDashboard";
import BrowseMarket from "./customer/BrowseMarket";
import BookingForm from "./customer/BookingForm"; 
import BookingInfo from "./customer/BookingInfo";
import ManagePayment from "./customer/ManagePayment";
import SystemSetting from "./customer/SystemSetting";

function App() {
  return (
    // <><LoginForm />
    // <Dashboard/>
    // </>

    <Routes>
      <Route path="/" element={<LoginForm />} />

      {/* Admin */}

      <Route path="/admin-dash" element={<AdminDash />} />
      <Route path="/manage-customer" element={<ManageCustomers />} />
      <Route path="/market-owner" element={<ManageMarketOwners />} />
      <Route path="/generate-report" element={<GenerateReport />} />
      <Route path="/account-setting" element={<AccountSettings/>} />
      

      {/* Owner */}
u
      <Route path="/owner-dash" element={<OwnerDash />} />
      <Route path="/market-info" element={<ManageMarketInfo />} />
      <Route path="/manage-bookings" element={<ManageBookings />} />


      {/* Customer  */}

      <Route path="/dashboard" element={<CustomerDash />} />

      <Route path="/browse-market" element={<BrowseMarket />} />

      <Route path="/booking" element={<BookingForm />} />
      <Route path="/booking-info" element={<BookingInfo />} />
      <Route path="/manage-payment" element={<ManagePayment />} />
      <Route path="/system-setting" element={<SystemSetting />} />
    </Routes>
  );
}

export default App;
