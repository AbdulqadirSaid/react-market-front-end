// src/owner/ManageMarketInfo.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Tab, Nav, Card, Row, Col, Form, Button, Image } from 'react-bootstrap';

// Import your market images
import jumbiMarketImg from '../images/Jumbi-Image.jpg';
import mwanakwerekweMarketImg from '../images/Kwere_Image.jpg';

const ManageMarketInfo = () => {
  const { marketId } = useParams();
  const navigate = useNavigate();
  
  const [markets, setMarkets] = useState([
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

  const [activeTab, setActiveTab] = useState('details');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [imagePreview, setImagePreview] = useState(null);

  // Set current market based on URL param
  const currentMarket = markets.find(market => market.id === (marketId || 'jumbi')) || markets[0];

  useEffect(() => {
    if (currentMarket) {
      setFormData({ ...currentMarket });
      setImagePreview(currentMarket.marketImage);
    }
  }, [currentMarket]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAmenityChange = (index, value) => {
    const updatedAmenities = [...formData.amenities];
    updatedAmenities[index] = value;
    setFormData(prev => ({ ...prev, amenities: updatedAmenities }));
  };

  const addAmenity = () => {
    setFormData(prev => ({ ...prev, amenities: [...prev.amenities, ''] }));
  };

  const removeAmenity = (index) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.filter((_, i) => i !== index)
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would save to API here
    setMarkets(prev => 
      prev.map(market => 
        market.id === currentMarket.id 
          ? { ...formData, marketImage: imagePreview } 
          : market
      )
    );
    setIsEditing(false);
  };

  if (!currentMarket) {
    return (
      <div className="alert alert-warning">
        Market not found. Please select a valid market.
      </div>
    );
  }

  return (
    <div className="market-management">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mb-0">
          <i className="bi bi-shop me-2"></i>
          {currentMarket.name} Management
        </h4>
        <div>
          {!isEditing ? (
            <button 
              className="btn btn-primary"
              onClick={() => setIsEditing(true)}
            >
              <i className="bi bi-pencil-square me-1"></i> Edit Market
            </button>
          ) : (
            <div className="btn-group">
              <button 
                className="btn btn-outline-secondary"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
              <button 
                className="btn btn-success"
                onClick={handleSubmit}
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>

      <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
        <Nav variant="tabs" className="mb-4">
          <Nav.Item>
            <Nav.Link eventKey="details">Market Details</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="amenities">Amenities</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="rules">Rules & Policies</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="details">
            {!isEditing ? (
              <div className="row">
                <div className="col-md-6">
                  <Card className="mb-4">
                    <Card.Img 
                      variant="top" 
                      src={currentMarket.marketImage} 
                      style={{ height: '300px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <Card.Title>{currentMarket.name}</Card.Title>
                      <Card.Text>
                        <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                        {currentMarket.address}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-md-6">
                  <Card className="mb-4">
                    <Card.Body>
                      <h5 className="card-title">Market Information</h5>
                      <div className="mb-3">
                        <h6 className="text-muted">Description</h6>
                        <p>{currentMarket.description}</p>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <h6 className="text-muted">Operating Hours</h6>
                          <p>{currentMarket.operatingHours}</p>
                        </div>
                        <div className="col-md-6">
                          <h6 className="text-muted">Contact</h6>
                          <p>
                            <i className="bi bi-telephone me-2"></i>
                            {currentMarket.contactPhone}<br />
                            <i className="bi bi-envelope me-2"></i>
                            {currentMarket.contactEmail}
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            ) : (
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Market Image</Form.Label>
                      <div className="border rounded p-3 text-center mb-3">
                        <Image 
                          src={imagePreview} 
                          fluid 
                          style={{ maxHeight: '200px' }}
                          className="mb-3"
                        />
                        <Form.Control 
                          type="file" 
                          accept="image/*" 
                          onChange={handleImageUpload}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Market Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Operating Hours</Form.Label>
                      <Form.Control
                        type="text"
                        name="operatingHours"
                        value={formData.operatingHours}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Contact Phone</Form.Label>
                      <Form.Control
                        type="tel"
                        name="contactPhone"
                        value={formData.contactPhone}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Contact Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Form>
            )}
          </Tab.Pane>

          <Tab.Pane eventKey="amenities">
            {!isEditing ? (
              <Card>
                <Card.Body>
                  <h5 className="card-title">Market Amenities</h5>
                  <ul className="list-group list-group-flush">
                    {currentMarket.amenities.map((amenity, index) => (
                      <li key={index} className="list-group-item">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            ) : (
              <Card>
                <Card.Body>
                  <h5 className="card-title">Edit Amenities</h5>
                  {formData.amenities.map((amenity, index) => (
                    <div key={index} className="input-group mb-2">
                      <Form.Control
                        type="text"
                        value={amenity}
                        onChange={(e) => handleAmenityChange(index, e.target.value)}
                      />
                      <Button 
                        variant="outline-danger"
                        onClick={() => removeAmenity(index)}
                      >
                        <i className="bi bi-trash"></i>
                      </Button>
                    </div>
                  ))}
                  <Button 
                    variant="outline-primary"
                    onClick={addAmenity}
                    className="mt-2"
                  >
                    <i className="bi bi-plus-circle me-1"></i> Add Amenity
                  </Button>
                </Card.Body>
              </Card>
            )}
          </Tab.Pane>

          <Tab.Pane eventKey="rules">
            {!isEditing ? (
              <Card>
                <Card.Body>
                  <h5 className="card-title">Market Rules & Policies</h5>
                  <p>{currentMarket.rules}</p>
                </Card.Body>
              </Card>
            ) : (
              <Card>
                <Card.Body>
                  <Form.Group>
                    <Form.Label>Rules & Policies</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="rules"
                      value={formData.rules}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Card.Body>
              </Card>
            )}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default ManageMarketInfo;