import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/TermsPrivacy.css';

const TermsPrivacy = () => {
    return (
        <div className="container terms-container">
            <h2 className="text-center">CelebrateIt Event Management - Terms & Privacy</h2>
            <div className="terms-content">
                <h4>1. Introduction</h4>
                <p>Welcome to CelebrateIt Event Management. We provide services for wedding, engagement, birthday decorations, photography, and catering (veg & non-veg).</p>

                <h4>2. Services Provided</h4>
                <ul>
                    <li>Wedding Decorations & Planning</li>
                    <li>Engagement & Birthday Event Arrangements</li>
                    <li>Professional Photography & Videography</li>
                    <li>Catering Services (Veg & Non-Veg)</li>
                </ul>
                    
                <h4>3. Payment Terms</h4>
                <ul>
                    <li>50% payment must be completed before the event date.</li>
                    <li>We accept payments via credit/debit cards, UPI, net banking, and cash</li>
                    <li>Any additional services requested on the event day will be charged separately.</li>
                   
                </ul>
                <h4>4. Food & Catering Policy</h4>
                <ul>
                    <li>We ensure high-quality food preparation under hygienic conditions.</li>
                    <li>Special dietary requests (Jain, Vegan, Gluten-free) must be informed in advance.</li>
                    <li>Food wastage policy: We encourage responsible food handling and can donate excess food upon request.</li>
                   
                </ul>
                
                <h4>5. Privacy Policy</h4>
                <p>We collect and store customer information securely. We do not share your data with third parties without consent.</p>

                <h4>6. Booking & Cancellation</h4>
                <ul>
                    <li>To confirm a booking, a minimum 30% advance payment is required.</li>
                    <li>Full payment must be completed at least 3 days before the event date.</li>
                    <li>Customers will receive a confirmation email with booking details upon successful payment.</li>
                    <li>Cancellations made 7 days before the event will receive a full refund (excluding transaction charges).</li>
                    <li>Cancellations made between 3-6 days before the event will be eligible for a 50% refund.</li>
                    <li>Cancellations within 48 hours of the event are non-refundable.</li>
                   
                </ul>
                <h4>7. Customer Support</h4>
                <ul>
                    <li>Our support team is available 24/7 for urgent event queries.</li>
                    <li>Contact us via email: support@celebrateit.com or phone: +91 9199989795.</li>
                    
                   
                </ul>
                
            </div>
            {/* <div className="text-center">
                <button className="btn btn-primary">Agree & Continue</button>
            </div> */}
        </div>
    );
};

export default TermsPrivacy;
