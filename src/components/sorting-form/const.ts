export const SortOptions = {
  Popular: 'Popular',
  PriceLowToHigh: 'Price: low to high',
  PriceHighToLow: 'Price: high to low',
  TopRated: 'Top rated first',
} as const;

export type SortType = keyof typeof SortOptions;
