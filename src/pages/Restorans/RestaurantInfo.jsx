import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setActiveRestaurant } from '../../store/actions/restaurant';

const RestaurantInfo = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const activeRestaurant = useSelector(({ restaurant }) => restaurant);

  useEffect(() => {
    dispatch(setActiveRestaurant());
  }, [dispatch]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}${activeRestaurant.restaurant.id}`
      );
      setData(result.data);
    }
    fetchData();
  });
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {data.map((item) => (
        <p key={item.id}>
          {item.name}
          {item.address}
          {item.category}
        </p>
      ))}
    </div>
  );
};

export default RestaurantInfo;
