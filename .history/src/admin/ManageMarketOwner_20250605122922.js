// src/admin/ManageMarketOwners.js
import React, { useState, useEffect } from 'react';
import Header from "../components/Header"; // Import Header
import Sidebar from "../components/Sidebar"; // Import Sidebar
import Footer from "../components/Footer"; // Import Footer

const initialMarketOwners = [
  {
    id: 'OWNER001',
    name: 'Salim Abdullah',
    username: 'salim.abd',
    email: 'salim.abd@market.com',
    phone: '+255 777 987 654',
    market: 'Jumbi Market',
    status: 'Active',
    joinedDate: '2022-11-01',
    lastLogin: '2024-05-29',
  },
  {
    id: 'OWNER002',
    name: 'Mariam Said',
    username: 'mariam.s',
    email: 'mariam.s@market.com',
    phone: '+255 715 123 456',
    market: 'Mwanakwerekwe Market',
    status: 'Active',
    joinedDate: '2023-01-20',
    lastLogin: '2024-06-02',
  },
  {
    id: 'OWNER003',
    name: 'Ahmed Hassan',
    username: 'ahmed.h',
    email: 'ahmed.h@market.com',
    phone: '+255 784 765 432',
    market: 'Kiembe Samaki Market',
    status: 'Inactive',
    joinedDate: '2023-03-10',
    lastLogin: '2024-04-05',
  },
  {
    id: 'OWNER004',
    name: 'Zainab Omar',
    username: 'zainab.o',
    email: 'zainab.o@market.com',
    phone: '+255 678 345 987',
    market: 'Darajani Market',
    status: 'Active',
    joinedDate: '2023-06-15',
    lastLogin: '2024-05-31',
  },
];

