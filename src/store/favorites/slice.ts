import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoritesState } from './types';
import { NameSpace } from '@/const';
import {
  fetchFavoritesAction,
  changeFavoriteStatusAction,
} from './api-actions';
import { Offer } from '@/types/offer';

const initialState: FavoritesState = {
  favorites: [],
  isLoading: false,
  favoritesError: null,
};

export const favoritesSlice = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {
    clearFavoritesError(state) {
      state.favoritesError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isLoading = true;
        state.favoritesError = null;
      })
      .addCase(
        fetchFavoritesAction.fulfilled,
        (state, action: PayloadAction<Offer[]>) => {
          state.favorites = action.payload;
          state.isLoading = false;
        },
      )
      .addCase(fetchFavoritesAction.rejected, (state, action) => {
        state.isLoading = false;
        state.favoritesError =
          action.error.message || 'Failed to load favorites';
      })
      .addCase(
        changeFavoriteStatusAction.fulfilled,
        (state, action: PayloadAction<Offer>) => {
          const updatedOffer = action.payload;

          if (updatedOffer.isFavorite) {
            state.favorites.push(updatedOffer);
          } else {
            state.favorites = state.favorites.filter(
              (offer) => offer.id !== updatedOffer.id,
            );
          }
        },
      )
      .addCase(changeFavoriteStatusAction.rejected, (state, action) => {
        state.favoritesError =
          action.error.message || 'Failed to update favorite';
      });
  },
});

export const { clearFavoritesError } = favoritesSlice.actions;
export default favoritesSlice.reducer;
