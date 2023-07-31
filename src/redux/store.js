import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './Crypto/cryptoSlice';

const store = configureStore({
  reducer: {
    cryptoList: cryptoReducer,

  },
});

export default store;
