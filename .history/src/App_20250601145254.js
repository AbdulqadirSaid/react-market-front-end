// src/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext, AuthProvider } from './contexts/AuthContext';

// Import your components
import LoginPage from './LoginPage';
import AdminDashboard from './components/Admin/AdminDashboard';
import CustomerDashboard from './components/Customer/CustomerDashboard';
import MarketOwnerDashboard from './components/MarketOwner/MarketOwnerDashboard';
import Navbar from './components/Common/Navbar';
import Sidebar from './components/Common/Sidebar';

// A simple ProtectedRoute component
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />; // Or redirect to their own dashboard
  }

  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="d-flex" style={{ minHeight: '100vh' }}>
          {/* Conditional Navbar and Sidebar based on authentication */}
          <AppContent />
        </div>
      </Router>
    </AuthProvider>
  );
}

const AppContent = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user && <Sidebar />} {/* Show sidebar only if logged in */}
      <div className="flex-grow-1 d-flex flex-column">
        {user && <Navbar />} {/* Show navbar only if logged in */}
        <main className="flex-grow-1 p-3">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={user ? <Navigate to={`/${user.role}-dashboard`} replace /> : <Navigate to="/login" replace />} />

            <Route
              path="/admin-dashboard/*"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/customer-dashboard/*"
              element={
                <ProtectedRoute allowedRoles={['customer']}>
                  <CustomerDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/marketowner-dashboard/*"
              element={
                <ProtectedRoute allowedRoles={['marketowner']}>
                  <MarketOwnerDashboard />
                </ProtectedRoute>
              }
            />
            {/* Add a generic unauthorized or 404 page */}
            <Route path="/unauthorized" element={<div>You are not authorized to view this page.</div>} />
          </Routes>
        </main>
        {/* {user && <Footer />}  Optional footer */}
      </div>
    </>
  );
};

export default App;