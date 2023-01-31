import React from 'react';
import HomePageHeader from '../../components/HomePageHeader/HomePageHeader';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/FooterForRestoran';

const ListRestorans = () => {
  return (
    <div className='home-page-header'>
      <Header />
      <HomePageHeader />
      <Footer />
    </div>
  );
};

export default ListRestorans;
