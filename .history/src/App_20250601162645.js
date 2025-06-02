import LoginForm from './LoginForm'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './admin/Dashboard';
import OwnerDa
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <><LoginForm />
    // <Dashboard/>
    // </>

    <Routes>

      <Route path='/' element={<LoginForm/>} />

      <Route path='/admin-dash' element={<Dashboard/>} />

      <Route path='/owner-dash' element={<}
    </Routes>
  );
}

export default App;
