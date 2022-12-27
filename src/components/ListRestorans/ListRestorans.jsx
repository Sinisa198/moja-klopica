import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { RiStarSFill } from 'react-icons/ri';
import { AiOutlineStar } from 'react-icons/ai';
import Forms from '../Forms/Forms';
import Navigation from '../Navigation/Navigation';
import FooterForRestoran from '../Footer/FooterForRestoran';
import listrestorans from '../data/listrestoranitem';

const ListRestorans = () => {
  const navigate = useNavigate();
  const navigateToRestoran = () => {
    navigate('/topfood');
  };
  return (
    <div>
      <Navigation />
      <Forms />
      <div className='listrestoran-main'>
        {listrestorans.map((item) => (
          <div className='list' key={item.id}>
            <Link to='/topfood'>
              <img
                className='image-for-listrestoran'
                onClick={() => navigateToRestoran()}
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
        <div className='button-restoraan'>
          <button className='button-for-restoran'>Vidi više</button>
        </div>
      </div>
      {/* <FooterForRestoran /> */}
    </div>
  );
};

export default ListRestorans;
