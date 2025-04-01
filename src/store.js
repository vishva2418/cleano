import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from '../src/fetures/bookingSlices';

const store = configureStore({
  reducer: {
    booking: bookingReducer,  // Adding the booking slice reducer
  }
});

export default store;
