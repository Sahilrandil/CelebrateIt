// import React, { useEffect } from 'react';
// import AppNavbar from './components/AppNavbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import WebFont from 'webfontloader'; //for font
// import MiddleBody from './components/MiddleBody';
// import AppFooter from './components/AppFooter';
// import Registration from './components/Registration';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
// import AdminDashboard from './components/AdminDashboard';
// import Gallery from './components/Gallery';
// import AboutUs from './components/AboutUs';
// import ContactUs from './components/ContactUs';
// import WeddingSection from './components/WeddingSection';
// import WeddingDetails from './components/WeddingDetails';

// function App() {

//   //font
//   useEffect(() => {
//     WebFont.load({
//       google: {
//         families: ['Arapey', 'sans-serif'], // Add more fonts if needed
//       },
//     });
//   }, []);

//   return (
//     <div>
      
      
//       {/* <AppNavbar></AppNavbar> */}
//       {/* <MiddleBody /> */}
//       {/* <Registration></Registration> */}
//       {/* <Login></Login> */}
//       {/* <Dashboard></Dashboard> */}
//       {/* <AdminDashboard></AdminDashboard> */}
//       {/* <Gallery></Gallery> */}
//       {/* <AboutUs></AboutUs> */}
//       {/* <ContactUs></ContactUs> */}
//       {/* <WeddingSection></WeddingSection> */}
//       {/* <WeddingDetails></WeddingDetails> */}
//       {/* <AppFooter></AppFooter> */}
      
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from 'react';
import WebFont from 'webfontloader'; // For loading fonts
import AppRouter from './components/AppRouter'; // Import the AppRouter
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Load custom fonts using WebFont loader
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Arapey', 'sans-serif'], // Add more fonts if needed
      },
    });
  }, []);

  return (
    <div>
      {/* Render the Router component which has Navbar and Footer fixed */}
      <AppRouter />
    </div>
  );
}

export default App;
