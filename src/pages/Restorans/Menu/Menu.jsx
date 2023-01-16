import { React } from 'react';
import HeaderRestoran from '../../../components/Header-Restoran/Header-Restoran';
import Nav from '../../../components/Nav/Nav';
import logoMeni from '../../../images/logo-for-meni.png';
import FooterForRestoran from '../../../components/Footer/FooterForRestoran';
import itemsMeni from '../../../components/data/menuitems';
import ButtonMenu from '../../../components/ButtonMenu';
import { useDispatch, useSelector } from 'react-redux';
import { addFood, incremente, decremente } from '../../../store/actions/food';
import removefood from '../../../images/removefood.svg';

const Menu = () => {
  const dispatch = useDispatch();
  const { sum, foods } = useSelector(({ food }) => food);

  return (
    <div className='main-meni'>
      <div className='navigation-menu-for-restoran'>
        <HeaderRestoran />
      </div>
      {/* <div className='container'>
        <input type='checkbox' name='' id='' className='check' />
        <ul className='menu-items'>
          <li className='li-for-burger-menu'>
            <p>Početna</p>
          </li>
          <li>
            <p>Kategorije</p>
          </li>
          <li>
            <p>Ponude</p>
          </li>
          <li>
            <p>Pomoć</p>
          </li>
          <li>
            <p>Kontakt</p>
          </li>
        </ul>
        <div className='ham-menu'>
          <span className='line line1'></span>
          <span className='line line2'></span>
          <span className='line line3'></span>
        </div>
      </div> */}
      <div className='main-nav-with-meni'>
        <div className='navigation-menu-for-restoran'>
          <Nav />
        </div>
        <div className='main-main-meni'>
          <div className='meni'>
            <div className='nav-meni-meni'>
              <div className='nav-for-shoppingcart'>
                <p className='text-nav'>SUPE I ČORBE</p>
                <p className='text-nav'>GLAVNA JELA</p>
                <p className='text-nav'>SALATE</p>
                <p className='text-nav'>DEZERTI</p>
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
                    <p className='name-food'>{food.name}</p>{' '}
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
                    <button
                      className='button-dec'
                      onClick={() => dispatch(decremente())}
                    >
                      -
                    </button>{' '}
                    <p className='count'>{food.count}</p>
                    <button
                      className='button-inc'
                      onClick={() => dispatch(incremente())}
                    >
                      +
                    </button>
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
