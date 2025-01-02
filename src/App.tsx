import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programme from './pages/Programme';
import Certifies from './pages/Certifies';
import About from './pages/About';
import Quiz from './pages/Quiz';
import Shop from './pages/Shop';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black bg-fixed bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop')] bg-blend-overlay bg-cover bg-center">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programme" element={<Programme />} />
            <Route path="/certifies" element={<Certifies />} />
            <Route path="/about" element={<About />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

function BackToTop() {
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#fd5f05] p-3 rounded-full shadow-lg hover:bg-[#e54d00] transition-colors z-50"
          aria-label="Retour en haut"
        >
          <ArrowUp className="h-6 w-6 text-white" />
        </button>
      )}
    </>
  );
}

export default App;