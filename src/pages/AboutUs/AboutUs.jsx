import React from 'react';
import Header from '../../components/Header/Header';
import aboutusImage from '../../images/image-for-aboutus.png';
import Footer from '../../components/Footer/FooterForRestoran';
import MenuforAboutUs from '../../components/MenuforAboutUs';

const AboutUs = () => {
  return (
    <div className='about-wrapper'>
      <div className='div-for-header'>
        <Header />
        <h3 className='title-for-about'>DUNDA</h3>
      </div>
      <div className='main-div-about-us'>
        <MenuforAboutUs />
        <div className='text-and-image'>
          <div className='image-about-us'>
            <img src={aboutusImage} alt='' />
          </div>
          <div className='text-about-us'>
            <p className='title-aboutus'>Lorem ipsum?</p>
            <div className='container-paragraf-aboutus'>
              <p className='paragraf-aboutus'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mi elit, commodo nec ante id, ornare efficitur dui. Nullam mi
                elit, commodo nec ante id, ornare effiLorem ipsum dolor sit
                amet, consectetur adipiscing elit. Nullam mi elit, commodo nec
                ante id, ornare efficitur dui.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
