// src/admin/ManageMarketOwners.js
import React, { useState, useEffect } from 'react';

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
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleStatusFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const handleViewDetails = (ownerId) => {
    alert(`Viewing details for market owner: ${ownerId}`);
  };

  const handleEditOwner = (ownerId) => {
    alert(`Editing market owner: ${ownerId}`);
  };

  const handleToggleStatus = (ownerId, currentStatus) => {
    const newStatus = currentStatus === 'Active' ? 'Inactive' : 'Active';
    if (window.confirm(`Are you sure you want to ${newStatus.toLowerCase()} market owner ${ownerId}?`)) {
      setMarketOwners(marketOwners.map(owner =>
        owner.id === ownerId ? { ...owner, status: newStatus } : owner
      ));
      alert(`Market owner ${ownerId} status changed to ${newStatus}.`);
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
    <div className="container-fluid mt-4">
      <h2 className="mb-4 text-primary">Manage Market Owners</h2>
      <p className="mb-4 text-muted">View, search, and manage all market owner accounts in the system. You can update their profiles or change their access status, and see which market they manage.</p>

      <div className="card shadow-sm p-3 mb-4 bg-light">
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

      <div className="card shadow-lg p-4 bg-white">
        <div className="table-responsive">
          <table className="table table-hover table-striped align-middle">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Full Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Managed Market</th> {/* New field */}
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
                    <td>{owner.market}</td> {/* Display managed market */}
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

        <nav aria-label="Market owner pagination" className="mt-4">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ManageMarketOwners;