import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import Gallery from './components/Gallery/Gallery';
import Contacts from './components/Contacts/Contacts';
import Services from './components/Services/Services';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
