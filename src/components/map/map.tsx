import clsx from 'clsx';

type MapProps = {
  className: string;
};

function Map({ className }: MapProps): JSX.Element {
  return <section className={clsx('map', className)} />;
}

export default Map;
