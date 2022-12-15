import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import atina from '../../images/restoranatina.png';
import topfood from '../../images/restorantopfood.png';
import mima from '../../images/restoranmima.png';
import pasta from '../../images/pasta.png';
import lorem2 from '../../images/lorem2.png';
import lorem1 from '../../images/lorem1.png';
import { RiStarSFill } from 'react-icons/ri';
import {AiOutlineStar} from 'react-icons/ai'
const listrestorans = [
  {
    img: pasta,
    name: 'Lorem Ipsum',
    description: 'RESTORANI * Lorem Ipsum ',
    minutes: ' 0.2km 25min',
    stars: '4.2',
    free: 'Besplatna dostava',
  },
  {
    img: topfood,
    name: 'Lorem Ipsum',
    description: 'RESTORANI * Lorem Ipsum ',
    minutes: ' 0.2km 25min',
    stars: '4.2',
    free: 'Besplatna dostava',
  },
  {
    img: lorem2,
    name: 'Lorem Ipsum',
    description: 'RESTORANI * Lorem Ipsum ',
    minutes: ' 0.2km 25min',
    stars: '4.2',
    free: 'Besplatna dostava',
  },
  {
    img: topfood,
    name: 'Lorem Ipsum',
    description: 'RESTORANI * Lorem Ipsum ',
    minutes: ' 0.2km 25min',
    stars: '4.2',
    free: 'Besplatna dostava',
  },
  {
    img: lorem2,
    name: 'Restoran Lorem Ipsum',
    description: 'RESTORAN * Lorem Ipsum ',
    minutes: ' 0.2km 25min',
    stars: '4.2',
    free: 'Besplatna dostava',
  },
  {
    img: pasta,
    name: 'Restoran Lorem Ipsum',
    description: 'RESTORANI * Lorem Ipsum ',
    minutes: ' 0.2km 25min',
    stars: '4.2',
    free: 'Besplatna dostava',
  },
  {
    img: lorem1,
    name: 'Restoran Lorem Ipsum',
    description: 'RESTORANI * Lorem Ipsum ',
    minutes: ' 0.2km 25min',
    stars: '4.2',
    free: 'Besplatna dostava',
  },
  {
    img: pasta,
    name: 'Restoran Lorem Ipsum',
    description: 'RESTORANI * Lorem Ipsum ',
    minutes: ' 0.2km 25min',
    stars: '4.2',
    free: 'Besplatna dostava',
  },
  {
    img: topfood,
    name: 'Restoran Lorem Ipsum',
    description: 'RESTORANI * Lorem Ipsum ',
    minutes: ' 0.2km 25min',
    stars: '4.2',
    free: 'Besplatna dostava',
  },
  {
    img: topfood,
    name: 'Restoran Top FOOD 021',
    description: 'RESTORANI * Domaca Kuhinja ',
    minutes: ' 0.2km 25min',
    stars: '4.2',
    free: 'Besplatna dostava',
  },
  {
    img: atina,
    name: 'Restoran Atina',
    description: 'RESTORANI * Cafe Bar',
    minutes: '0.2km 25min',
    stars: '4.5',
    free: 'Besplatna dostava',
  },
  {
    img: mima,
    name: "Restoran Mima's fit 'n' sit",
    description: 'RESTORANI * Veganska Kuhinja',
    minutes: ' 0.2km 25min',
    stars: '4.0 ',
    free: 'Besplatna dostava',
  },
];

const ListRestorans = () => {
  const navigate = useNavigate();
  const navigateToRestoran = () => {
    navigate('/topfood')
  }
  return (

    <div className='listrestoran-main'>
      {listrestorans.map((item) => (
        <div className='list' key={item.id}>
          <Link to='/topfood'>
          <img className='image-for-listrestoran' onClick={() =>navigateToRestoran()} src={item.img} alt='' />
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
            <AiOutlineStar className='star-rating'/>
            </div>
            <div className='free'>{item.free}</div>
          </div>
        </div>
      ))}
      <div className='button-restoran'>
        <button>Click</button>
      </div>
    </div>
  );
};

export default ListRestorans;
