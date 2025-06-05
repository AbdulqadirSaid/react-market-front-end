// src/admin/AccountSettings.js
import React, { useState, useEffect } from "react";
import Header from "../components/Header"; // Import Header
import Sidebar from "../components/Sidebar"; // Import Sidebar
import Footer from "../components/Footer"; // Import Footer

const AccountSettings = () => {
  // In a real application, you'd fetch the current admin's data here
  // For now, using placeholder data
  const [formData, setFormData] = useState({
    adminName: "Admin User",
    adminUsername: "admin.user",
    adminEmail: "admin@zanzibar.com",
    adminPhone: "+255 777 123 456",
    currentPassword: "", // For password change validation
    newPassword: "",
    confirmNewPassword: "",
    adminProfileImage: null, // Placeholder for existing image URL or file object
  });

  // Optional: Simulate fetching existing data on component mount
  useEffect(() => {
    // In a real app:
    // fetch('/api/admin/profile')
    //   .then(response => response.json())
    //   .then(data => setFormData(prev => ({ ...prev, ...data })))
    //   .catch(error => console.error('Error fetching admin data:', error));
    console.log("Fetching admin account settings...");
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic password validation
    if (
      formData.newPassword &&
      formData.newPassword !== formData.confirmNewPassword
    ) {
      alert("New password and confirm new password do not match.");
      return;
    }

    console.log("Admin Account Settings Submitted:", formData);
    // Here you would typically send formData to an API endpoint specific for admin profile updates
    // e.g., axios.put('/api/admin/account-settings', formData);

    alert("Admin settings saved successfully!");
    // Optional: Clear password fields after successful submission
    setFormData((prev) => ({
      ...prev,
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      // Note: Do not clear image if it's already uploaded. Handle on successful upload.
    }));
  };

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
              <h2 className="mb-4 text-primary fw-bold"><i className="bi bi-gear-fill me-3"></i>Admin Account Settings</h2>
              <p className="mb-4 text-muted lead">
                Manage your administrative profile details and security settings.
              </p>
              <form onSubmit={handleSubmit} className="mb-4">
                {/* Profile Information */}
                <h4 className="mb-3 text-secondary">Profile Information</h4>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="adminName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="adminName"
                      name="adminName"
                      className="form-control"
                      value={formData.adminName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="adminUsername" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      id="adminUsername"
                      name="adminUsername"
                      className="form-control"
                      value={formData.adminUsername}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-md-6">
                    <label htmlFor="adminEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="adminEmail"
                      name="adminEmail"
                      className="form-control"
                      value={formData.adminEmail}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="adminPhone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="adminPhone"
                      name="adminPhone"
                      className="form-control"
                      value={formData.adminPhone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Password Change */}
                <h4 className="mb-3 text-secondary mt-4">Change Password</h4>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="currentPassword" className="form-label">
                      Current Password
                    </label>
                    <input
                      type="password"
                      id="currentPassword"
                      name="currentPassword"
                      className="form-control"
                      value={formData.currentPassword}
                      onChange={handleChange}
                      // Only required if changing password
                    />
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-6">
                    <label htmlFor="newPassword" className="form-label">
                      New Password
                    </label>
                    <input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      className="form-control"
                      value={formData.newPassword}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="confirmNewPassword" className="form-label">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      id="confirmNewPassword"
                      name="confirmNewPassword"
                      className="form-control"
                      value={formData.confirmNewPassword}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Profile Image Upload */}
                <h4 className="mb-3 text-secondary mt-4">Profile Image</h4>
                <div className="mb-4">
                  <label htmlFor="adminProfileImage" className="form-label">
                    Upload New Profile Image
                  </label>
                  <input
                    type="file"
                    id="adminProfileImage"
                    name="adminProfileImage"
                    className="form-control"
                    onChange={handleChange}
                    accept="image/*"
                  />
                  {formData.adminProfileImage &&
                    typeof formData.adminProfileImage === "string" && (
                      <small className="form-text text-muted mt-2 d-block">
                        Current Image:{" "}
                        <a
                          href={formData.adminProfileImage}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View
                        </a>
                      </small>
                    )}
                </div>

                <div className="d-flex justify-content-end mt-4">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Save Admin Settings
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
      {/* Footer component at the bottom */}
      <Footer />
    </div>
  );
};

export default AccountSettings;