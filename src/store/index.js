import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import reducers from './reducers';
import foodSaga from './sagas/food';
import clientSaga from './sagas/client';
import restraurantSaga from './sagas/restaurant';
import ownerSaga from './sagas/owner';
import loginSaga from './sagas/auth';
import registerSaga from './sagas/register';
import authConfirmSaga from './sagas/auth-confirm';
import authProfileSaga from './sagas/auth-profile';
import faqSaga from './sagas/faq';
import orderSaga from './sagas/order';
import menuWeekSaga from './sagas/menu-week';
import resetPasswordSaga from './sagas/reset-password';
import forgetPasswordSaga from './sagas/forget-password';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducers,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(foodSaga);
sagaMiddleware.run(ownerSaga);
sagaMiddleware.run(clientSaga);
sagaMiddleware.run(restraurantSaga);
sagaMiddleware.run(loginSaga);
sagaMiddleware.run(registerSaga);
sagaMiddleware.run(resetPasswordSaga);
sagaMiddleware.run(authProfileSaga);
sagaMiddleware.run(authConfirmSaga);
sagaMiddleware.run(faqSaga);
sagaMiddleware.run(orderSaga);
sagaMiddleware.run(menuWeekSaga);
sagaMiddleware.run(forgetPasswordSaga);

export default store;
