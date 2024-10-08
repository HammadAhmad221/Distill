// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import './App.css';
// import LandingPage from './Pages/LandingPage';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import Login from './Pages/Login';
// import Signup from './Pages/Signup';
// import Dashboard from './Pages/Dashboard';

// function App() {
//   const location = useLocation();
//   const isDashboardPage = location.pathname === '/dashboard';
//   return (
//     <Router>
//      {!isDashboardPage && <Header/>}
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/dashboard" element={<Dashboard />} />


//       </Routes>
//       {!isDashboardPage&&<Footer/>}
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';

function App() {
  const location = useLocation(); // Now this will work properly within the Router context
  const isDashboardPage = location.pathname === '/dashboard'; // Check if the current route is the dashboard

  return (
    <>
      {/* Conditionally render the header */}
      {!isDashboardPage && <Header />}
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      
      {/* Conditionally render the footer */}
      {!isDashboardPage && <Footer />}
    </>
  );
}

// Wrap the entire app with Router
const Main = () => (
  <Router>
    <App />
  </Router>
);

export default Main;
