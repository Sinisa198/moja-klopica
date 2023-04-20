import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllRestaurant } from '../../store/actions/restaurant';
import { NavLink } from 'react-router-dom';

const ListRestaurant = () => {
  const dispatch = useDispatch();
  const restaurantSelector = useSelector(({ restaurant }) => restaurant);

  useEffect(() => {
    dispatch(getAllRestaurant());
  }, [dispatch]);
  return (
    <div className='listrestaurant-wrapper'>
      {restaurantSelector.restaurants.map((restaurant) => (
        <NavLink
          to={`/restaurant/${restaurant.id}`}
          className='list-restaurant-paragraf'
          key={restaurant.id}
        >
          <div>
            <p>{restaurant.name}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default ListRestaurant;
