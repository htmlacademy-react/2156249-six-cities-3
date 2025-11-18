/* eslint-disable react-refresh/only-export-components */
export const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
} as const;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
]; //забыла тут нужно CITIES или cities писать
// вроде массивы нужно во множественном числе прописными буквами, но это константный массив

export const SortOptions = {
  Popular: 'Popular',
  PriceLowToHigh: 'Price: low to high',
  PriceHighToLow: 'Price: high to low',
  TopRated: 'Top rated first',
} as const;

export const CardConfig = {
  main: {
    cardClass: 'cities__card place-card',
    imageWrapperClass: 'cities__image-wrapper place-card__image-wrapper',
    infoClass: 'place-card__info',
    imageSize: { width: 260, height: 200 },
  },
  favorites: {
    cardClass: 'favorites__card place-card',
    imageWrapperClass: 'favorites__image-wrapper place-card__image-wrapper',
    infoClass: 'favorites__card-info place-card__info',
    imageSize: { width: 150, height: 110 },
  },
  near: {
    cardClass: 'near-places__card place-card',
    imageWrapperClass: 'near-places__image-wrapper place-card__image-wrapper',
    infoClass: 'place-card__info',
    imageSize: { width: 260, height: 200 },
  },
} as const;

export const RatingValues = [
  { value: '5', title: 'perfect' },
  { value: '4', title: 'good' },
  { value: '3', title: 'not bad' },
  { value: '2', title: 'badly' },
  { value: '1', title: 'terribly' }
] as const;

export const MIN_REVIEW_LENGTH = 50;
export const MAX_REVIEW_LENGTH = 300;
