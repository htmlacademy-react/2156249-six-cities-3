import { createAction } from '@reduxjs/toolkit';
import { Offer } from '@/types/offer';

export const setCity = createAction<string>('setCity');
export const uploadOffers = createAction<Offer[]>('uploadOffers');
