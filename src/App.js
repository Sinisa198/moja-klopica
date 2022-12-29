import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Forms from './components/Forms/Forms';
import ListRestorans from './components/pages/ListRestorans/ListRestorans';
import FooterForRestoran from './components/Footer/FooterForRestoran';
import RestoranTopFood from './components/pages/Restorans/RestoranTopFood';
import Menu from './components/pages/Restorans/Menu/Menu';
import Impressions from './components/pages/Restorans/Impressions/Impressions';
import Gallery from './components/pages/Restorans/Gallery/Gallery';
import FrequentlyAskedQuestions from './components/pages/AdditionalInformation/FrequentlyAskedQuestions';
import PrivacyNotices from './components/pages/AdditionalInformation/PrivacyNotices';
import TermsOfUse from './components/pages/AdditionalInformation/TermsOfUse';
import HomePage from './components/pages/HomePage/HomePage';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/topfood' element={<RestoranTopFood />} />
        <Route path='/navigation' element={<Navigation />} />
        <Route path='/forms' element={<Forms />} />
        <Route path='/listrestoran' element={<ListRestorans />} />
        <Route path='/footer' element={<FooterForRestoran />} />
        <Route path='/meni' element={<Menu />} />
        <Route path='/impressions' element={<Impressions />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/askedquestions' element={<FrequentlyAskedQuestions />} />
        <Route path='/privacynotices' element={<PrivacyNotices />} />
        <Route path='/termsofuse' element={<TermsOfUse />} />
      </Routes>
    </div>
  );
};

export default App;
