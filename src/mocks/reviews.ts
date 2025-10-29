import { nanoid } from 'nanoid';
import { Review } from '../types/review';

export const Reviews: Review[] = [
  {
    id: nanoid(),
    date: '2024-01-15T10:30:00.000Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'https://22.objects.htmlacademy.pro/static/destinations/5.jpg',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4,
  },
  {
    id: nanoid(),
    date: '2024-01-10T14:45:00.000Z',
    user: {
      name: 'Sophie Martinez',
      avatarUrl: 'https://22.objects.htmlacademy.pro/static/destinations/6.jpg',
      isPro: true
    },
    comment: 'Amazing location! The apartment was clean, modern and had everything we needed for a comfortable stay.',
    rating: 5
  },
  {
    id: nanoid(),
    date: '2024-01-08T09:15:00.000Z',
    user: {
      name: 'Thomas Johnson',
      avatarUrl: 'https://22.objects.htmlacademy.pro/static/destinations/7.jpg',
      isPro: false
    },
    comment: 'Good value for money. The host was very responsive and helpful. Would recommend for short stays.',
    rating: 3
  },
  {
    id: nanoid(),
    date: '2024-01-05T16:20:00.000Z',
    user: {
      name: 'Emma Wilson',
      avatarUrl: 'https://22.objects.htmlacademy.pro/static/destinations/8.jpg',
      isPro: true
    },
    comment: 'Beautiful apartment with stunning views. The interior design is impeccable and the neighborhood is very quiet.',
    rating: 5
  },
  {
    id: nanoid(),
    date: '2024-01-02T11:00:00.000Z',
    user: {
      name: 'Michael Brown',
      avatarUrl: 'https://22.objects.htmlacademy.pro/static/destinations/9.jpg',
      isPro: false
    },
    comment: 'The apartment was nice but the Wi-Fi was quite slow. Otherwise, everything was as described in the listing.',
    rating: 4
  }
];

