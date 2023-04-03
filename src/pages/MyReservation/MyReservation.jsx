import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CancelButton from '../../components/Buttons/CancelButton';
import HeaderWithLogin from '../../components/Header/HeaderWithLogin';
import { removeFromCart } from '../../store/actions/food';
import WeekButtons from '../../components/WeekButtons/WeekButtons';
import ModalForRemoveItem from '../../components/SuccesMessageRegister/ModalForRemoveItem';

const MyReservation = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const { cart } = useSelector(({ food }) => food);
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();

  const closeModal = () => setShowModal(!showModal);
  return (
    <div className='my-reservation-wrapper'>
      <div className='header-reservation'>
        <HeaderWithLogin />
      </div>
      <div className='text-and-buttons-myreservation'>
        <p className='myreservation-text'>Moje rezervacije</p>
        <p className='text-cancel-reservation'>
          Rezervacije se mogu otkazati do ponoci
        </p>
      </div>
      <WeekButtons />
      <div className='month-day'>
        <p>{month}</p>
        <p>{day}</p>
      </div>
      <div className='my-reservation-main'>
        <div className='image-text-myreservation'>
          {cart.map((food) => {
            return (
              <div className='name-text-price-count-myreservation'>
                <div className='name-restaurant-number-reservation'>
                  <p className='name-restaurant'>Restoran Top FOOD 021</p>
                  <p className='number-reservation'>Rezervacija broj xxxxx</p>
                </div>
                <div className='all-together-myreservation'>
                  <img src={food.image} alt='' />
                  <div className='myreservation-information'>
                    <p className='name-reservation'>{food.name}</p>
                    <div className='text-myreservation'>
                      <p className='paragraf-myreservation'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Donec odio. Quisque volutpat mattis eros.Lorem
                        ipsum dolor sit amet, consectetuer adipiscing elit.
                        Donec odio. Quisque volutpat mattis eros
                      </p>
                    </div>
                    <p className='count-myreservation'>1 porcija</p>
                    <div className='price-button'>
                      <p className='price-myreservation'>{food.price} din</p>
                      <CancelButton
                        className='button-myreservation'
                        onClick={() =>
                          dispatch(
                            removeFromCart({
                              id: food.id,
                              price: food.price,
                            })
                          )
                        }
                      >
                        Otkazi rezervaciju
                      </CancelButton>
                    </div>
                  </div>
                </div>
                <hr className='hr-myreservation' />
              </div>
            );
          })}
          {showModal && (
            <div className='modal'>
              <ModalForRemoveItem closeModal={closeModal} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyReservation;
