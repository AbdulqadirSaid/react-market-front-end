// src/owner/ManageMarketInfo.js
import React, { useState, useEffect } from 'react';

// Import your market-specific images
import jumbiMarketImg from '../images/Jumbi-Image.jpg';
import mwanakwerekweMarketImg from '../images/Kwere_Image.jpg';
import defaultMarketImage from '../images/.jpg'; // Ensure this image exists or use a public URL

const ManageMarketInfo = () => {
  // Initial state for all markets the owner manages
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

  const [selectedMarketId, setSelectedMarketId] = useState('jumbi'); // Default to Jumbi
  const [isEditing, setIsEditing] = useState(false);
  const [newMarketImageFile, setNewMarketImageFile] = useState(null); // For new image upload (File object)
  const [previewImageUrl, setPreviewImageUrl] = useState(null); // For image preview URL

  const currentMarket = allMarkets.find(market => market.id === selectedMarketId);

  useEffect(() => {
    if (newMarketImageFile) {
      setPreviewImageUrl(URL.createObjectURL(newMarketImageFile));
    } else if (currentMarket) {
      setPreviewImageUrl(currentMarket.marketImage);
    } else {
      setPreviewImageUrl(defaultMarketImage);
    }

    // Cleanup function for object URLs to prevent memory leaks
    return () => {
      if (previewImageUrl && newMarketImageFile) { // Only revoke if it's an object URL for a selected file
        URL.revokeObjectURL(previewImageUrl);
      }
    };
  }, [newMarketImageFile, currentMarket]);


  const handleMarketSelectChange = (e) => {
    setSelectedMarketId(e.target.value);
    setIsEditing(false); // Reset to view mode when switching markets
    setNewMarketImageFile(null); // Clear any pending new image file
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAllMarkets(prevMarkets =>
      prevMarkets.map(market =>
        market.id === selectedMarketId
          ? { ...market, [name]: value }
          : market
      )
    );
  };

  const handleAmenityChange = (index, value) => {
    setAllMarkets(prevMarkets =>
      prevMarkets.map(market =>
        market.id === selectedMarketId
          ? {
              ...market,
              amenities: market.amenities.map((amenity, i) =>
                i === index ? value : amenity
              ),
            }
          : market
      )
    );
  };

  const addAmenity = () => {
    setAllMarkets(prevMarkets =>
      prevMarkets.map(market =>
        market.id === selectedMarketId
          ? { ...market, amenities: [...market.amenities, ''] }
          : market
      )
    );
  };

  const removeAmenity = (index) => {
    setAllMarkets(prevMarkets =>
      prevMarkets.map(market =>
        market.id === selectedMarketId
          ? {
              ...market,
              amenities: market.amenities.filter((_, i) => i !== index),
            }
          : market
      )
    );
  };

  const handleImageFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewMarketImageFile(e.target.files[0]);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();

    console.log('Saving Market Information for:', currentMarket?.name);
    console.log('Updated Market Data:', currentMarket);
    console.log('New Market Image File (if any):', newMarketImageFile);

    // In a real application:
    // 1. If newMarketImageFile exists, upload it to your storage (e.g., S3, Cloudinary).
    // 2. Get the URL of the uploaded image.
    // 3. Update the `marketImage` property of the `currentMarket` object with the new URL.
    // 4. Send the updated `currentMarket` data to your backend API for the specific market ID.

    // Simulate saving and updating the image URL
    if (newMarketImageFile) {
        const simulatedImageUrl = URL.createObjectURL(newMarketImageFile);
        setAllMarkets(prevMarkets =>
            prevMarkets.map(market =>
                market.id === selectedMarketId
                    ? { ...market, marketImage: simulatedImageUrl } // In real app, this would be the actual uploaded URL
                    : market
            )
        );
        // Revoke the object URL after setting it to the state (as the state now holds a new one or the original)
        URL.revokeObjectURL(simulatedImageUrl);
    }

    setIsEditing(false);
    setNewMarketImageFile(null); // Clear pending new image file
    alert(`Market information for ${currentMarket?.name} updated successfully! (Simulated)`);
  };

  if (!currentMarket) {
    return (
      <div className="container-fluid mt-4">
        <div className="alert alert-warning">
          Please select a market to manage or ensure market data is loaded.
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid mt-4">
      <div className="card shadow-lg p-4 bg-white">
        <h3 className="mb-4 text-primary">Manage Market Information</h3>
        <p className="mb-3 text-muted">Select a market to view or update its details.</p>

        {/* Market Selector Dropdown */}
        <div className="mb-4">
          <label htmlFor="marketSelector" className="form-label fw-bold">Select Market:</label>
          <select
            id="marketSelector"
            className="form-select"
            value={selectedMarketId}
            onChange={handleMarketSelectChange}
            disabled={isEditing}
          >
            {allMarkets.map(market => (
              <option key={market.id} value={market.id}>
                {market.name}
              </option>
            ))}
          </select>
        </div>

        <hr className="my-4" />

        {!isEditing ? (
          <div>
            {/* View Mode: Market Image - Using Bootstrap's aspect ratio utilities for better control */}
            <div className="mb-4 text-center">
              <div className="ratio ratio-16x9 border border-primary rounded shadow-sm overflow-hidden">
                <img
                  src={previewImageUrl || defaultMarketImage}
                  alt={`${currentMarket.name} Market`}
                  className="img-fluid" // img-fluid ensures it respects container width
                  style={{ objectFit: 'cover' }} // objectFit ensures it covers the area without distortion
                />
              </div>
              <h4 className="fw-bold mt-3 mb-1">{currentMarket.name}</h4>
              <p className="text-muted small mb-3">{currentMarket.address}</p>
            </div>

            <hr className="my-4" />

            {/* View Mode: Two fields per row */}
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <strong>Description:</strong>
                <p className="small text-muted">{currentMarket.description}</p>
              </div>
              <div className="col-md-6">
                <strong>Operating Hours:</strong>
                <p>{currentMarket.operatingHours}</p>
              </div>
            </div>

            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <strong>Contact Email:</strong>
                <p>{currentMarket.contactEmail}</p>
              </div>
              <div className="col-md-6">
                <strong>Contact Phone:</strong>
                <p>{currentMarket.contactPhone}</p>
              </div>
            </div>

            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <strong>Amenities:</strong>
                <ul className="list-unstyled mb-0">
                  {currentMarket.amenities.map((amenity, index) => (
                    <li key={index}><i className="bi bi-check-circle-fill text-success me-2"></i>{amenity}</li>
                  ))}
                </ul>
              </div>
              <div className="col-md-6">
                <strong>Rules & Regulations:</strong>
                <p className="small text-muted mb-0">{currentMarket.rules}</p>
              </div>
            </div>

            <div className="d-flex justify-content-end mt-4">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => setIsEditing(true)}
              >
                <i className="bi bi-pencil-square me-2"></i>Edit Market Info
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSave}>
            {/* Edit Mode: Market Image - Using Bootstrap's aspect ratio utilities for better control */}
            <div className="mb-4 text-center">
              <label htmlFor="marketImageUpload" className="form-label d-block text-start mb-2">Market Image Preview</label>
              <div className="ratio ratio-16x9 border border-primary rounded shadow-sm overflow-hidden mb-3">
                <img
                  src={previewImageUrl || defaultMarketImage}
                  alt="Market Preview"
                  className="img-fluid"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <input
                type="file"
                className="form-control"
                id="marketImageUpload"
                name="marketImageUpload"
                accept="image/*"
                onChange={handleImageFileChange}
              />
              {newMarketImageFile && (
                <small className="form-text text-muted mt-2 d-block">
                  New image selected: {newMarketImageFile.name}
                </small>
              )}
            </div>

            <hr className="my-4" />

            {/* Edit Mode: Two fields per row */}
            <div className="row g-3">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Market Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={currentMarket.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={currentMarket.address}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row g-3">
              <div className="col-12">
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="3"
                    value={currentMarket.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="row g-3">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="operatingHours" className="form-label">Operating Hours</label>
                  <input
                    type="text"
                    className="form-control"
                    id="operatingHours"
                    name="operatingHours"
                    value={currentMarket.operatingHours}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="contactEmail" className="form-label">Contact Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="contactEmail"
                    name="contactEmail"
                    value={currentMarket.contactEmail}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row g-3">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="contactPhone" className="form-label">Contact Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="contactPhone"
                    name="contactPhone"
                    value={currentMarket.contactPhone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Amenities</label>
                  {currentMarket.amenities.map((amenity, index) => (
                    <div key={index} className="input-group mb-2">
                      <input
                        type="text"
                        className="form-control"
                        value={amenity}
                        onChange={(e) => handleAmenityChange(index, e.target.value)}
                      />
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => removeAmenity(index)}
                      >
                        <i className="bi bi-x"></i>
                      </button>
                    </div>
                  ))}
                  <button type="button" className="btn btn-outline-secondary btn-sm mt-2" onClick={addAmenity}>
                    <i className="bi bi-plus me-1"></i>Add Amenity
                  </button>
                </div>
              </div>
            </div>

            <div className="row g-3">
              <div className="col-12">
                <div className="mb-3">
                  <label htmlFor="rules" className="form-label">Rules & Regulations</label>
                  <textarea
                    className="form-control"
                    id="rules"
                    name="rules"
                    rows="3"
                    value={currentMarket.rules}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>


            <div className="d-flex justify-content-end gap-2 mt-4">
              <button type="button" className="btn btn-secondary btn-lg" onClick={() => {
                setIsEditing(false);
                setNewMarketImageFile(null); // Clear image selection on cancel
                // A real app might reset marketInfo to its state before editing here
              }}>
                Cancel
              </button>
              <button type="submit" className="btn btn-success btn-lg">
                <i className="bi bi-save me-2"></i>Save Changes
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ManageMarketInfo;