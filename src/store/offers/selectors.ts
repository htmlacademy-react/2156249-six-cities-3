import { State } from '..';
import { NameSpace } from '@/const';

// Получить все предложения
export const getOffers = (state: State) => state[NameSpace.Offers].offers;

// Получить выбранный город
export const getCity = (state: State) => state[NameSpace.Offers].city;

// Получить активную сортировку
export const getActiveSort = (state: State) => state[NameSpace.Offers].activeSort;

// Получить ID выбранного предложения (для карты)
export const getSelectedOfferId = (state: State) =>
  state[NameSpace.Offers].selectedOfferId;

// Получить статус загрузки
export const getOffersLoadingStatus = (state: State) =>
  state[NameSpace.Offers].isLoading;

// Получить ошибку
export const getError = (state: State) => state[NameSpace.Offers].error;
