import React from 'react';
import AccordionAboutUs from '../../components/AccordionAboutUs';
import accordionData from '../../data/acordionaboutus';
import Header from '../../components/Header/Header';
import MenuforAboutUs from '../../components/MenuforAboutUs';
import Footer from '../../components/Footer/FooterForRestoran';

const Faq = () => {
  return (
    <div>
      <div className='div-for-header'>
        <Header />
        <h3 className='title-for-about'>DUNDA</h3>
        <div className='day-menu'>
          <MenuforAboutUs />
        </div>
      </div>
      <div className='accordion'>
        {accordionData?.map(({ title, content }, index) => (
          <AccordionAboutUs key={index} title={title} content={content} />
        ))}
      </div>
      <div className='div-for-faq'>
        <Footer />
      </div>
    </div>
  );
};

export default Faq;
