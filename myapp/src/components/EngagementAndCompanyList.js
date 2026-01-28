import React from 'react';
import '../assets/style/EngagementAndCompanyList.css';
import EngagementVideo from './EngagementVideo';
import CompanyCard from './CompanyCard';
import img1 from '../assets/images/IndianTheme.webp';
import img2 from '../assets/images/GardenTheme.webp';
import img3 from '../assets/images/RoyalTheme.jfif';
import img4 from '../assets/images/Eco-Friendly.webp';
import img5 from '../assets/images/BollywoodTheme.webp';
import img6 from '../assets/images/RajastaniTheme.webp';
import '../assets/style/WeddingSection.css';
import { ServiceCard1 } from './ServiceCard1';


const EngagementAndCompanyList = () => {
  return (
    <div className="container">
      {/* Engagement Video Section */}
      <EngagementVideo />
      <h4>Themes For Engagement</h4>
      {/* Company Listings Section */}
      <div className="company-list">
      <h2>Engagement Section</h2>
      <div className="wedding-section">
              <ServiceCard1 categoryId={2} />
        </div>
      {/* <CompanyCard
        id="1"
        companyName="Indian Theme"
        rating="4.8"
        reviews="144"
        price="₹50,000"
        promotions="Promotions:10%"
        description="Get in touch with your roots and give your engagement party an authentic Indian vibe. "
        imageSrc={img1}
      />
      <CompanyCard
        id="2"
        companyName="Garden Theme"
        rating="4.9"
        reviews="23"
        price="₹1,50,000"
        promotions="Promotions:10%"
        description="If you love nature, colourful flowers, lush greenery, and an elegant garden setting then you might consider a garden theme."
        imageSrc={img2}
      />
      <CompanyCard
        id="3"
        companyName="Royal Theme"
        rating="4.9"
        reviews="23"
        price="₹1,50,000"
        promotions="Promotions:10%"
        description="One of the engagement themes that truly makes you feel like a king and a queen for the day is the royal theme."
        imageSrc={img3}
      />
      <CompanyCard
        id="4"
        companyName="Eco-Friendly Theme"
        rating="4.9"
        reviews="23"
        price="₹1,50,000"
        promotions="Promotions:10%"
        description="One of the most popular engagement themes these days is the “go green” theme."
        imageSrc={img4}
      />
      <CompanyCard
        id="5"
        companyName="Bollywood Theme"
        rating="4.9"
        reviews="23"
        price="₹1,50,000"
        promotions="Promotions:10%"
        description="For an uber fun and crowd-pleasing engagement party theme, a Bollywood theme is the way to go."
        imageSrc={img5}
      />
       <CompanyCard
        id="6"
        companyName="Rajasthani Royalty Theme"
        rating="4.9"
        reviews="23"
        price="₹1,50,000"
        promotions="Promotions:10%"
        description="The Rajasthani Royalty theme draws inspiration from the grandeur and cultural richness of Rajasthan."
        imageSrc={img6}
      />
     */}

     
    </div>
    
    </div>
  );
};

export default EngagementAndCompanyList;
