// owner/ManageMarketInfo.js
import React from "react";
import market1 from "../images/Jumbi-Image.jpg"; // Add images to public or assets folder
import market2 from "../images/Kwere_Image.jpg";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
const ManageMarketInfo = () => {
  const markets = [
    {
      name: "Jumbi Market",
      location: "Uwanja wa Ndege Rd, Zanzibar, Tanzania",
      phone: "+255 778 123 456",
      email: "jumbi.market@example.com",
      hours: "Monday - Saturday: 7:00 AM - 6:00 PM",
      description:
        "The vibrant heart of local produce and traditional goods in Zanzibar Town. Offering fresh fruits, vegetables, spices, and artisanal crafts.",
      amenities: [
        "Parking Available",
        "Restrooms",
        "ATM Nearby",
        "Fresh Produce Stalls",
      ],
      rules: "No smoking within market premises, keep stalls clean.",
      image: market1,
    },
    {
      name: "Mwanakwerekwe Market",
      location: "Mwanakwerekwe, Zanzibar City, Tanzania",
      phone: "+255 712 987 654",
      email: "mwanakwerekwe.market@example.com",
      hours: "Daily: 6:00 AM - 7:00 PM",
      description:
        "Zanzibar's largest and most bustling market, known for its diverse range of spices, textiles, seafood, and everyday essentials.",
      amenities: [
        "Parking Available",
        "Variety of Stalls",
        "Spice Section",
        "Textile Section",
      ],
      rules: "Bargaining encouraged, dispose of waste properly.",
      image: market2,
    },
  ];

  return (
    <div className="container py-4">
      </>
      <h2 className="text-center text-primary fw-bold mb-4">My Markets Information</h2>
      <div className="row g-4">
        {markets.map((market, idx) => (
          <div className="col-md-6" key={idx}>
            <div className="card shadow-sm h-100 border-0">
              <img
                src={market.image}
                alt={market.name}
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }}
              />
              <div className="card-body">
                <h5 className="card-title text-info fw-bold">
                  🔷 {market.name}
                </h5>
                <p className="mb-1">
                  <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                  {market.location}
                </p>
                <p className="mb-1">
                  <i className="bi bi-telephone-fill text-success me-2"></i>
                  {market.phone}
                </p>
                <p className="mb-2">
                  <i className="bi bi-envelope-fill text-warning me-2"></i>
                  {market.email}
                </p>
                <p className="fw-bold mb-1">
                  <i className="bi bi-clock-fill text-primary me-2"></i>
                  {market.hours}
                </p>
                <p className="small text-muted">
                  <i className="bi bi-info-circle-fill me-2"></i>
                  {market.description}
                </p>
                <h6 className="mt-3 fw-semibold">✅ Amenities:</h6>
                <ul className="list-unstyled small">
                  {market.amenities.map((amenity, i) => (
                    <li key={i}>
                      <i className="bi bi-check-circle text-success me-2"></i>
                      {amenity}
                    </li>
                  ))}
                </ul>
                <h6 className="fw-semibold">📌 Rules:</h6>
                <p className="small text-danger">{market.rules}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageMarketInfo;
