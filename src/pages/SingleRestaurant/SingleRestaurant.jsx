import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getSingleRestaurant from '../../store/sagas/restaurant';

const SingleRestaurant = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleRestaurant);
  }, [dispatch]);

  const restaurantSelector = useSelector((restaurant) => restaurant);

  return <div>{restaurantSelector.restaurant.map()}</div>;
};

export default SingleRestaurant;
