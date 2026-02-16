import { Offer } from '@/types/offer';

export type FavoritesState = {
  favorites: Offer[];
  isLoading: boolean;
  favoritesError: string | null;
};

export type ChangeFavoriteStatusPayload = {
  offerId: string;
  status: number; // 1 — добавить, 0 — удалить
};
