// src/owner/ManageMarketInfo.js
import React, { useState, useEffect } from 'react';

// Import your market-specific images
import jumbiMarketImg from '../images/Jumbi-Image.jpg'; //
import mwanakwerekweMarketImg from '../images/Kwere_Image.jpg'; //
import defaultMarketImage from '../images/Jumbi-Image.jpg'; // Create this or use a placeholder URL if no image is available

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
      marketImage: jumbiMarketImg, // Use imported image
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
      marketImage: mwanakwerekweMarketImg, // Use imported image
      amenities: ['Parking Available', 'Variety of Stalls', 'Spice Section', 'Textile Section'],
      rules: 'Bargaining encouraged, dispose of waste properly.',
    },
  ]);

  const [selectedMarketId, setSelectedMarketId] = useState('jumbi'); // Default to Jumbi
  const [isEditing, setIsEditing] = useState(false);
  const [newMarketImageFile, setNewMarketImageFile] = useState(null); // For new image upload (File object)
  const [previewImageUrl, setPreviewImageUrl] = useState(null); // For image preview

  // Find the currently selected market from the allMarkets array
  const currentMarket = allMarkets.find(market => market.id === selectedMarketId);

  useEffect(() => {
    // In a real application, you would fetch all markets managed by this owner.
    // For now, we are using the hardcoded `allMarkets` state.
    // If you were fetching, you would set `allMarkets` and then `setSelectedMarketId` to the first one or a default.
    console.log("Component loaded. Initializing market data.");
  }, []);

  // Effect to update preview image when new image file is selected or market changes
  useEffect(() => {
    if (newMarketImageFile) {
      setPreviewImageUrl(URL.createObjectURL(newMarketImageFile));
    } else if (currentMarket) {
      setPreviewImageUrl(currentMarket.marketImage);
    } else {
      setPreviewImageUrl(defaultMarketImage);
    }
    // Clean up the object URL when the component unmounts or image changes
    return () => {
      if (previewImageUrl && newMarketImageFile) {
        URL.revokeObjectURL(previewImageUrl);
      }
    };
  }, [newMarketImageFile, currentMarket, previewImageUrl]);


  const handleMarketSelectChange = (e) => {
    setSelectedMarketId(e.target.value);
    setIsEditing(false); // Reset to view mode when switching markets
    setNewMarketImageFile(null); // Clear any pending new image
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
    //    Example: fetch(`/api/owner/update-market/${currentMarket.id}`, { method: 'PUT', body: JSON.stringify(currentMarket), ... })

    // Simulate saving and updating the image URL
    if (newMarketImageFile) {
        // In a real app, this URL would come from the server after upload
        const simulatedImageUrl = URL.createObjectURL(newMarketImageFile);
        setAllMarkets(prevMarkets =>
            prevMarkets.map(market =>
                market.id === selectedMarketId
                    ? { ...market, marketImage: simulatedImageUrl }
                    : market
            )
        );
        // Clean up immediately after setting the new URL in state if not needed for further operations
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
            disabled={isEditing} // Disable selector while editing
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
            <div className="row mb-3 align-items-center">
              <div className="col-md-4 text-center">
                <img
                  src={previewImageUrl || defaultMarketImage}
                  alt={`${currentMarket.name} Market`}
                  className="img-fluid rounded shadow-sm mb-3"
                  style={{ maxWidth: '250px', maxHeight: '200px', objectFit: 'cover', border: '1px solid #ddd' }}
                />
              </div>
              <div className="col-md-8">
                <h4 className="fw-bold">{currentMarket.name}</h4>
                <p><i className="bi bi-geo-alt me-2 text-muted"></i>{currentMarket.address}</p>
                <p className="text-muted small">{currentMarket.description}</p>
              </div>
            </div>

            <hr className="my-4" />

            <div className="row mb-3">
              <div className="col-md-6">
                <strong>Operating Hours:</strong> <p>{currentMarket.operatingHours}</p>
              </div>
              <div className="col-md-6">
                <strong>Contact Email:</strong> <p>{currentMarket.contactEmail}</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <strong>Contact Phone:</strong> <p>{currentMarket.contactPhone}</p>
              </div>
            </div>

            <div className="mb-3">
              <strong>Amenities:</strong>
              <ul className="list-unstyled">
                {currentMarket.amenities.map((amenity, index) => (
                  <li key={index}><i className="bi bi-check-circle-fill text-success me-2"></i>{amenity}</li>
                ))}
              </ul>
            </div>

            <div className="mb-3">
              <strong>Rules & Regulations:</strong>
              <p className="small text-muted">{currentMarket.rules}</p>
            </div>

            <div className="d-flex justify-content-end">
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

            <div className="mb-3">
              <label htmlFor="marketImageUpload" className="form-label">Market Image</label>
              <input
                type="file"
                className="form-control"
                id="marketImageUpload"
                name="marketImageUpload"
                accept="image/*"
                onChange={handleImageFileChange}
              />
              {(newMarketImageFile || currentMarket.marketImage) && (
                <div className="mt-2 text-center">
                  <img
                    src={previewImageUrl || defaultMarketImage}
                    alt="Market Preview"
                    className="img-fluid rounded shadow-sm"
                    style={{ maxWidth: '150px', maxHeight: '100px', objectFit: 'cover' }}
                  />
                  {newMarketImageFile && (
                    <small className="form-text text-muted d-block mt-1">
                      New image selected: {newMarketImageFile.name}
                    </small>
                  )}
                </div>
              )}
            </div>

            <div className="d-flex justify-content-end gap-2 mt-4">
              <button type="button" className="btn btn-secondary btn-lg" onClick={() => {
                setIsEditing(false);
                setNewMarketImageFile(null); // Clear image selection on cancel
                // Optionally, revert changes if the form data wasn't saved.
                // For a real app, you'd re-fetch currentMarket data here or store a copy before editing.
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