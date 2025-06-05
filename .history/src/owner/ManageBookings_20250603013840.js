// src/owner/ManageBookings.js
import React, { useState, useEffect } from 'react';

const ManageBookings = () => {
  // State to hold booking data
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterStatus, setFilterStatus] = useState('All'); // 'All', 'Pending', 'Approved', 'Rejected'
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // In a real application, you would fetch bookings specific to this owner's markets
    // based on the authenticated owner's ID and potentially market IDs.
    // This is placeholder data.
    const fetchBookings = async () => {
      setLoading(true);
      setError(null);
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        const dummyBookings = [
          {
            id: 'BKG001',
            marketName: 'Jumbi Market',
            stallNumber: 'A1',
            vendorName: 'Mama Amina Spices',
            productCategory: 'Spices',
            bookingDate: '2025-06-15',
            duration: '1 day',
            totalPrice: 15000,
            status: 'Pending',
            requestDate: '2025-05-28',
            notes: 'Requires access to water near stall.',
          },
          {
            id: 'BKG002',
            marketName: 'Mwanakwerekwe Market',
            stallNumber: 'B12',
            vendorName: 'Fresh Fruits Co.',
            productCategory: 'Fruits & Vegetables',
            bookingDate: '2025-06-20',
            duration: '3 days',
            totalPrice: 45000,
            status: 'Approved',
            requestDate: '2025-05-25',
            notes: '',
          },
          {
            id: 'BKG003',
            marketName: 'Jumbi Market',
            stallNumber: 'C5',
            vendorName: 'Zanzibar Textiles',
            productCategory: 'Textiles',
            bookingDate: '2025-06-18',
            duration: '2 days',
            totalPrice: 30000,
            status: 'Rejected',
            requestDate: '2025-05-20',
            notes: 'Stall C5 already booked for this period.',
          },
          {
            id: 'BKG004',
            marketName: 'Mwanakwerekwe Market',
            stallNumber: 'D8',
            vendorName: 'Ali\'s Fish Stall',
            productCategory: 'Seafood',
            bookingDate: '2025-07-01',
            duration: '1 week',
            totalPrice: 100000,
            status: 'Pending',
            requestDate: '2025-05-30',
            notes: 'Needs refrigeration access.',
          },
          {
            id: 'BKG005',
            marketName: 'Jumbi Market',
            stallNumber: 'A2',
            vendorName: 'Crafty Hands',
            productCategory: 'Handicrafts',
            bookingDate: '2025-06-22',
            duration: '5 days',
            totalPrice: 75000,
            status: 'Approved',
            requestDate: '2025-05-29',
            notes: '',
          },
        ];
        setBookings(dummyBookings);
      } catch (err) {
        setError("Failed to fetch bookings. Please try again.");
        console.error("Booking fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleUpdateBookingStatus = (bookingId, newStatus) => {
    // In a real application, you would send an API request to update the status on the backend.
    setBookings(prevBookings =>
      prevBookings.map(booking =>
        booking.id === bookingId ? { ...booking, status: newStatus } : booking
      )
    );
    alert(`Booking ${bookingId} status updated to ${newStatus}! (Simulated)`);

    // Example API call (uncomment in real app):
    /*
    fetch(`/api/bookings/${bookingId}/status`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus })
    })
    .then(response => {
      if (!response.ok) throw new Error('Failed to update status');
      return response.json();
    })
    .then(updatedBooking => {
      setBookings(prevBookings =>
        prevBookings.map(booking =>
          booking.id === bookingId ? updatedBooking : booking
        )
      );
      alert(`Booking ${bookingId} status updated to ${newStatus}!`);
    })
    .catch(err => {
      console.error("Error updating booking status:", err);
      alert(`Failed to update booking ${bookingId} status.`);
      // Revert optimistic update or refetch
    });
    */
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesStatus = filterStatus === 'All' || booking.status === filterStatus;
    const matchesSearch = searchTerm === '' ||
                          booking.marketName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          booking.vendorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          booking.stallNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          booking.productCategory.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-warning text-dark';
      case 'Approved':
        return 'bg-success';
      case 'Rejected':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  };

  return (
    <div className="container-fluid mt-4">
      <div className="card shadow-lg p-4 bg-white">
        <h3 className="mb-4 text-primary">Manage Stall Bookings</h3>
        <p className="mb-4 text-muted">Review, approve, or reject booking requests for your market stalls.</p>

        {/* Filters and Search */}
        <div className="row mb-3 g-2">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search by market, vendor, stall..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <select
              className="form-select"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>

        {loading && (
          <div className="d-flex justify-content-center my-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {error && (
          <div className="alert alert-danger my-4" role="alert">
            {error}
          </div>
        )}

        {!loading && !error && filteredBookings.length === 0 && (
          <div className="alert alert-info my-4" role="alert">
            No bookings found matching your criteria.
          </div>
        )}

        {!loading && !error && filteredBookings.length > 0 && (
          <div className="table-responsive">
            <table className="table table-hover table-striped align-middle">
              <thead className="table-light">
                <tr>
                  <th scope="col">Market Name</th>
                  <th scope="col">Stall</th>
                  <th scope="col">Vendor</th>
                  <th scope="col">Category</th>
                  <th scope="col">Booking Date</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Price (Tsh)</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.marketName}</td>
                    <td><span className="badge bg-secondary">{booking.stallNumber}</span></td>
                    <td>{booking.vendorName}</td>
                    <td>{booking.productCategory}</td>
                    <td>{booking.bookingDate}</td>
                    <td>{booking.duration}</td>
                    <td>{booking.totalPrice.toLocaleString('en-TZ')}</td>
                    <td>
                      <span className={`badge ${getStatusBadgeClass(booking.status)}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td>
                      {booking.status === 'Pending' && (
                        <div className="d-flex flex-nowrap gap-1">
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() => handleUpdateBookingStatus(booking.id, 'Approved')}
                            title="Approve Booking"
                          >
                            <i className="bi bi-check-lg"></i>
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleUpdateBookingStatus(booking.id, 'Rejected')}
                            title="Reject Booking"
                          >
                            <i className="bi bi-x-lg"></i>
                          </button>
                        </div>
                      )}
                      {booking.status !== 'Pending' && (
                        <button
                          className="btn btn-info btn-sm"
                          onClick={() => alert(`Viewing details for ${booking.id}`)}
                          title="View Details"
                        >
                          <i className="bi bi-eye"></i>
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageBookings;