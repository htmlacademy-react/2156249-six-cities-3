import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from './const';
import MainScreen from './pages/main-screen/main-screen';
import LoginScreen from './pages/login-screen/login-screen';
import FavoritesScreen from './pages/favorites-screen/favorites-screen';
import OfferScreen from './pages/offer-screen/offer-screen';
import NotFoundScreen from './pages/notFound-screen/notFound-screen';
import PrivateRoute from './components/private-route/private-route';
import { Offers } from './types/offer';
import { Reviews } from './types/review';

type AppScreenProps = {
  offers: Offers;
  reviews: Reviews;
};

function App({ offers, reviews }: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainScreen offers={offers} />}
          />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesScreen favorites={offers} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferScreen reviews={reviews} />}
          />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
