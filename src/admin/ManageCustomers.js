// src/admin/ManageCustomers.js
import React, { useState, useEffect } from "react";
import Header from "../components/Header"; // Import Header
import Sidebar from "../components/Sidebar"; // Import Sidebar
import Footer from "../components/Footer"; // Import Footer

const initialCustomers = [
  {
    id: "CUST001",
    name: "Aisha Juma",
    username: "aisha.j",
    email: "aisha.j@example.com",
    phone: "+255 712 345 678",
    status: "Active",
    joinedDate: "2023-01-15",
    lastLogin: "2024-05-30",
  },
  {
    id: "CUST002",
    name: "Bakari Ali",
    username: "bakari.a",
    email: "bakari.a@example.com",
    phone: "+255 754 876 543",
    status: "Active",
    joinedDate: "2023-02-20",
    lastLogin: "2024-06-01",
  },
  {
    id: "CUST003",
    name: "Zuwena Khamis",
    username: "zuwena.k",
    email: "zuwena.k@example.com",
    phone: "+255 789 123 456",
    status: "Inactive",
    joinedDate: "2023-03-01",
    lastLogin: "2024-04-10",
  },
  {
    id: "CUST004",
    name: "Hamad Said",
    username: "hamad.s",
    email: "hamad.s@example.com",
    phone: "+255 677 987 654",
    status: "Active",
    joinedDate: "2023-04-10",
    lastLogin: "2024-05-28",
  },
  {
    id: "CUST005",
    name: "Fatma Kassim",
    username: "fatma.k",
    email: "fatma.k@example.com",
    phone: "+255 765 234 876",
    status: "Active",
    joinedDate: "2023-05-05",
    lastLogin: "2024-05-29",
  },
];

const ManageCustomers = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
    console.log("Fetching customer data for admin management...");
    // In a real application, you'd fetch data here from an API
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleStatusFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const handleViewDetails = (customerId) => {
    alert(`Viewing details for customer: ${customerId}`);
    // In a real app, you'd open a modal or navigate to a details page
  };

  const handleEditCustomer = (customerId) => {
    alert(`Editing customer: ${customerId}`);
    // In a real app, you'd open a modal with a form or navigate to an edit page
  };

  const handleToggleStatus = (customerId, currentStatus) => {
    const newStatus = currentStatus === "Active" ? "Inactive" : "Active";
    if (
      window.confirm(
        `Are you sure you want to ${newStatus.toLowerCase()} customer ${customerId}?`
      )
    ) {
      setCustomers(
        customers.map((cust) =>
          cust.id === customerId ? { ...cust, status: newStatus } : cust
        )
      );
      alert(`Customer ${customerId} status changed to ${newStatus}.`);
      // In a real app, you'd send an API request to update the status
    }
  };

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      searchTerm === "" ||
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm);

    const matchesStatus =
      filterStatus === "All" || customer.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    // Main container for the entire page, takes full viewport height
    <div
      className="d-flex flex-column min-vh-100"
      style={{ backgroundColor: "#f5f7fa" }}
    >
      {/* Header component at the top */}
      <Header />

      {/* Content area: Sidebar and Main Content, takes remaining height */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar component on the left */}
        <Sidebar userRole="Admin" /> {/* Pass 'Admin' role to the Sidebar */}
        {/* Main content area, takes remaining width, grows, and has scroll */}
        <main
          className="flex-grow-1 overflow-auto p-3"
          style={{ backgroundColor: "#f8f9fa" }}
        >
          <div className="container-fluid mt-4">
            <div className="card shadow-lg p-4 bg-white border-0 rounded-4">
              <h2 className="mb-4 text-primary fw-bold">
                <i className="bi bi-people-fill me-3"></i>Manage Customers
              </h2>
              <p className="mb-4 text-muted lead">
                View, search, and manage all customer accounts registered in the
                system. You can update their profiles or change their access
                status.
              </p>

              <div className="card shadow-sm p-3 mb-4 bg-light rounded-3">
                <div className="row g-3 align-items-center">
                  <div className="col-md-6">
                    <div className="input-group">
                      <span className="input-group-text bg-white border-end-0">
                        <i className="bi bi-search"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control border-start-0"
                        placeholder="Search by name, username, email, or phone..."
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
                      <i className="bi bi-person-add me-2"></i>Add New Customer
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
                        <th scope="col">Status</th>
                        <th scope="col">Joined Date</th>
                        <th scope="col">Last Login</th>
                        <th scope="col" className="text-center">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredCustomers.length > 0 ? (
                        filteredCustomers.map((customer, index) => (
                          <tr key={customer.id}>
                            <td>{index + 1}</td>
                            <td>{customer.name}</td>
                            <td>{customer.username}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                            <td>
                              <span
                                className={`badge ${
                                  customer.status === "Active"
                                    ? "bg-success"
                                    : "bg-danger"
                                }`}
                              >
                                {customer.status}
                              </span>
                            </td>
                            <td>{customer.joinedDate}</td>
                            <td>{customer.lastLogin}</td>
                            <td className="text-center">
                              <div className="d-flex justify-content-center gap-2">
                                <button
                                  className="btn btn-sm btn-outline-info"
                                  onClick={() => handleViewDetails(customer.id)}
                                  title="View Customer Details"
                                >
                                  <i className="bi bi-eye"></i>
                                </button>
                                <button
                                  className="btn btn-sm btn-outline-primary"
                                  onClick={() =>
                                    handleEditCustomer(customer.id)
                                  }
                                  title="Edit Customer Profile"
                                >
                                  <i className="bi bi-pencil"></i>
                                </button>
                                <button
                                  className={`btn btn-sm ${
                                    customer.status === "Active"
                                      ? "btn-outline-danger"
                                      : "btn-outline-success"
                                  }`}
                                  onClick={() =>
                                    handleToggleStatus(
                                      customer.id,
                                      customer.status
                                    )
                                  }
                                  title={
                                    customer.status === "Active"
                                      ? "Deactivate Customer"
                                      : "Activate Customer"
                                  }
                                >
                                  <i
                                    className={`bi ${
                                      customer.status === "Active"
                                        ? "bi-person-x"
                                        : "bi-person-check"
                                    }`}
                                  ></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan="9"
                            className="text-center py-4 text-muted"
                          >
                            No customers found matching your criteria.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <nav aria-label="Customer pagination" className="mt-4">
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      {/* Changed href="#" to href="#!" and added role="button" */}
                      <a
                        className="page-link"
                        href="#!"
                        role="button"
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li className="page-item active">
                      {/* Changed href="#" to href="#!" and added role="button" */}
                      <a className="page-link" href="#!" role="button">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      {/* Changed href="#" to href="#!" and added role="button" */}
                      <a className="page-link" href="#!" role="button">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      {/* Changed href="#" to href="#!" and added role="button" */}
                      <a className="page-link" href="#!" role="button">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      {/* Changed href="#" to href="#!" and added role="button" */}
                      <a
                        className="page-link"
                        href="#!"
                        role="button"
                        aria-label="Next"
                      >
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

export default ManageCustomers;