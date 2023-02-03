import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import FooterForRestoran from './components/Footer/FooterForRestoran';
import RestoranTopFood from './pages/Restorans/RestoranTopFood';
import Menu from './pages/Restorans/Menu/Menu';
import Impressions from './pages/Restorans/Impressions/Impressions';
import Gallery from './pages/Restorans/Gallery/Gallery';
import FrequentlyAskedQuestions from './pages/AdditionalInformation/FrequentlyAskedQuestions';
import PrivacyNotices from './pages/AdditionalInformation/PrivacyNotices';
import TermsOfUse from './pages/AdditionalInformation/TermsOfUse';
import AboutUs from './pages/AboutUs/AboutUs';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/topfood' element={<RestoranTopFood />} />
        <Route path='/navigation' element={<Navigation />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/footer' element={<FooterForRestoran />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/impressions' element={<Impressions />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/faq' element={<FrequentlyAskedQuestions />} />
        <Route path='/privacynotices' element={<PrivacyNotices />} />
        <Route path='/termsofuse' element={<TermsOfUse />} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
    </div>
  );
};

export default App;
