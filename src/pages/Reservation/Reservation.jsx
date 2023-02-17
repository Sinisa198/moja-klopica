import React, { useState, useEffect } from 'react';
import WeekButtons from '../../components/WeekButtons/WeekButtons';
import { useSelector, useDispatch } from 'react-redux';
import listItemsMenu from '../../data/listitemsmenu';
import Accordion from '../../components/Accordion/Accordion';
import { addFood } from '../../store/actions/food';

const Reservation = () => {
  const [product, setProducts] = useState(1);
  const submitHandler = (event) => {
    event.preventDefault();
  };
  const handleDecremente = () => {
    if (product > 1) setProducts((product) => Number(product) - 1);
  };
  const handleIncremente = () => {
    if (product < 20) setProducts((product) => Number(product) + 1);
  };
  const dispatch = useDispatch();
  const { sum, foods } = useSelector(({ food }) => food);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='reservation-wrapper'>
      <p className='title-reservation'>Restoran Top FOOD 021</p>
      <p className='paragraf-reservation'>
        OPSTE INFORMACIJE
        <hr className='reservation-hr' />
      </p>

      <p className='day-reservation'>Dnevni meni {date.toLocaleDateString()}</p>

      <div className='reservation-main'>
        <div className='main-for-list-reservation'>
          <WeekButtons />

          {listItemsMenu.map((item) => {
            return (
              <div
                key={item.description}
                className='together-list-image-reservation'
              >
                <img
                  src={item.image}
                  alt=''
                  className='image-list-reservation'
                />
                <Accordion title={item.description} text={item.text} />
                <div className='div-for-menu-price-reservation'>
                  <p className='menu-price-reservation'>{item.menu}</p>
                  <p className='price-reservation'>{item.price} din </p>
                </div>
                <div className='inc-dec'>
                  <span
                    className='incremente-decremente'
                    onClick={handleDecremente}
                  >
                    -
                  </span>
                  <p onChange={submitHandler}>{product}</p>
                  <span
                    className='incremente-decremente'
                    onClick={handleIncremente}
                  >
                    +
                  </span>
                </div>
                <div className='button-reservation'>
                  <button
                    callbackAction={() =>
                      dispatch(
                        addFood({
                          name: item.description,
                          price: item.price,
                          image: item.image,
                        })
                      )
                    }
                  >
                    Rezervisi
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div></div>
        <div className='cart'>
          <p className='title-cart'>KORPA</p>

          {foods.map((food) => {
            return (
              <div className='main-reservation-cart' key={food.id}>
                <img src={food.image} alt='' className='image-reservation' />
                <div className='name-inc-dec'>
                  <p>{food.name}</p>
                  <div className='count-reservation'>
                    <p className='reservation-inc-dec'>-</p>
                    <p>1</p>
                    <p className='reservation-inc-dec'>+</p>
                  </div>
                  <div className='delete-icon-price'>
                    <p>{food.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <p className='total-price'>
            Ukupno : <span className='sum-price'>{sum} RSD</span>
          </p>
          <div className='confirm-reservation'>
            <button>Potvrdi rezervaciju</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
