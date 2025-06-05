// src/owner/ManageMarketInfo.js
import React, { useState, useEffect } from 'react';

// Import market images (ensure paths are correct)
import jumbiMarketImg from '../images/Jumbi-Image.jpg';
import mwanakwerekweMarketImg from '../images/Kwere_Image.jpg';
import defaultMarketImage from '../images/default-market.jpg'; // Fallback image

const ManageMarketInfo = () => {
  // Market data state
  const [allMarkets, setAllMarkets] = useState([
    {
      id: 'jumbi',
      name: 'Jumbi Market',
      address: 'Uwanja wa Ndege Rd, Zanzibar, Tanzania',
      description: 'The vibrant heart of local produce and traditional goods in Zanzibar Town. Offering fresh fruits, vegetables, spices, and artisanal crafts.',
      operatingHours: 'Monday - Saturday: 7:00 AM - 6:00 PM',
      contactEmail: 'jumbi.market@example.com',
      contactPhone: '+255 778 123 456',
      marketImage: jumbiMarketImg,
      amenities: ['Parking Available', 'Restrooms', 'ATM Nearby', 'Fresh Produce Stalls'],
      rules: 'No smoking within market premises, keep stalls clean.',
    },
    {
      id: 'mwanakwerekwe',
      name: 'Mwanakwerekwe Market',
      address: 'Mwanakwerekwe, Zanzibar City, Tanzania',
      description: 'Zanzibar\'s largest and most bustling market, known for its diverse range of spices, textiles, seafood, and everyday essentials.',
      operatingHours: 'Daily: 6:00 AM - 7:00 PM',
      contactEmail: 'mwanakwerekwe.market@example.com',
      contactPhone: '+255 712 987 654',
      marketImage: mwanakwerekweMarketImg,
      amenities: ['Parking Available', 'Variety of Stalls', 'Spice Section', 'Textile Section'],
      rules: 'Bargaining encouraged, dispose of waste properly.',
    },
  ]);

  const [selectedMarketId, setSelectedMarketId] = useState('jumbi');
  const [isEditing, setIsEditing] = useState(false);
  const [newMarketImageFile, setNewMarketImageFile] = useState(null);
  const [previewImageUrl, setPreviewImageUrl] = useState(null);

  const currentMarket = allMarkets.find(market => market.id === selectedMarketId);

  // Image preview handler
  useEffect(() => {
    if (newMarketImageFile) {
      const url = URL.createObjectURL(newMarketImageFile);
      setPreviewImageUrl(url);
      return () => URL.revokeObjectURL(url); // Cleanup
    } else {
      setPreviewImageUrl(currentMarket?.marketImage || defaultMarketImage);
    }
  }, [newMarketImageFile, currentMarket]);

  // Form handlers
  const handleSave = (e) => {
    e.preventDefault();
    if (newMarketImageFile) {
      // Simulate image upload (replace with actual API call)
      setAllMarkets(prev => prev.map(m => 
        m.id === selectedMarketId ? { ...m, marketImage: previewImageUrl } : m
      ));
    }
    setIsEditing(false);
    alert(`Changes saved for ${currentMarket.name}!`);
  };

  return (
    <div className="container py-4">
      <div className="card border-0 shadow-lg">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">
            <i className="bi bi-shop me-2"></i>
            Manage Market Information
          </h3>
        </div>

        <div className="card-body">
          {/* Market Selector */}
          <div className="row mb-4">
            <div className="col-md-6">
              <label className="form-label fw-bold">Select Market:</label>
              <select
                className="form-select"
                value={selectedMarketId}
                onChange={(e) => {
                  setSelectedMarketId(e.target.value);
                  setIsEditing(false);
                }}
                disabled={isEditing}
              >
                {allMarkets.map(market => (
                  <option key={market.id} value={market.id}>{market.name}</option>
                ))}
              </select>
            </div>
          </div>

          {!isEditing ? (
            /* --- VIEW MODE --- */
            <div>
              <div className="text-center mb-4">
                <img
                  src={previewImageUrl}
                  alt={currentMarket.name}
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                <h2 className="mt-3 text-primary">{currentMarket.name}</h2>
                <p className="text-muted">
                  <i className="bi bi-geo-alt-fill me-1"></i>
                  {currentMarket.address}
                </p>
              </div>

              <div className="row g-3">
                {/* Market Details */}
                <div className="col-md-6">
                  <div className="card h-100 border-light shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">
                        <i className="bi bi-info-circle-fill text-primary me-2"></i>
                        Details
                      </h5>
                      <p>{currentMarket.description}</p>
                      <p className="mb-1">
                        <strong>Hours:</strong> {currentMarket.operatingHours}
                      </p>
                      <p className="mb-1">
                        <strong>Contact:</strong> {currentMarket.contactPhone}
                      </p>
                      <p>
                        <strong>Email:</strong> {currentMarket.contactEmail}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Amenities & Rules */}
                <div className="col-md-6">
                  <div className="card h-100 border-light shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">
                        <i className="bi bi-list-check text-primary me-2"></i>
                        Amenities
                      </h5>
                      <ul className="list-group list-group-flush">
                        {currentMarket.amenities.map((item, i) => (
                          <li key={i} className="list-group-item">
                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                <button
                  className="btn btn-primary me-md-2"
                  onClick={() => setIsEditing(true)}
                >
                  <i className="bi bi-pencil-square me-2"></i>
                  Edit Market
                </button>
              </div>
            </div>
          ) : (
            /* --- EDIT MODE --- */
            <form onSubmit={handleSave}>
              <div className="mb-4">
                <label className="form-label fw-bold">Market Image</label>
                <div className="mb-3 text-center">
                  <img
                    src={previewImageUrl}
                    alt="Preview"
                    className="img-thumbnail mb-2"
                    style={{ maxHeight: '300px' }}
                  />
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={(e) => setNewMarketImageFile(e.target.files[0])}
                  />
                </div>
              </div>

              <div className="row g-3">
                {/* Editable Fields */}
                <div className="col-md-6">
                  <label className="form-label">Market Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentMarket.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentMarket.address}
                    onChange={(e) => handleChange('address', e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Add other editable fields similarly... */}

              <div className="d-flex justify-content-end gap-2 mt-4">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-success">
                  <i className="bi bi-save me-2"></i>
                  Save Changes
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageMarketInfo;