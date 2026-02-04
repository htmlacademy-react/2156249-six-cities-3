import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OfferState } from './types';
import { NameSpace } from '@/const';
import { fetchOfferAction, fetchNearbyOffersAction } from './api-actions';
import { FullOffer, Offer } from '@/types/offer';

const initialState: OfferState = {
  offer: null,
  nearbyOffers: [],
  isLoading: false,
  error: null,
  nearbyError: null,
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
        state.nearbyError = null;
      })
      .addCase(
        fetchOfferAction.fulfilled,
        (state, action: PayloadAction<FullOffer>) => {
          state.offer = action.payload;
          state.isLoading = false;
        },
      )
      .addCase(fetchOfferAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to load offer';
      })
      .addCase(
        fetchNearbyOffersAction.fulfilled,
        (state, action: PayloadAction<Offer[]>) => {
          state.nearbyOffers = action.payload;
        },
      )
      .addCase(fetchNearbyOffersAction.rejected, (state, action) => {
        state.nearbyError =
          action.error.message || 'Failed to load nearby places';
      });
  },
});

export const { clearOffer } = offerSlice.actions;
export default offerSlice.reducer;
