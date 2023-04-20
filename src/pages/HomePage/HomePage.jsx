import React, { useState, useEffect } from 'react';
import HomePageHeader from '../../components/RegisterLoginForm/RegisterLoginForm';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/FooterForRestoran';
import { getDayOfTheWeek } from '../../components/utils/weekDay';
import FoodListHomePage from '../../components/Accordion/FoodListHomePage';

const HomePage = () => {
  const [currentDayOfTheMenu, setCurrentDayOfTheMenu] = useState(
    getDayOfTheWeek()
  );
  const [date, setDate] = useState(new Date());
  const changeCurrentMenuDay = (day) => setCurrentDayOfTheMenu(day);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    });

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='home-page-wrapper'>
      <Header />
      <HomePageHeader />
      <div className='div-main-homepage'>
        <div className='div-for-title-homepage'>
          <p className='restourant-title'>Resotran Top FOOD 021</p>
          <p className='paragraf'>OPSTE INFORMACIJE</p>
        </div>

        <p className='text-for-meny'>Dnevni meni {date.toLocaleDateString()}</p>
        <div className='modal-hiden' id='modal2'></div>
        <FoodListHomePage
          currentDayOfTheMenu={currentDayOfTheMenu}
          changeCurrentMenuDay={changeCurrentMenuDay}
        />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
