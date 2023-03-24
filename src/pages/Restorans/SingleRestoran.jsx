import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import RestaurantInfo from './RestaurantInfo';

export const SingleRestoran = () => {
  const params = useParams();
  const restoranSelector = useSelector((restoran) => restoran);
  useEffect(() => {
    const id = params.id;
  }, []);

  return <RestaurantInfo restoranInfo={restoranSelector.activeRestoraunt} />;
};
