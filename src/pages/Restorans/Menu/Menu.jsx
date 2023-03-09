import { React } from 'react';
import HeaderRestaurant from '../../../components/Header-Restaurant/Header-Restaurant';
import RestaurantNavigation from '../../../components/RestaurantNavigation/RestaurantNavigation';
import logoMeni from '../../../images/logo-for-meni.png';
import FooterForRestoran from '../../../components/Footer/FooterForRestoran';
import itemsMeni from '../../../data/menuitems';
import ButtonMenu from '../../../components/Buttons/ButtonMenu';
import { useDispatch, useSelector } from 'react-redux';
import { addFood } from '../../../store/actions/food';
import removefood from '../../../images/removefood.svg';

const Menu = () => {
  const dispatch = useDispatch();
  const { sum, foods } = useSelector(({ food }) => food);

  return (
    <div className='main-meni'>
      <div className='navigation-menu-for-restoran'>
        <HeaderRestaurant />
      </div>

      <div className='main-nav-with-meni'>
        <div className='navigation-menu-for-restoran'>
          <RestaurantNavigation />
        </div>
        <div className='main-main-meni'>
          <div className='meni'>
            <div className='nav-meni-meni'>
              <div className='nav-for-shoppingcart'>
                <p className='text-nav'>PONEDELJAK</p>
                <p className='text-nav'>UTORAK</p>
                <p className='text-nav'>SREDA</p>
                <p className='text-nav'>CETVRTAK</p>
                <p className='text-nav'>PETAK</p>
              </div>
              {itemsMeni.map((item) => {
                return (
                  <div className='shopping-cart'>
                    <p className='title-for-shopping-cart'>{item.title}</p>
                    <div className='shopping-hr' />
                    <div className='div-for-complet-meni'>
                      <img src={logoMeni} alt='' className='meni-image' />
                      <div className='title-meni-shopping'>
                        <p className='shopping-title'>{item.name}</p>
                        <div className='dl-and-price'>
                          <span className='dl'>{item.dl}</span>
                          <div className='price-button'>
                            <span className='price'>{item.price} din</span>
                            <ButtonMenu
                              callbackAction={() =>
                                dispatch(
                                  addFood({
                                    name: item.name,
                                    price: item.price,
                                  })
                                )
                              }
                            >
                              {item.button}
                            </ButtonMenu>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='calculator'>
            <p className='calculator-paragraf'>Kalkulator</p>
            <div className='calculator-hr' />
            {foods.map((food) => {
              return (
                <div className='name-and-count'>
                  <div className='name-and-remove-food'>
                    <p className='name-food'>{food.name}</p>
                    <button className='remove-food'>
                      <img
                        src={removefood}
                        alt=''
                        className='image-for-remove-food'
                      />
                    </button>
                  </div>
                  <br />
                  <div className='div-for-count-and-button'>
                    <button className='button-dec'>-</button>
                    <p className='count'>{food.count}</p>
                    <button className='button-inc'>+</button>
                  </div>
                </div>
              );
            })}
            <p className='total-price'>
              Ukupno : <span className='sum-price'>{sum} RSD</span>
            </p>
          </div>
        </div>
      </div>
      <FooterForRestoran />
    </div>
  );
};

export default Menu;
