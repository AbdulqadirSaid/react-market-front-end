import React, { useEffect, useState } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom'; // Added useNavigate

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

// Data ya mfano ya nafasi za masoko (inahitajika tena hapa kwa sasa)
// Katika mfumo halisi, ungetoa data hii kutoka API
const allMarketSpaces = [
  { id: 101, marketId: 1, name: 'Stall J-A1', size: '10x10 ft', price: 50000, description: 'Nafasi nzuri karibu na lango kuu la Jumbi.', available: true },
  { id: 102, marketId: 1, name: 'Stall J-B2', size: '8x10 ft', price: 45000, description: 'Inafaa kwa bidhaa za chakula Jumbi.', available: true },
  { id: 103, marketId: 1, name: 'Stall J-C3', size: '12x12 ft', price: 60000, description: 'Nafasi kubwa Jumbi, tayari kwa mapambo.', available: false },
  { id: 201, marketId: 2, name: 'Stall M-X1', size: '10x10 ft', price: 55000, description: 'Nafasi ya kwanza Mwanakwerekwe, karibu na barabara.', available: true },
  { id: 202, marketId: 2, name: 'Stall M-Y2', size: '8x8 ft', price: 40000, description: 'Nafasi ndogo Mwanakwerekwe, bei nafuu.', available: true },
  { id: 203, marketId: 2, name: 'Stall M-Z3', size: '15x10 ft', price: 70000, description: 'Nafasi pana Mwanakwerekwe, inafaa kwa biashara kubwa.', available: true },
];

// Data ya mfano ya Masoko (kwa kupata jina la soko)
const marketsData = [
  { id: 1, title: 'Jumbi Market' },
  { id: 2, title: 'Mwanakwerekwe Market' },
];

