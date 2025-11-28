import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/home/Home';
import BaseballPage from './components/pages/baseball/BaseballPage';
import Outlet from './components/pages/outlet/Outlet';
import Ariat from './components/pages/ariat/Ariat';
import Harley from './components/pages/harley/Harley';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      

      {/* Page content */}
      <main style={{ padding: 5 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/baseball" element={<BaseballPage />} />
          <Route path="/outlet" element={<Outlet />} />
          <Route path="/ariat" element={<Ariat />} />
          <Route path="/harley" element={<Harley />} />
        </Routes>
      </main>


      <Footer />

    </Router>
    
  );
}

export default App;
