import LoginForm from './LoginForm'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './admin/Dashboard';
import OwnerDash from './owner/OwnerDashboard'
import CustDash from './customer/CustomerDashboard'
import BrowseMarket from './customer/BrowseMarket'

import { Route, Routes } from 'react-router-dom';
import BookingForm from './customer/BookingForm';

function App() {
  return (
    // <><LoginForm />
    // <Dashboard/>
    // </>

    <Routes>

      <Route path='/' element={<LoginForm/>} />


      {/* Admin */}

      <Route path='/admin-dash' element={<Dashboard/>} />


      {/* Owner */}

      <Route path='/owner-dash' element={<OwnerDash/>} />


      {/* Customer  */}

      <Route path='/dashboard' element={<CustDash/>} />

      <Route path='/browse-market' element={<BrowseMarket/>} />

      <Route path='/booking' element={<BookingForm/>} />
      <Route path='/booking-info' element



    </Routes>
  );
}

export default App;
