import LoginForm from './LoginForm'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './admin/Dashboard';
import OwnerDash from './owner/OwnerDashboard'
import CustDash from './customer/CustomerDashboard'
import { Route, Routes } from 'react-router-dom';

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

      <Route path='/dashboard' element={<CustDash/>} />



    </Routes>
  );
}

export default App;
