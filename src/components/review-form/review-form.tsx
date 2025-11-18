import { useState, Fragment } from 'react';
import { RatingValues, MIN_REVIEW_LENGTH, MAX_REVIEW_LENGTH } from '@/const';

function ReviewForm(): JSX.Element {
  const [userReview, setUserReview] = useState<string>('');
  const [rating, setRating] = useState<string>('');

  const isSubmitDisabled =
    rating === '' ||
    userReview.length < MIN_REVIEW_LENGTH ||
    userReview.length > MAX_REVIEW_LENGTH;

  const handleRatingChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
  };

  const handleReviewChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = evt.target.value;
    if (text.length <= MAX_REVIEW_LENGTH) {
      setUserReview(text);
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RatingValues.map(({ value, title }) => (
          <Fragment key={value}>
            <input
              key={`input-${value}`}
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-star${value === '1' ? '' : 's'}`}
              type="radio"
              checked={rating === value}
              onChange={handleRatingChange}
            />
            <label
              key={`label-${value}`}
              htmlFor={`${value}-star${value === '1' ? '' : 's'}`}
              className="reviews__rating-label form__rating-label"
              title={title}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={userReview}
        onChange={handleReviewChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{' '}
          <b className="reviews__text-amount">{MIN_REVIEW_LENGTH} characters</b>
          and no more than{' '}
          <b className="reviews__text-amount">{MAX_REVIEW_LENGTH} characters</b>
          .
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
