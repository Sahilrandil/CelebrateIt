import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AppNavbar from './AppNavbar';
import AppFooter from './AppFooter';
import MiddleBody from './MiddleBody';
import Registration from './Registration';
import Login from './Login';
import Dashboard from './Dashboard';
import AdminDashboard from './AdminDashboard';
import Gallery from './Gallery';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import WeddingSection from './WeddingSection';
import WeddingDetails from './WeddingDetails';
import BirthdaySection from './BirthdaySection';
import BirthdayDetails from './BirthdayDetails';
import VegSection from './VegSection';
import VegDetails from './VegDetails';
import NonvegSection from './NonvegSection';
import NonvegDetails from './NonvegDetails';
import PhotoSection from './PhotoSection';
import EventDetailsCard from './EventDetailsCard';
import { ServiceCard } from './ServiceCard';

import { AdminProtectedRoute } from './AdminProtectedRoute';
import { UserProtectedRoute } from './UserProtectedRoute';
import AdminPanel from './AdminPanel';
import { ContactUsCard } from './ContactUsCard';
import FeedbackForm from './FeedbackForm';
import { FeedbackCard } from './FeedbackCard';
import UpdateServiceForm from './UpdateServiceForm';
import VerificationCode from './VerificationCode';
import EngagementSection from './EngagementSection';
import TermsPrivacy from './TermsPrivacy';
import Razorpage from './Razorpage';
import ServiceBill from './ServiceBill';
import AdminProfile from './AdminProfile';

const AppContent = () => {
  const location = useLocation();

  // Define admin routes where Navbar & Footer should NOT be shown
  const adminRoutes = [
    '/AdminPanel',
    '/AdminDashboard',
    '/AdminDashboard1',
    '/servicecard',
    '/ContactUsCard',
    '/FeedbackCard',
    '/UpdateServiceForm'
  ];

  // Check if the current route is an admin route
  const isAdminRoute = adminRoutes.includes(location.pathname);

  return (
    <>
      {/* Show Navbar only if NOT on an admin route */}
      {!isAdminRoute && <AppNavbar />}

      <div className="main-content">
        <Routes>
          <Route path="/" element={<MiddleBody />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/VerificationCode" element={<VerificationCode />} />
          <Route path="/razorpage" element={<Razorpage />} />

          <Route element={<AdminProtectedRoute />}>
            <Route path="/servicecard" element={<ServiceCard />} />
            <Route path="/AdminDashboard" element={<AdminDashboard />} />
            <Route path="/AdminPanel" element={<AdminPanel />} />
            <Route path="/ContactUsCard" element={<ContactUsCard />} />
            <Route path="/FeedbackCard" element={<FeedbackCard />} />
            <Route path="/UpdateServiceForm" element={<UpdateServiceForm />} />
            <Route path="/AdminProfile" element={<AdminProfile />} />
          </Route>

          <Route element={<UserProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/feedbackform" element={<FeedbackForm />} />
            <Route path="/weddingsection" element={<WeddingSection />} />
            <Route path="/engagementsection" element={<EngagementSection />} />
            <Route path="/weddingdetails" element={<WeddingDetails />} />
            <Route path="/birthdaysection" element={<BirthdaySection />} />
            <Route path="/birthdaydetails" element={<BirthdayDetails />} />
            <Route path="/vegsection" element={<VegSection />} />
            <Route path="/vegdetails" element={<VegDetails />} />
            <Route path="/nonvegsection" element={<NonvegSection />} />
            <Route path="/nonvegdetails" element={<NonvegDetails />} />
            <Route path="/photosection" element={<PhotoSection />} />
            <Route path="/eventdetailscard" element={<EventDetailsCard />} />
            <Route path="/servicebill" element={<ServiceBill />} />
            <Route path="/TermsPrivacy" element={<TermsPrivacy />} />
          </Route>
        </Routes>
      </div>

      {/* Show Footer only if NOT on an admin route */}
      {!isAdminRoute && <AppFooter />}
    </>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default AppRouter;
