import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { RiStarSFill } from 'react-icons/ri';
import { AiOutlineStar } from 'react-icons/ai';
import Forms from '../../components/Forms/Forms';
import Navigation from '../../components/Navigation/Navigation';
import FooterForRestoran from '../../components/Footer/FooterForRestoran';
import listrestorans from '../../components/data/listrestoranitem';
import ButtonForRestoran from '../../components/ButtonForRestoran';

const ListRestorans = () => {
  const navigate = useNavigate();
  const navigateToRestoran = () => navigate('/topfood');

  return (
    <div>
      <div className='navi-forms'>
        <Navigation />
        <Forms />
      </div>
      <div className='listrestoran-main'>
        {listrestorans.map((item) => (
          <div className='list' key={item.id}>
            <Link to='/topfood'>
              <img
                className='image-for-listrestoran'
                onClick={navigateToRestoran}
                src={item.img}
                alt=''
              />
            </Link>
            <div className='title-listrestoran'>{item.name}</div>
            <div className='description-listrestoran'>
              {item.description}
              <div className='minutes'>{item.minutes}</div>
            </div>
            <div className='stars'>
              {item.stars}
              <div class='list-stars'>
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <AiOutlineStar className='star-rating' />
              </div>
              <div className='free'>{item.free}</div>
            </div>
          </div>
        ))}
        <ButtonForRestoran>Vidi više</ButtonForRestoran>
      </div>
      <FooterForRestoran />
    </div>
  );
};

export default ListRestorans;
