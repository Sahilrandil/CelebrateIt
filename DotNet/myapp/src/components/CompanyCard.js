import React, { useState } from 'react';
import '../assets/style/CompanyCard.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const CompanyCard = ({ id,companyName, rating, reviews, location, price, promotions, description, imageSrc }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const navigate = useNavigate();
  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const handleViewDetails = (id) => {
    navigate(`/details/${id}`); // Navigate to the dynamic route
  };

  return (
    <div className="company-card">
      <div className="company-image">
        <img src={imageSrc} alt={companyName} />
      </div>
      <div className="company-details">
        <div className="header">
          <h2>{companyName}</h2>
          <div className="rating">
            <span>⭐ {rating}</span>
            <span>({reviews} reviews)</span>
          </div>
          <p className="location">{location}</p>
        </div>
        <div className="description">{description}</div>
        <div className="footer">
          <p className="price">From {price}</p>
          <div
            className="promotion"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {promotions}

            {/* Tooltip Box */}
            {showTooltip && (
              <div className="promotion-tooltip">
                <strong>DISCOUNT CELEBRATEIT.IN</strong>
                <p>10% discount for CelebrateIt.in couples</p>
                <a href="#" className="promotion-link">View Promotion</a>
              </div>
            )}
          </div>
          {/* <button className="book-photography" onClick={() => handleViewDetails(id)}>
            View Details
          </button> */}
           {/* <Link as={Link}to="/details"> */}
                <button className="book-photography"onClick={() => handleViewDetails(id)}>View Details</button>
              {/* </Link> */}


          <button className="book-photography">Book photography</button>
        </div>
        
      </div>
      
    </div>
    
  );
};

export default CompanyCard;
