import './App.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RestoranTopFood from './pages/Restorans/RestoranTopFood';
import Reservation from './pages/Reservation/Reservation';
import MyReservation from './pages/MyReservation/MyReservation';
import Profile from './pages/Profile/Profile';

import RestourantTopFood from './pages/RestourantTopFood/RestourantTopFood';
import AboutUs from './pages/AboutUs/AboutUs';
import Faq from './pages/AboutUs/Faq';
import PrivacyPolicy from './pages/AboutUs/PrivacyPolicy';
import TermsOfUseAboutus from './pages/AboutUs/TermsOfUseAboutUs';
import ListRestaurant from './pages/ListRestaurant/ListRestaurant';
import RestaurantInfo from './pages/Restorans/RestaurantInfo';
import PasswordIsChanged from './components/PasswordIsChanged/PasswordIsChanged';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/topfood' element={<RestoranTopFood />} />
        <Route path='/reservation' element={<Reservation />} />
        <Route path='/myreservation' element={<MyReservation />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/restourantopfood' element={<RestourantTopFood />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/aboutus/faq' element={<Faq />} />
        <Route path='/aboutus/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/aboutus/termsofuse' element={<TermsOfUseAboutus />} />
        <Route path='/listrestaurant' element={<ListRestaurant />} />
        <Route path='/restaurantinfo' element={<RestaurantInfo />} />
        <Route path='/s' element={<PasswordIsChanged />} />
      </Routes>
    </div>
  );
};

export default App;
