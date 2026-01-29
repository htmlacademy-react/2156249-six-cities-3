import { useAppSelector } from '@/hooks';
import './error-message.css';
import { getError } from '@/store/offers';
import { getAuthError } from '@/store/auth';
import { getReviewsError } from '@/store/reviews';

function ErrorMessage(): JSX.Element | null {
  const offersError = useAppSelector(getError);
  const authError = useAppSelector(getAuthError);
  const reviewsError = useAppSelector(getReviewsError);

  const error = authError || offersError || reviewsError;

  return error ? <div className="error-message">{error}</div> : null;
}

export default ErrorMessage;
