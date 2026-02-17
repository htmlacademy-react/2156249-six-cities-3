import { useRef, useEffect } from 'react';
import clsx from 'clsx';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { City, Offer } from '@/types/offer';
import useMap from '@/hooks/use-map';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from './const';
import { useAppSelector } from '@/hooks';
import { getSelectedOfferId } from '@/store/offers';

type MapProps = {
  className: string;
  city: City;
  offers: Offer[];
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

function Map({ className, city, offers }: MapProps): JSX.Element {
  const mapContainerRef = useRef(null);
  const map = useMap(mapContainerRef, city);
  const selectedOfferId = useAppSelector(getSelectedOfferId);

  useEffect(() => {
    if (!map) {
      return;
    }

    const markerLayer = leaflet.layerGroup().addTo(map);

    offers.forEach((offer) => {
      leaflet
        .marker(
          {
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          },
          {
            icon:
              offer.id === selectedOfferId
                ? currentCustomIcon
                : defaultCustomIcon,
          },
        )
        .addTo(markerLayer);
    });

    return () => {
      map.removeLayer(markerLayer);
    };
  }, [map, offers, selectedOfferId]);

  useEffect(() => {
    if (map) {
      map.setView(
        [city.location.latitude, city.location.longitude],
        city.location.zoom,
      );
    }
  }, [map, city]);

  return <section className={clsx('map', className)} ref={mapContainerRef} />;
}

export default Map;
