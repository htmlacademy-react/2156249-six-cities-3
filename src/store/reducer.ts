import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '@/const';
import offersReducer from '@/store/offers';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersReducer,
});
