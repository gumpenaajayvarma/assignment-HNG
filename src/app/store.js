import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import counterReducer from '../features/counter/counterSlice';
import rootSaga from '../middleware'
import dataSets from '../reducers/products.reducer';

const sagaMiddleware = createSagaMiddleware()
export default configureStore({
  reducer: {
    counter: counterReducer,
    products: dataSets
  },
  middleware: [sagaMiddleware]
});

// give the saga to be run
sagaMiddleware.run(rootSaga)