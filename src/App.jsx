import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/home/Home';
import BaseballPage from './components/pages/baseball/BaseballPage';
import './App.css';

function App() {
  return (
    <Router>
      {/* Navbar visible on all pages 
      title="Jersey Shop"
        navLinks={[
          { label: 'Home', href: '/' },
          { label: 'Baseball', href: '/baseball' }
        ]}*/}
      <Navbar />
      

      {/* Page content */}
      <main style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/baseball" element={<BaseballPage />} />
        </Routes>
      </main>


      <Footer />

    </Router>
    
  );
}

export default App;
