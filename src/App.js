import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Forms from './components/Forms/Forms';
import ListRestorans from './components/ListRestorans/ListRestorans';
import Footer from './components/Footer/Footer';
import RestoranTopFood from './components/Restorans/RestoranTopFood';

const App = () => {
  return (
    <div className='App'>
      {/* <Navigation /> 
      <Forms />
      <ListRestorans />
      <Footer />  */}
      {/* <RestoranTopFood/> */}

      <Routes>
        <Route path='/topfood' element={<RestoranTopFood />} />
        <Route path='/navigation' element={<Navigation />}></Route>
        <Route path='/forms' element={<Forms />} />
        <Route path='/listrestoran' element={<ListRestorans />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
    </div>
  );
};

export default App;
