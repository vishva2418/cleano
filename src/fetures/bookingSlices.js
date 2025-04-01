import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookingDetails: {
    serviceType: '',
    quantity: 0,  // Number of services booked
    price: 0,     // Price for the service
  }
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setServiceType: (state, action) => {
      state.bookingDetails.serviceType = action.payload;
    },
    incrementQuantity: (state) => {
      state.bookingDetails.quantity += 1;
    },
    decrementQuantity: (state) => {
      if (state.bookingDetails.quantity > 0) {
        state.bookingDetails.quantity -= 1;
      }
    },
    setPrice: (state, action) => {
      state.bookingDetails.price = action.payload;
    },
    resetBooking: (state) => {
      state.bookingDetails = initialState.bookingDetails;
    }
  }
});

// Export actions to be used in components
export const { setServiceType, incrementQuantity, decrementQuantity, setPrice, resetBooking } = bookingSlice.actions;

// Export the reducer to be used in store
export default bookingSlice.reducer;
