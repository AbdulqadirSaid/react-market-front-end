// src/owner/ManageBookings.js
import React, { useState, useEffect, useMemo } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Header from "../components/Header"; // Import Header
import Sidebar from "../components/Sidebar"; // Import Sidebar
import Footer from "../components/Footer"; // Import Footer

// Helper function for date formatting (optional, you could use a library like moment.js or date-fns)
const formatDate = (dateString) => {
  if (!dateString) return '';
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('requestDate'); // Default sort
  const [sortOrder, setSortOrder] = useState('desc'); // 'asc' or 'desc'

  // State for the "View Details" modal
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  // State for confirmation dialogs
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [confirmAction, setConfirmAction] = useState({ id: null, status: null, marketName: '' });

  // useEffect to simulate fetching data (no actual backend call)
  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      setError(null);
      try {
        // Simulate API call delay with a timeout
        await new Promise(resolve => setTimeout(resolve, 1200));

        // Dummy data for bookings - entirely frontend-based
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
            requestDate: '2025-06-01',
            notes: 'Requires access to water near stall and nearby electricity.',
            vendorContact: 'amina@example.com, +255 777 111 222',
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
            notes: 'Requires large display area.',
            vendorContact: 'fruits.co@example.com, +255 711 333 444',
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
            notes: 'Stall C5 already booked for this period. Advised alternative.',
            vendorContact: 'zanzibartextiles@example.com',
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
            notes: 'Needs refrigeration access and daily cleaning.',
            vendorContact: 'ali.fish@example.com, +255 788 555 666',
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
            notes: 'Prefers shaded area.',
            vendorContact: 'craftyhands@example.com',
          },
          {
            id: 'BKG006',
            marketName: 'Mwanakwerekwe Market',
            stallNumber: 'F3',
            vendorName: 'Spice Route Sellers',
            productCategory: 'Spices',
            bookingDate: '2025-07-10',
            duration: '4 days',
            totalPrice: 60000,
            status: 'Pending',
            requestDate: '2025-06-03',
            notes: 'Looking for a prominent stall near the main entrance.',
            vendorContact: 'spice.route@example.com, +255 777 999 888',
          },
        ];
        setBookings(dummyBookings);
      } catch (err) {
        // In a real app, this would catch network errors
        setError("Failed to load bookings data (simulated error).");
        console.error("Simulated booking fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []); // Empty dependency array means this runs once on component mount

  // --- Filtering and Sorting Logic ---
  // useMemo re-calculates this only when bookings, searchTerm, filterStatus, sortBy, or sortOrder change
  const sortedAndFilteredBookings = useMemo(() => {
    let tempBookings = [...bookings]; // Create a mutable copy

    // 1. Search Filter
    if (searchTerm) {
      tempBookings = tempBookings.filter(booking =>
        booking.marketName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.vendorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.stallNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.productCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 2. Status Filter
    if (filterStatus !== 'All') {
      tempBookings = tempBookings.filter(booking => booking.status === filterStatus);
    }

    // 3. Sort
    tempBookings.sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];

      if (sortBy === 'totalPrice') {
        // Numeric sort for price
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      }
      // String and date comparisons
      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0; // Values are equal
    });

    return tempBookings;
  }, [bookings, searchTerm, filterStatus, sortBy, sortOrder]);

  // Derived state: only pending bookings from the filtered set
  const pendingBookings = sortedAndFilteredBookings.filter(b => b.status === 'Pending');

  // --- Action Handlers (frontend state updates only) ---

  // Initiates the confirmation modal for status change
  const initiateStatusUpdate = (id, newStatus, marketName) => {
    setConfirmAction({ id, status: newStatus, marketName });
    setShowConfirmModal(true);
  };

  // Confirms and applies the status update to local state
  const confirmUpdateBookingStatus = () => {
    const { id, status: newStatus } = confirmAction;
    setShowConfirmModal(false); // Close the confirmation modal

    // Simulate updating the status in the frontend's state
    setBookings(prevBookings =>
      prevBookings.map(booking =>
        booking.id === id ? { ...booking, status: newStatus } : booking
      )
    );
    // Provide user feedback (simulated)
    alert(`Booking ${id} status updated to ${newStatus}! (This is a simulated frontend update)`);

    // IMPORTANT: In a real application, you would send an API request here:
    /*
    fetch(`/api/bookings/${id}/status`, { // Example API endpoint
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus })
    })
    .then(response => {
      if (!response.ok) {
        // Handle HTTP errors
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json(); // Or response.text() if your API returns text
    })
    .then(updatedBookingFromServer => {
      // If the API returns the updated booking, use it
      setBookings(prevBookings =>
        prevBookings.map(booking =>
          booking.id === id ? updatedBookingFromServer : booking
        )
      );
      alert(`Booking ${id} status updated to ${newStatus} successfully!`);
    })
    .catch(err => {
      console.error("Error updating booking status:", err);
      alert(`Failed to update booking ${id} status due to an error.`);
      // Optionally, revert the UI state if the API call failed
    });
    */
  };

  // Handles displaying booking details in a modal
  const handleViewDetails = (booking) => {
    setSelectedBooking(booking);
    setShowDetailModal(true);
  };

  // Helper function for status badge styling
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-warning text-dark'; // Bootstrap warning for pending
      case 'Approved':
        return 'bg-success'; // Bootstrap success for approved
      case 'Rejected':
        return 'bg-danger'; // Bootstrap danger for rejected
      default:
        return 'bg-secondary'; // Default for unknown status
    }
  };

  // Handles sorting column clicks
  const handleSort = (column) => {
    if (sortBy === column) {
      // If same column, toggle sort order
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // If new column, set it as sortBy and default to ascending
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  // Renders sort icons in table headers
  const getSortIcon = (column) => {
    if (sortBy === column) {
      return sortOrder === 'asc' ? <i className="bi bi-sort-down ms-1"></i> : <i className="bi bi-sort-up ms-1"></i>;
    }
    // Neutral icon for non-sorted columns, slightly dimmed
    return <i className="bi bi-filter ms-1 text-muted"></i>;
  };

  return (
    // Main container for the entire page, takes full viewport height
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: "#f5f7fa" }}>
      {/* Header component at the top */}
      <Header />

      {/* Content area: Sidebar and Main Content, takes remaining height */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar component on the left */}
        <Sidebar userRole="Owner" /> {/* Pass appropriate userRole for sidebar navigation */}

        {/* Main content area, takes remaining width, grows, and has scroll */}
        <main className="flex-grow-1 overflow-auto p-3" style={{ backgroundColor: "#f8f9fa" }}> {/* Reduced padding */}
          {/* Main content card with shadow and padding */}
          <div className="card shadow-lg p-3 bg-white rounded-4"> {/* Reduced padding */}
            <h3 className="mb-2 text-primary text-center fw-bold"><i className="bi bi-calendar-check me-2"></i>Manage Stall Bookings</h3> {/* Reduced margin, centered */}
            <p className="mb-3 text-muted text-center small">Review, approve, or reject booking requests for your market stalls. Track all current and past bookings.</p> {/* Reduced margin, centered, smaller text */}

            {/* Loading indicator */}
            {loading && (
              <div className="d-flex justify-content-center my-3"> {/* Reduced margin */}
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}

            {/* Error message display */}
            {error && (
              <div className="alert alert-danger my-3" role="alert"> {/* Reduced margin */}
                {error}
              </div>
            )}

            {/* Render content only when not loading and no error */}
            {!loading && !error && (
              <>
                {/* Quick Actions for Pending Bookings (if any) */}
                {pendingBookings.length > 0 && (
                  <div className="mb-4"> {/* Reduced margin */}
                    <h4 className="mb-2 text-info text-center fw-bold"><i className="bi bi-hourglass-split me-2"></i>Pending Actions ({pendingBookings.length})</h4> {/* Reduced margin, centered */}
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3"> {/* Reduced gutter */}
                      {pendingBookings.map((booking) => (
                        <div className="col" key={booking.id}>
                          <div className="card h-100 shadow-sm border-warning border-2 bg-light"> {/* Reduced shadow, border thickness */}
                            <div className="card-body d-flex flex-column p-3"> {/* Reduced padding */}
                              <h6 className="card-title text-primary fw-bold mb-1 fs-6">{booking.vendorName}</h6> {/* Reduced font size */}
                              <p className="card-subtitle mb-1 text-muted small"> {/* Reduced margin, smaller text */}
                                <i className="bi bi-shop me-1"></i> {booking.marketName} - Stall {booking.stallNumber}
                              </p>
                              <p className="card-text mb-1 small">
                                <i className="bi bi-tag me-1"></i> Category: {booking.productCategory}
                              </p>
                              <p className="card-text mb-1 small">
                                <i className="bi bi-calendar-event me-1"></i> Date: {formatDate(booking.bookingDate)} for {booking.duration}
                              </p>
                              <p className="card-text mb-2 small">
                                <i className="bi bi-cash me-1"></i> Price: Tsh {booking.totalPrice.toLocaleString('en-TZ')}
                              </p>
                              {/* Removed notes to save vertical space if aiming for no scroll */}
                              {/* <p className="card-text mb-2 small text-truncate-2">
                                <i className="bi bi-sticky me-1"></i> Notes: {booking.notes || 'No specific notes.'}
                              </p> */}
                              <div className="mt-auto d-flex justify-content-between align-items-center pt-2"> {/* Reduced padding-top */}
                                <span className={`badge ${getStatusBadgeClass(booking.status)} fs-7 py-1 px-2`}> {/* Reduced font size, padding */}
                                  {booking.status}
                                </span>
                                <div>
                                  <button
                                    className="btn btn-success btn-sm me-1 py-1 px-2" // Reduced padding
                                    onClick={() => initiateStatusUpdate(booking.id, 'Approved', booking.marketName)}
                                    title="Approve Booking"
                                  >
                                    <i className="bi bi-check-lg"></i>
                                  </button>
                                  <button
                                    className="btn btn-danger btn-sm py-1 px-2" // Reduced padding
                                    onClick={() => initiateStatusUpdate(booking.id, 'Rejected', booking.marketName)}
                                    title="Reject Booking"
                                  >
                                    <i className="bi bi-x-lg"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* All Bookings Table Section */}
                <h4 className="mb-2 text-dark text-center fw-bold"><i className="bi bi-list-columns-reverse me-2"></i>All Bookings ({sortedAndFilteredBookings.length})</h4> {/* Reduced margin, centered */}

                {/* Filters and Search Input */}
                <div className="row mb-3 g-2 justify-content-center"> {/* Reduced margin, centered */}
                  <div className="col-md-5 col-lg-4"> {/* Adjusted column size */}
                    <input
                      type="text"
                      className="form-control form-control-sm" // Smaller control
                      placeholder="Search..." // Shorter placeholder
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="col-md-3 col-lg-2"> {/* Adjusted column size */}
                    <select
                      className="form-select form-select-sm" // Smaller control
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

                {/* Message if no bookings match criteria */}
                {sortedAndFilteredBookings.length === 0 && (
                  <div className="alert alert-info text-center my-3 py-2" role="alert"> {/* Reduced padding */}
                    No bookings found matching your criteria.
                  </div>
                )}

                {/* Bookings Table (only if there are bookings to display) */}
                {sortedAndFilteredBookings.length > 0 && (
                  <div className="table-responsive">
                    <table className="table table-hover table-striped align-middle table-sm"> {/* Smaller table */}
                      <thead className="table-light">
                        <tr>
                          {/* Table Headers with Sorting functionality */}
                          <th scope="col" onClick={() => handleSort('id')} style={{ cursor: 'pointer' }} className="py-2 small"> {/* Smaller font */}
                            Booking ID {getSortIcon('id')}
                          </th>
                          <th scope="col" onClick={() => handleSort('marketName')} style={{ cursor: 'pointer' }} className="py-2 small">
                            Market {getSortIcon('marketName')} {/* Shorter name */}
                          </th>
                          <th scope="col" onClick={() => handleSort('stallNumber')} style={{ cursor: 'pointer' }} className="py-2 small">
                            Stall {getSortIcon('stallNumber')}
                          </th>
                          <th scope="col" onClick={() => handleSort('vendorName')} style={{ cursor: 'pointer' }} className="py-2 small">
                            Vendor {getSortIcon('vendorName')}
                          </th>
                          <th scope="col" className="py-2 small">Category</th>
                          <th scope="col" onClick={() => handleSort('bookingDate')} style={{ cursor: 'pointer' }} className="py-2 small">
                            Book Date {getSortIcon('bookingDate')} {/* Shorter name */}
                          </th>
                          <th scope="col" className="py-2 small">Duration</th>
                          <th scope="col" onClick={() => handleSort('totalPrice')} style={{ cursor: 'pointer' }} className="py-2 small">
                            Price (Tsh) {getSortIcon('totalPrice')}
                          </th>
                          <th scope="col" onClick={() => handleSort('status')} style={{ cursor: 'pointer' }} className="py-2 small">
                            Status {getSortIcon('status')}
                          </th>
                          <th scope="col" className="py-2 small">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sortedAndFilteredBookings.map((booking) => (
                          <tr key={booking.id}>
                            <td className="small"><span className="badge bg-secondary-subtle text-secondary">{booking.id}</span></td> {/* Smaller font, lighter badge */}
                            <td className="small">{booking.marketName}</td>
                            <td className="small"><span className="badge bg-info-subtle text-info">{booking.stallNumber}</span></td> {/* Smaller font, lighter badge */}
                            <td className="small">{booking.vendorName}</td>
                            <td className="small">{booking.productCategory}</td>
                            <td className="small">{formatDate(booking.bookingDate)}</td>
                            <td className="small">{booking.duration}</td>
                            <td className="small">{booking.totalPrice.toLocaleString('en-TZ')}</td>
                            <td>
                              <span className={`badge ${getStatusBadgeClass(booking.status)} py-1 px-2`}> {/* Reduced padding */}
                                {booking.status}
                              </span>
                            </td>
                            <td>
                              <div className="d-flex flex-nowrap gap-1">
                                {/* Action buttons for Pending bookings */}
                                {booking.status === 'Pending' && (
                                  <>
                                    <button
                                      className="btn btn-success btn-sm p-1" // Even smaller padding
                                      onClick={() => initiateStatusUpdate(booking.id, 'Approved', booking.marketName)}
                                      title="Approve Booking"
                                    >
                                      <i className="bi bi-check-lg"></i>
                                    </button>
                                    <button
                                      className="btn btn-danger btn-sm p-1" // Even smaller padding
                                      onClick={() => initiateStatusUpdate(booking.id, 'Rejected', booking.marketName)}
                                      title="Reject Booking"
                                    >
                                      <i className="bi bi-x-lg"></i>
                                    </button>
                                  </>
                                )}
                                {/* Always show "View Details" button */}
                                <button
                                  className="btn btn-outline-primary btn-sm p-1" // Even smaller padding
                                  onClick={() => handleViewDetails(booking)}
                                  title="View Details"
                                >
                                  <i className="bi bi-eye"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </>
            )}
          </div>
        </main>
      </div>
      {/* Footer component at the bottom */}
      <Footer />

      {/* Booking Details Modal */}
      <Modal show={showDetailModal} onHide={() => setShowDetailModal(false)} size="lg" centered>
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title><i className="bi bi-info-circle me-2"></i>Booking Details: {selectedBooking?.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedBooking && (
            <div className="container-fluid small"> {/* Smaller font for modal body */}
              <div className="row mb-2"> {/* Reduced margin */}
                <div className="col-md-6">
                  <strong>Market Name:</strong> <p className="mb-0">{selectedBooking.marketName}</p> {/* Reduced margin */}
                </div>
                <div className="col-md-6">
                  <strong>Stall Number:</strong> <p className="mb-0">{selectedBooking.stallNumber}</p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6">
                  <strong>Vendor Name:</strong> <p className="mb-0">{selectedBooking.vendorName}</p>
                </div>
                <div className="col-md-6">
                  <strong>Product Category:</strong> <p className="mb-0">{selectedBooking.productCategory}</p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6">
                  <strong>Booking Date:</strong> <p className="mb-0">{formatDate(selectedBooking.bookingDate)}</p>
                </div>
                <div className="col-md-6">
                  <strong>Duration:</strong> <p className="mb-0">{selectedBooking.duration}</p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6">
                  <strong>Total Price:</strong> <p className="mb-0">Tsh {selectedBooking.totalPrice?.toLocaleString('en-TZ')}</p>
                </div>
                <div className="col-md-6">
                  <strong>Status:</strong> <p className="mb-0"><span className={`badge ${getStatusBadgeClass(selectedBooking.status)}`}>{selectedBooking.status}</span></p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6">
                  <strong>Request Date:</strong> <p className="mb-0">{formatDate(selectedBooking.requestDate)}</p>
                </div>
                <div className="col-md-6">
                  <strong>Vendor Contact:</strong> <p className="mb-0">{selectedBooking.vendorContact || 'N/A'}</p>
                </div>
              </div>
              <div className="mb-2"> {/* Reduced margin */}
                <strong>Notes:</strong> <p className="alert alert-secondary py-1 mb-0">{selectedBooking.notes || 'No specific notes from vendor.'}</p> {/* Reduced padding and margin */}
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDetailModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Confirmation Modal for Approve/Reject Actions */}
      <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)} centered>
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title><i className="bi bi-exclamation-triangle me-2"></i>Confirm Action</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {confirmAction.status === 'Approved' && (
            <p className="lead fs-6">Are you sure you want to <span className="text-success fw-bold">APPROVE</span> this booking for <span className="fw-bold">{confirmAction.marketName}</span>?</p>
          )}
          {confirmAction.status === 'Rejected' && (
            <p className="lead fs-6">Are you sure you want to <span className="text-danger fw-bold">REJECT</span> this booking for <span className="fw-bold">{confirmAction.marketName}</span>?</p>
          )}
          <p className="small text-muted mb-0">This action will update the booking status in the system (frontend simulation only).</p> {/* Removed margin-bottom */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmModal(false)} size="sm"> {/* Smaller buttons */}
            Cancel
          </Button>
          <Button
            variant={confirmAction.status === 'Approved' ? 'success' : 'danger'}
            onClick={confirmUpdateBookingStatus}
            size="sm" // Smaller buttons
          >
            {confirmAction.status === 'Approved' ? 'Yes, Approve' : 'Yes, Reject'}
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default ManageBookings;