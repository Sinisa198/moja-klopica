import food from './food';
import client from './client';
import restaurant from './restaurant';
import login from './auth';
import register from './register';
import faq from './faq';
import authProfile from './auth';
import order from './order';
import menuWeek from './menu-week';
import token from './token';
import resetPassword from './reset-password';
import forgetPassword from './forget-password';
import stateError from './auth';

const reducers = {
  food,
  client,
  resetPassword,
  restaurant,
  login,
  register,
  faq,
  authProfile,
  order,
  menuWeek,
  token,
  forgetPassword,
  stateError,
};

export default reducers;
