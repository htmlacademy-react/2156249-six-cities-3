import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '@/types/offer';
import { setCity, uploadOffers } from './actions';

type State = {
  city: string;
  offersList: Offer[];
};

const initialState: State = {
  city: 'Paris',
  offersList: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(uploadOffers, (state, action) => {
      state.offersList = action.payload;
    });
});

export { reducer };
