import { Offer } from '@/types/offer';

export type FavoritesState = {
  favorites: Offer[];
  isLoading: boolean;
  error: string | null;
};
