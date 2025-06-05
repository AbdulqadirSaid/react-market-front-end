// src/owner/ManageMarketInfo.js
import React, { useState, useEffect } from 'react';

// Placeholder image if the market doesn't have one or for initial display
import defaultMarketImage from '../images/default-market.jpg'; // You might need to create this image or use a placeholder URL

const ManageMarketInfo = () => {
  // State to hold the market information
  const [marketInfo, setMarketInfo] = useState({
    id: 'MARKET001', // This would typically come from user authentication or a backend call
    name: 'Jumbi Market', // Example data
    address: 'Uwanja wa Ndege Rd, Zanzibar, Tanzania',
    description: 'The vibrant heart of local produce and traditional goods in Zanzibar Town. Offering fresh fruits, vegetables, spices, and artisanal crafts.',
    operatingHours: 'Monday - Saturday: 7:00 AM - 6:00 PM',
    contactEmail: 'jumbi.market@example.com',
    contactPhone: '+255 778 123 456',
    marketImage: 'https://via.placeholder.com/600x400/FF8C00/ffffff?text=Jumbi+Market', // Placeholder image URL
    amenities: ['Parking Available', 'Restrooms', 'ATM Nearby'],
    rules: 'No smoking within market premises, keep stalls clean.',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newMarketImage, setNewMarketImage] = useState(null); // For new image upload

  useEffect(() => {
    // In a real application, you would fetch the specific market owner's market information here
    // based on the authenticated owner's ID.
    // Example:
    // fetch('/api/owner/my-market')
    //   .then(response => response.json())
    //   .then(data => setMarketInfo(data))
    //   .catch(error => console.error('Error fetching market info:', error));
    console.log("Fetching market information for the owner...");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMarketInfo(prevInfo => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleAmenityChange = (index, value) => {
    const updatedAmenities = [...marketInfo.amenities];
    updatedAmenities[index] = value;
    setMarketInfo(prevInfo => ({ ...prevInfo, amenities: updatedAmenities }));
  };

  const addAmenity = () => {
    setMarketInfo(prevInfo => ({ ...prevInfo, amenities: [...prevInfo.amenities, ''] }));
  };

  const removeAmenity = (index) => {
    const updatedAmenities = marketInfo.amenities.filter((_, i) => i !== index);
    setMarketInfo(prevInfo => ({ ...prevInfo, amenities: updatedAmenities }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewMarketImage(e.target.files[0]);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log('Saving Market Information:', marketInfo);
    console.log('New Market Image (if any):', newMarketImage);

    // In a real application:
    // 1. If newMarketImage exists, upload it to your storage (e.g., S3, Cloudinary)
    // 2. Get the URL of the uploaded image.
    // 3. Update marketInfo.marketImage with the new URL.
    // 4. Send updated marketInfo to your backend API.
    // Example:
    // const formDataToSend = new FormData();
    // for (const key in marketInfo) {
    //   formDataToSend.append(key, marketInfo[key]);
    // }
    // if (newMarketImage) {
    //   formDataToSend.append('marketImageFile', newMarketImage);
    // }
    // fetch('/api/owner/update-market', {
    //   method: 'POST', // Or PUT
    //   body: formDataToSend, // Or JSON.stringify if no file upload
    // }).then(response => response.json())
    //   .then(data => {
    //     setMarketInfo(data); // Update state with confirmed saved data
    //     setIsEditing(false);
    //     setNewMarketImage(null);
    //     alert('Market information updated successfully!');
    //   })
    //   .catch(error => console.error('Error saving market info:', error));

    setIsEditing(false);
    setNewMarketImage(null); // Clear pending new image after "save"
    alert('Market information updated successfully! (Simulated)');
  };

  return (
    <div className="container-fluid mt-4">
      <div className="card shadow-lg p-4 bg-white">
        <h3 className="mb-4 text-primary">Manage Market Information</h3>
        <p className="mb-4 text-muted">Update details for your market including description, operating hours, contact information, and amenities.</p>

        {!isEditing ? (
          <div>
            <div className="row mb-3 align-items-center">
              <div className="col-md-4 text-center">
                <img
                  src={marketInfo.marketImage || defaultMarketImage}
                  alt={`${marketInfo.name} Market`}
                  className="img-fluid rounded shadow-sm mb-3"
                  style={{ maxWidth: '250px', maxHeight: '200px', objectFit: 'cover', border: '1px solid #ddd' }}
                />
              </div>
              <div className="col-md-8">
                <h4 className="fw-bold">{marketInfo.name}</h4>
                <p><i className="bi bi-geo-alt me-2 text-muted"></i>{marketInfo.address}</p>
                <p className="text-muted small">{marketInfo.description}</p>
              </div>
            </div>

            <hr className="my-4" />

            <div className="row mb-3">
              <div className="col-md-6">
                <strong>Operating Hours:</strong> <p>{marketInfo.operatingHours}</p>
              </div>
              <div className="col-md-6">
                <strong>Contact Email:</strong> <p>{marketInfo.contactEmail}</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <strong>Contact Phone:</strong> <p>{marketInfo.contactPhone}</p>
              </div>
            </div>

            <div className="mb-3">
              <strong>Amenities:</strong>
              <ul className="list-unstyled">
                {marketInfo.amenities.map((amenity, index) => (
                  <li key={index}><i className="bi bi-check-circle-fill text-success me-2"></i>{amenity}</li>
                ))}
              </ul>
            </div>

            <div className="mb-3">
              <strong>Rules & Regulations:</strong>
              <p className="small text-muted">{marketInfo.rules}</p>
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
                value={marketInfo.name}
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
                value={marketInfo.address}
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
                value={marketInfo.description}
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
                value={marketInfo.operatingHours}
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
                value={marketInfo.contactEmail}
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
                value={marketInfo.contactPhone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Amenities</label>
              {marketInfo.amenities.map((amenity, index) => (
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
                value={marketInfo.rules}
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
                onChange={handleImageChange}
              />
              {newMarketImage && (
                <small className="form-text text-muted mt-2">
                  New image selected: {newMarketImage.name}
                </small>
              )}
              {marketInfo.marketImage && !newMarketImage && (
                 <small className="form-text text-muted mt-2 d-block">
                  Current image: <a href={marketInfo.marketImage} target="_blank" rel="noopener noreferrer">View Current</a>
                 </small>
              )}
            </div>

            <div className="d-flex justify-content-end gap-2 mt-4">
              <button type="button" className="btn btn-secondary btn-lg" onClick={() => setIsEditing(false)}>
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