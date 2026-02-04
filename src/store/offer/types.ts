import { FullOffer, Offer } from '@/types/offer';

export type OfferState = {
  offer: FullOffer | null;
  nearbyOffers: Offer[];
  isLoading: boolean;
  error: string | null;
  nearbyError: string | null;
};
