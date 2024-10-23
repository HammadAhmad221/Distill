import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Results from "./Pages/Results";
import ComingSoon from "./Pages/CommingSoon";

function Routing() {
  const location = useLocation(); // Now this will work properly within the Router context
  const isDashboardPage = location.pathname === "/dashboard"; // Check if the current route is the /dashboard
  const isResultsPage = location.pathname === "/results"; // Check if the current route is the /results

  return (
    <>
{/* <Router> */}
      
      {/* Conditionally render the header */}
      {!isDashboardPage && !isResultsPage && <Header />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/results" element={<Results />} />
        <Route path="/coming" element={<ComingSoon />} />
      </Routes>
      {/* Conditionally render the footer */}
      {!isDashboardPage && !isResultsPage && <Footer />}
      
{/* </Router> */}
    </>
  );
}

// Wrap the entire app with Router
const App = () => (
  <Router>
    <Routing />
  </Router>
);

export default App;
