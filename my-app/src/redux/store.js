import { configureStore } from '@reduxjs/toolkit';
import productSaga from './productSaga';
import authSaga from './authSaga';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore( 
	{
		reducer: rootReducer,
		middleware: () => [sagaMiddleware] 
	}
)
sagaMiddleware.run(productSaga);
sagaMiddleware.run(authSaga);
export default store;