const ConfirmBooking = () => {
  const { spaceId } = useParams();
  const navigate = useNavigate(); // Hook mpya kwa ajili ya kurudisha user baada ya submission
  const [selectedSpace, setSelectedSpace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '', // New field for user's full name
    email: '',     // New field for user's email
    marketName: '', // Will be pre-filled
    marketSpaceType: '', // Will be pre-filled (e.g., Stall J-A1 (10x10 ft))
    startDate: '',
    endDate: '',
    totalPrice: 0, // Calculated price
  });

  useEffect(() => {
    const fetchSpaceDetails = () => {
      const foundSpace = allMarketSpaces.find(space => space.id === parseInt(spaceId));
      if (foundSpace) {
        setSelectedSpace(foundSpace);
        const market = marketsData.find(m => m.id === foundSpace.marketId);
        setFormData(prev => ({
          ...prev,
          marketName: market ? market.title : 'Unknown Market',
          marketSpaceType: `${foundSpace.name} (${foundSpace.size})`, // Combine name and size
          // Price will be calculated based on dates later
        }));
      } else {
        setError('Nafasi haikupatikana au si sahihi.');
      }
      setLoading(false);
    };

    fetchSpaceDetails();
  }, [spaceId]);

  // Effect to calculate total price based on dates and daily rate
  useEffect(() => {
    if (formData.startDate && formData.endDate && selectedSpace) {
      const start = new Date(formData.startDate);
      const end = new Date(formData.endDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 to include both start and end day
      if (diffDays > 0) {
        setFormData(prev => ({
          ...prev,
          totalPrice: selectedSpace.price * diffDays // Assuming price is per day
        }));
      } else {
        setFormData(prev => ({ ...prev, totalPrice: 0 }));
      }
    }
  }, [formData.startDate, formData.endDate, selectedSpace]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedSpace) {
      alert('Hakuna nafasi iliyochaguliwa kwa uhifadhi.');
      return;
    }

    // Validation ya tarehe
    const start = new Date(formData.startDate);
    const end = new Date(formData.endDate);
    if (start > end) {
      alert('Tarehe ya kuanza haiwezi kuwa baada ya tarehe ya kumaliza.');
      return;
    }
    if (start < new Date()) { // Optional: Prevent booking in the past
        // alert('Tarehe ya kuanza haiwezi kuwa iliyopita.');
        // return;
    }


    console.log('Fomu ya Uhifadhi Imewasilishwa:', {
      spaceId: selectedSpace.id,
      marketId: selectedSpace.marketId,
      ...formData
    });

    // Hapa ndipo utatuma data kwenye backend (API)
    // Kwa sasa ni mfano tu:
    alert(`Uhifadhi wa ${selectedSpace.name} umetumwa! Jumla: TZS ${formData.totalPrice.toLocaleString()}`);

    // Rudisha mtumiaji kwenye ukurasa wa nafasi za soko au ukurasa wa uthibitisho
    navigate(`/booking-spaces/${selectedSpace.marketId}`);
  };

  const handleCancel = () => {
    navigate(`/booking-spaces/${selectedSpace.marketId}`); // Rudisha user kwenye nafasi za soko
  };

  if (loading) {
    return <p className="text-center mt-5">Inapakia maelezo ya nafasi...</p>;
  }

  if (error) {
    return <p className="text-center mt-5 text-danger">{error}</p>;
  }

  if (!selectedSpace) {
    return <p className="text-center mt-5 text-warning">Hakuna nafasi iliyochaguliwa au haikupatikana.</p>;
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-4" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container py-4 animate__animated animate__fadeIn">
            <h2 className="mb-4 text-center text-primary fw-bold">
              Thibitisha Uhifadhi wa Nafasi
            </h2>
            <p className="lead text-center text-muted mb-5">
              Jaza fomu hapa chini kukamilisha uhifadhi wako wa <strong className="text-info">{selectedSpace.name}</strong> katika <strong className="text-info">{formData.marketName}</strong>.
            </p>

            <NavLink to={`/booking-spaces/${selectedSpace.marketId}`} className="btn btn-secondary mb-4">
              <i className="bi bi-arrow-left-circle-fill me-2"></i> Rudi Kwenye Nafasi za Soko
            </NavLink>

            <div className="card shadow-lg border-0 animate__animated animate__zoomIn" style={{ borderRadius: '15px' }}>
              <div className="card-body p-4 p-md-5">
                <h4 className="card-title text-success mb-4 text-center">Maelezo ya Nafasi Uliyochagua</h4>
                <ul className="list-group list-group-flush mb-4">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Soko:</strong> <span>{formData.marketName}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Nafasi:</strong> <span>{formData.marketSpaceType}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Bei kwa Siku:</strong> <span className="text-primary fw-bold">TZS {selectedSpace.price.toLocaleString()}</span>
                  </li>
                  <li className="list-group-item">
                    <strong>Maelezo:</strong> <p className="mb-0 text-muted">{selectedSpace.description}</p>
                  </li>
                </ul>

                <h4 className="card-title text-primary mb-4 text-center">Jaza Taarifa za Uhifadhi</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="fullName" className="form-label">Jina Kamili</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className="form-control"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">Barua Pepe</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="startDate" className="form-label">Tarehe ya Kuanza Kuhifadhi</label>
                      <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        className="form-control"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="endDate" className="form-label">Tarehe ya Kumaliza Kuhifadhi</label>
                      <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        className="form-control"
                        value={formData.endDate}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {formData.totalPrice > 0 && (
                      <div className="alert alert-info text-center mt-4 animate__animated animate__fadeIn">
                          <h4>Jumla ya Bei ya Uhifadhi: <span className="fw-bold fs-3 text-success">TZS {formData.totalPrice.toLocaleString()}</span></h4>
                      </div>
                  )}

                  <div className="d-flex justify-content-between mt-4">
                    <button type="button" className="btn btn-secondary btn-lg" onClick={handleCancel}>
                      <i className="bi bi-x-circle me-2"></i> Ghairi
                    </button>
                    <button type="submit" className="btn btn-primary btn-lg">
                      Kamilisha Uhifadhi <i className="bi bi-check-circle-fill ms-2"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;