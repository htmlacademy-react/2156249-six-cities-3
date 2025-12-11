import { useState } from 'react';
import clsx from 'clsx';
import { SortOptions } from './const';

type SortingFormProps = {
  currentSort: string;
  onSortChange: (sortType: string) => void;
};

function SortingForm({
  currentSort,
  onSortChange,
}: SortingFormProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    onSortChange(option);
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        {currentSort}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>

      {isOpen && (
        <ul className="places__options places__options--custom places__options--opened">
          {Object.values(SortOptions).map((option) => (
            <li
              key={option}
              className={clsx('places__option', {
                'places__option--active': option === currentSort,
              })}
              tabIndex={0}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default SortingForm;
