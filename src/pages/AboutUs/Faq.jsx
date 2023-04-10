import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import AccordionAboutUs from '../../components/AccordionAboutUs';
import { getAllFaq } from '../../store/actions/faq';
import axios from 'axios';
import Header from '../../components/Header/Header';
import MenuforAboutUs from '../../components/MenuforAboutUs';
import Footer from '../../components/Footer/FooterForRestoran';

const Faq = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        'https://qfs1bpf9kg.execute-api.us-east-1.amazonaws.com/dev/faq'
      );
      setData(result.data);
    }
    fetchData();
  }, []);
  return (
    <div className='faq'>
      <div className='div-for-header'>
        <Header />
        <h3 className='title-for-about'>DUNDA</h3>
        <div className='day-menu'> </div>
      </div>
      <div className='accordion-faq'>
        <div className='menu-faq'>
          <MenuforAboutUs />
        </div>
        {data.map((item, index) => (
          <AccordionAboutUs
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
      <div className='div-for-faq'>
        <Footer />
      </div>
    </div>
  );
};

export default Faq;
