import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import FooterForRestoran from './components/Footer/FooterForRestoran';
import RestoranTopFood from './pages/Restorans/RestoranTopFood';
import Menu from './pages/Restorans/Menu/Menu';
import Impressions from './pages/Restorans/Impressions/Impressions';
import Gallery from './pages/Restorans/Gallery/Gallery';
import PrivacyNotices from './pages/AdditionalInformation/PrivacyNotices';
import TermsOfUse from './pages/AdditionalInformation/TermsOfUse';
import RestourantTopFood from './pages/RestourantTopFood/RestourantTopFood';
import AboutUs from './pages/AboutUs/AboutUs';
import Faq from './pages/AboutUs/Faq';
import PrivacyPolicy from './pages/AboutUs/PrivacyPolicy';
import TermsOfUseAboutus from './pages/AboutUs/TermsOfUseAboutUs';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/topfood' element={<RestoranTopFood />} />
        <Route path='/navigation' element={<Navigation />} />
        <Route path='/footer' element={<FooterForRestoran />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/impressions' element={<Impressions />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/privacynotices' element={<PrivacyNotices />} />
        <Route path='/termsofuse' element={<TermsOfUse />} />
        <Route path='/restouranttopfood' element={<RestourantTopFood />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/aboutus/faq' element={<Faq />} />
        <Route path='/aboutus/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/aboutus/termsofuse' element={<TermsOfUseAboutus />} />
      </Routes>
    </div>
  );
};

export default App;
