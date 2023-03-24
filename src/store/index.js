import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import reducers from './reducers';
import foodSaga from './sagas/food';
import clientSaga from './sagas/client';
import restraurantSaga from './sagas/restaurant';
import ownerSaga from './sagas/owner';
import loginSaga from './sagas/auth';
import registerSaga from './sagas/register';
import resetPasswordSaga from './sagas/reset-password';
import authConfirmSaga from './sagas/auth-confirm';
import authPasswordForgotSaga from './sagas/auth-password-forgot';
import authProfileSaga from './sagas/auth-profile';

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
sagaMiddleware.run(authPasswordForgotSaga);
sagaMiddleware.run(authProfileSaga);
sagaMiddleware.run(authConfirmSaga);

export default store;