const ManageMarketOwners = () => {
  const [marketOwners, setMarketOwners] = useState(initialMarketOwners);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All'); // 'All', 'Active', 'Inactive'

  useEffect(() => {
    console.log("Fetching market owner data for admin management...");
    // In a real application, you'd fetch data here from an API
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleStatusFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const handleViewDetails = (ownerId) => {
    alert(`Viewing details for market owner: ${ownerId}`);
    // In a real app, you'd open a modal or navigate to a details page
  };

  const handleEditOwner = (ownerId) => {
    alert(`Editing market owner: ${ownerId}`);
    // In a real app, you'd open a modal with a form or navigate to an edit page
  };

  const handleToggleStatus = (ownerId, currentStatus) => {
    const newStatus = currentStatus === 'Active' ? 'Inactive' : 'Active';
    if (window.confirm(`Are you sure you want to ${newStatus.toLowerCase()} market owner ${ownerId}?`)) {
      setMarketOwners(marketOwners.map(owner =>
        owner.id === ownerId ? { ...owner, status: newStatus } : owner
      ));
      alert(`Market owner ${ownerId} status changed to ${newStatus}.`);
      // In a real app, you'd send an API request to update the status
    }
  };

  const filteredMarketOwners = marketOwners.filter(owner => {
    const matchesSearch = searchTerm === '' ||
      owner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      owner.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      owner.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      owner.phone.includes(searchTerm) ||
      owner.market.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = filterStatus === 'All' || owner.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    // Main container for the entire page, takes full viewport height
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: "#f5f7fa" }}>
      {/* Header component at the top */}
      <Header />

      {/* Content area: Sidebar and Main Content, takes remaining height */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar component on the left */}
        <Sidebar userRole="Admin" /> {/* Pass 'Admin' role to the Sidebar */}

        {/* Main content area, takes remaining width, grows, and has scroll */}
        <main className="flex-grow-1 overflow-auto p-3" style={{ backgroundColor: "#f8f9fa" }}>
          <div className="container-fluid mt-4">
            <div className="card shadow-lg p-4 bg-white border-0 rounded-4">
              <h2 className="mb-4 text-primary fw-bold"><i className="bi bi-shop-window me-3"></i>Manage Market Owners</h2>
              <p className="mb-4 text-muted lead">View, search, and manage all market owner accounts in the system. You can update their profiles or change their access status, and see which market they manage.</p>

              <div className="card shadow-sm p-3 mb-4 bg-light rounded-3">
                <div className="row g-3 align-items-center">
                  <div className="col-md-6">
                    <div className="input-group">
                      <span className="input-group-text bg-white border-end-0"><i className="bi bi-search"></i></span>
                      <input
                        type="text"
                        className="form-control border-start-0"
                        placeholder="Search by name, market, email, or phone..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <select
                      className="form-select"
                      value={filterStatus}
                      onChange={handleStatusFilterChange}
                    >
                      <option value="All">All Statuses</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                  <div className="col-md-3 text-end">
                    <button className="btn btn-success">
                      <i className="bi bi-person-add me-2"></i>Add New Market Owner
                    </button>
                  </div>
                </div>
              </div>

              <div className="card shadow-lg p-4 bg-white rounded-3">
                <div className="table-responsive">
                  <table className="table table-hover table-striped align-middle">
                    <thead className="table-dark">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Managed Market</th>
                        <th scope="col">Status</th>
                        <th scope="col">Joined Date</th>
                        <th scope="col">Last Login</th>
                        <th scope="col" className="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredMarketOwners.length > 0 ? (
                        filteredMarketOwners.map((owner, index) => (
                          <tr key={owner.id}>
                            <td>{index + 1}</td>
                            <td>{owner.name}</td>
                            <td>{owner.username}</td>
                            <td>{owner.email}</td>
                            <td>{owner.phone}</td>
                            <td>{owner.market}</td>
                            <td>
                              <span className={`badge ${owner.status === 'Active' ? 'bg-success' : 'bg-danger'}`}>
                                {owner.status}
                              </span>
                            </td>
                            <td>{owner.joinedDate}</td>
                            <td>{owner.lastLogin}</td>
                            <td className="text-center">
                              <div className="d-flex justify-content-center gap-2">
                                <button
                                  className="btn btn-sm btn-outline-info"
                                  onClick={() => handleViewDetails(owner.id)}
                                  title="View Owner Details"
                                >
                                  <i className="bi bi-eye"></i>
                                </button>
                                <button
                                  className="btn btn-sm btn-outline-primary"
                                  onClick={() => handleEditOwner(owner.id)}
                                  title="Edit Owner Profile"
                                >
                                  <i className="bi bi-pencil"></i>
                                </button>
                                <button
                                  className={`btn btn-sm ${owner.status === 'Active' ? 'btn-outline-danger' : 'btn-outline-success'}`}
                                  onClick={() => handleToggleStatus(owner.id, owner.status)}
                                  title={owner.status === 'Active' ? 'Deactivate Owner' : 'Activate Owner'}
                                >
                                  <i className={`bi ${owner.status === 'Active' ? 'bi-person-x' : 'bi-person-check'}`}></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="10" className="text-center py-4 text-muted">No market owners found matching your criteria.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <nav aria-label="Market owner pagination" className="mt-4">
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      {/* Changed href="#" to href="#!" and added role="button" */}
                      <a className="page-link" href="#!" role="button" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li className="page-item active">
                      {/* Changed href="#" to href="#!" and added role="button" */}
                      <a className="page-link" href="#!" role="button">1</a>
                    </li>
                    <li className="page-item">
                      {/* Changed href="#" to href="#!" and added role="button" */}
                      <a className="page-link" href="#!" role="button">2</a>
                    </li>
                    <li className="page-item">
                      {/* Changed href="#" to href="#!" and added role="button" */}
                      <a className="page-link" href="#!" role="button">3</a>
                    </li>
                    <li className="page-item">
                      {/* Changed href="#" to href="#!" and added role="button" */}
                      <a className="page-link" href="#!" role="button" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* Footer component at the bottom */}
      <Footer />
    </div>
  );
};

export default ManageMarketOwners;