import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import FlightSearch from './components/FlightSearch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ThankYou from './components/ThankYou';
import SeatSelection from './components/SeatSelection';
import Confirmation from './components/Confirmation';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

function App() {
  const [searchState, setSearchState] = useState({
    from: "",
    to: "",
    date: "",
  });

  const [selectedSeats, setSelectedSeats] = useState([]);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <BrowserRouter>
          <Routes>
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path='/' element={<FlightSearch searchState={searchState} setSearchState={setSearchState} />} />
            <Route path="/flight/:id" element={<SeatSelection selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />} />
            <Route path="Confirmation" element={<Confirmation />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
