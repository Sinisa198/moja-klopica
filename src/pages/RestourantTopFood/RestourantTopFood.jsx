import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/FooterForRestoran';
import map from '../../images/map.svg';
import watch from '../../images/watch.svg';
import locationRestourant from '../../images/location-restourant.svg';
import phoneRestourant from '../../images/phone-restourant.svg';
import imageRestourant from '../../images/image-restourant.svg';

const RestourantTopFood = () => {
  return (
    <div className='restourant-wrapper'>
      <div className='div-for-header-background'>
        <Header />
      </div>

      <div className='div-wrapper-restourant'>
        <div className='main-div-restourant'>
          <div className='title-restourant'>Restoran Top Food 021</div>
          <div className='day-restourant'>
            <img src={watch} alt='' />
            Ponedeljak-Petak, 12h-15h
          </div>
          <div className='adress-restourant'>
            <img src={locationRestourant} alt='' />
            Svetozara Miletića 26, 21000 Novi Sad
          </div>
          <div className='phone-restourant'>
            <img src={phoneRestourant} alt='' />
            0644226471
          </div>
          <div className='paragraf-text-restourant'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi
            elit, commodo nec ante id, ornare efficitur dui. Nulla in quam sed
            ex aliquam feugiat. In varius risus est, sed placerat tortor mollis
            a. Donec nec aliquet ante. Duis dictum, enim vel feugiat ultrices,
            sapien massa lobortis erat, non mollis libero nisl quis quam. Nunc
            tristique eget metus a dictum.
          </div>
        </div>
        <div className='div-image-map'>
          <img src={map} alt='' className='map-image' />
        </div>
      </div>
      <p className='gallery-text'>Galerija</p>

      <div className='list-image'>
        <img src={imageRestourant} className='image-list' alt='' />
        <img src={imageRestourant} className='image-list' alt='' />
        <img src={imageRestourant} className='image-list' alt='' />
        <img src={imageRestourant} className='image-list' alt='' />
        <img src={imageRestourant} className='image-list' alt='' />
        <img src={imageRestourant} className='image-list' alt='' />
      </div>
      <Footer />
    </div>
  );
};

export default RestourantTopFood;
