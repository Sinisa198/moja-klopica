import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ModalReservation from '../../components/ModalReservation/ModalReservation';
import HeaderWithLogin from '../../components/Header/HeaderWithLogin';
import ConfirmReservation from '../../components/Buttons/ConfirmReservation';
import removeFood from '../../images/removereservation.svg';
import {
  removeFromCart,
  incrementCart,
  decrementCart,
} from '../../store/actions/food';
import Footer from '../../components/Footer/FooterForRestoran';
import { getDayOfTheWeek } from '../../components/utils/weekDay';
import FoodList from '../../components/Accordion/FoodList';

const Reservation = () => {
  const [currentDayOfTheMenu, setCurrentDayOfTheMenu] = useState(
    getDayOfTheWeek()
  );
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();

  const { sum, cart, count } = useSelector(({ food }) => food);

  const changeCurrentMenuDay = (day) => setCurrentDayOfTheMenu(day);

  const showModalMessage = () => {
    if (cart.length >= 1) {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className='reservation-wrapper'>
      <div className='header-reservation'>
        <HeaderWithLogin />
      </div>

      <p className='title-reservation'>Restoran Top FOOD 021</p>
      <p className='paragraf-reservation'>OPSTE INFORMACIJE</p>
      <p className='day-reservation'>Dnevni meni {date.toLocaleDateString()}</p>
      <div>
        <div className='modal-reservation' onClick={handleCloseModal}>
          {showModal && <ModalReservation />}
        </div>
      </div>

      <div className='reservation-main'>
        <FoodList
          currentDayOfTheMenu={currentDayOfTheMenu}
          changeCurrentMenuDay={changeCurrentMenuDay}
        />

        <div className='cart'>
          <p className='title-cart'>KORPA</p>

          {cart.map((food) => {
            return (
              <div className='main-reservation-cart' key={food.id}>
                <img src={food.image} alt='' className='image-reservation' />
                <div className='name-inc-dec'>
                  <p className='cart-name-food'>{food.name}</p>
                  <div className='count-reservation'>
                    <button
                      className='reservation-inc-dec'
                      onClick={() => dispatch(decrementCart(food.id))}
                      disabled={count === 1}
                    >
                      -
                    </button>
                    <p>{count}</p>
                    <button
                      className='reservation-inc-dec'
                      onClick={() => dispatch(incrementCart(food.id))}
                    >
                      +
                    </button>
                  </div>
                  <div className='delete-icon-price'>
                    <img
                      onClick={() =>
                        dispatch(
                          removeFromCart({
                            id: food.id,
                            price: food.price,
                          })
                        )
                      }
                      src={removeFood}
                      alt=''
                      className='icon-remove-reservation'
                    />

                    <p>{food.price * count} RSD</p>
                    <div className='div-for-hr-cart'>
                      <hr className='hr-cart' />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className='total-price'>
            Ukupno : <span className='sum-price'>{sum} RSD</span>
          </div>
          <div className='confirm-reservation'>
            <ConfirmReservation handleClick={showModalMessage}>
              Potvrdi rezervaciju
            </ConfirmReservation>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reservation;
