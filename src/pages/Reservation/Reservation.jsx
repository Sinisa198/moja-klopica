import React, { useState, useEffect } from 'react';
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
import FoodCard from '../../components/Accordion/FoodCard';

const Reservation = ({ email }) => {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();

  const { sum, cart } = useSelector(({ food }) => food);

  const showModalMessage = () => {
    if (cart.length >= 1) {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    });

    return () => clearInterval(intervalId);
  }, []);

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
        <FoodCard />

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
                      disabled={food.count === 1}
                    >
                      -
                    </button>
                    <p>{food.count}</p>
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

                    <p>{food.price * food.count} RSD</p>
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
