// App.jsx
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './features/pages/Home/Home';
import About from './features/pages/About/About';
import Service from './features/pages/Service/Service';
import Blog from './features/pages/Blog/Blog';
import Portfolio from './features/pages/Portfolio/Portfolio';
import Contact from './features/pages/Contact/Contact';
import Loader from './features/compnent/Loder/Loader';


function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // প্রথমবার পেজ লোড হলে
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000); // ১ সেকেন্ডের জন্য
    return () => clearTimeout(timeout);
  }, []);

  // যখন রাউট চেঞ্জ হয়
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
