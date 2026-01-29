import { createSlice } from '@reduxjs/toolkit';
import { OfferState } from './types';
import { NameSpace } from '@/const';
import { fetchOfferAction, fetchNearbyOffersAction } from './api-actions';

const initialState: OfferState = {
  offer: null,
  nearbyOffers: [],
  isLoading: false,
  error: null,
};

export const offerSlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    clearOffer: (state) => {
      state.offer = null;
      state.nearbyOffers = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.nearbyOffers = [];
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchOfferAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.error.message || 'Не удалось загрузить предложение';
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      });
  },
});

export const { clearOffer } = offerSlice.actions;
export default offerSlice.reducer;
