export const CardConfig = {
  Main: {
    cardClass: 'cities__card place-card',
    imageWrapperClass: 'cities__image-wrapper place-card__image-wrapper',
    infoClass: 'place-card__info',
    imageSize: { width: 260, height: 200 },
  },
  Favorites: {
    cardClass: 'favorites__card place-card',
    imageWrapperClass: 'favorites__image-wrapper place-card__image-wrapper',
    infoClass: 'favorites__card-info place-card__info',
    imageSize: { width: 150, height: 110 },
  },
  Near: {
    cardClass: 'near-places__card place-card',
    imageWrapperClass: 'near-places__image-wrapper place-card__image-wrapper',
    infoClass: 'place-card__info',
    imageSize: { width: 260, height: 200 },
  },
} as const;
