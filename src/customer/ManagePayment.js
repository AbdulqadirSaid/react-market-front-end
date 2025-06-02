import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const ManagePayment = () => {
  const [bookingId, setBookingId] = useState('');
  const [generatedPayments, setGeneratedPayments] = useState([
    // Static data for demonstration
    { id: 1, bookingId: 'BK1001', controlNumber: 'CN789012345', status: 'Pending' },
    { id: 2, bookingId: 'BK1002', controlNumber: 'CN789012346', status: 'Confirmed' },
    { id: 3, bookingId: 'BK1003', controlNumber: 'CN789012347', status: 'Pending' },
    { id: 4, bookingId: 'BK1004', controlNumber: 'CN789012348', status: 'Pending' },
    { id: 5, bookingId: 'BK1005', controlNumber: 'CN789012349', status: 'Confirmed' },
  ]);

  const handleGenerateControlNumber = (e) => {
    e.preventDefault();
    if (bookingId.trim()) {
      // Simulate generating a unique control number
      const newControlNumber = `CN${Math.floor(100000000 + Math.random() * 900000000)}`;
      const newPayment = {
        id: generatedPayments.length + 1,
        bookingId: bookingId,
        controlNumber: newControlNumber,
        status: 'Pending',
      };
      setGeneratedPayments([...generatedPayments, newPayment]);
      setBookingId(''); // Clear the input field
    } else {
      alert('Please enter a Booking ID.');
    }
  };

  const handleConfirmPayment = (id) => {
    setGeneratedPayments(prevPayments =>
      prevPayments.map(payment =>
        payment.id === id ? { ...payment, status: 'Confirmed' } : payment
      )
    );
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-4" style={{ backgroundColor: '#f8f9fa' }}>
          <h2>Manage Payments</h2>

          {/* Form for generating control number */}
          <form onSubmit={handleGenerateControlNumber} className="mb-4 p-3 border rounded bg-white">
            <h4>Generate Control Number</h4>
            <div className="row g-3 align-items-end"> {/* Use g-3 for gutter spacing */}
              <div className="col-md-8"> {/* Wider column for input field */}
                <label htmlFor="bookingId" className="form-label">Booking ID</label>
                <input
                  type="text"
                  id="bookingId"
                  name="bookingId"
                  className="form-control"
                  value={bookingId}
                  onChange={(e) => setBookingId(e.target.value)}
                  placeholder="Enter Booking ID"
                  required
                />
              </div>
              <div className="col-md-4"> {/* Column for the button */}
                <button type="submit" className="btn btn-primary w-100">
                  Generate Control Number
                </button>
              </div>
            </div>
          </form>

          {/* Table for displaying generated control numbers */}
          <h4 className="mt-5 mb-3">Generated Control Numbers</h4>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Booking ID</th>
                  <th scope="col">Control Number</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {generatedPayments.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center">No control numbers generated yet.</td>
                  </tr>
                ) : (
                  generatedPayments.map((payment) => (
                    <tr key={payment.id}>
                      <td>{payment.bookingId}</td>
                      <td>{payment.controlNumber}</td>
                      <td>
                        <span className={`badge ${
                          payment.status === 'Confirmed' ? 'bg-success' : 'bg-warning text-dark'
                        }`}>
                          {payment.status}
                        </span>
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-success"
                          onClick={() => handleConfirmPayment(payment.id)}
                          disabled={payment.status === 'Confirmed'}
                        >
                          Confirm Payment
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ManagePayment;