import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Forms from './components/Forms/Forms';
import ListRestorans from './components/ListRestorans/ListRestorans';
import Footer from './components/Footer/Footer';
import RestoranTopFood from './components/Restorans/RestoranTopFood';
import Meni from './components/Restorans/Meni/Meni';
import Impressions from './components/Restorans/Impressions/Impressions';
import Galery from './components/Restorans/Galery/Galery';
const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/topfood' element={<RestoranTopFood />} />
        <Route path='/navigation' element={<Navigation />} />
        <Route path='/forms' element={<Forms />} />
        <Route path='/listrestoran' element={<ListRestorans />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/meni' element={<Meni />} />
        <Route path='/impressions' element={<Impressions />} />
        <Route path='/galery' element={<Galery />} />
      </Routes>
    </div>
  );
};

export default App;
