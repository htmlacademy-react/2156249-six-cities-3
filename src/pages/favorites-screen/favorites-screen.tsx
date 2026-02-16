import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '@/hooks';
import Header from '@/components/header/header';
import Logo from '@/components/logo/logo';
import FavoritesList from '@/components/favorites-list/favorites-list';
import FavoritesEmpty from '@/components/favorites-empty/favorites-empty';
import { getFavorites, getFavoritesLoading } from '@/store/favorites';
import Loading from '@/components/loading/loading';

function FavoritesScreen(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavorites);
  const isLoading = useAppSelector(getFavoritesLoading);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {!favoriteOffers.length ? (
            <FavoritesEmpty />
          ) : (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList favorites={favoriteOffers} />
            </section>
          )}
        </div>
      </main>
      <footer className="footer container">
        <Logo type="footer" />
      </footer>
    </div>
  );
}

export default FavoritesScreen;
