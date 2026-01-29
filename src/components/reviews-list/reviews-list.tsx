import { Review } from '@/types/review';
import ReviewItem from '../review-item/review-item';

type ReviewsListProps = {
  reviews: Review[];
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  const displayedReviews = reviews.slice(0, 10);

  return (
    <ul className="reviews__list">
      {displayedReviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </ul>
  );
}

export default ReviewsList;
