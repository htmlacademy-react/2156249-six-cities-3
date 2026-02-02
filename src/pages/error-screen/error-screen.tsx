import { useAppDispatch } from '@/hooks';
import { fetchOffersAction } from '@/store/offers';
import './error-screen.css';

function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="error-screen">
      <p className="error-screen__text">Failed to load offers</p>
      <button
        onClick={() => {
          dispatch(fetchOffersAction());
        }}
        className="error-screen__button"
        type="button"
      >
        Try again
      </button>
    </div>
  );
}

export default ErrorScreen;
