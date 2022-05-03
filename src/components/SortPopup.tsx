import React, { useEffect, useRef, useState } from 'react';

interface SortPopupProps {
  items: string[];
}

interface stateCategories {
  activeItem: null | number;
}

export const SortPoup: React.FC<SortPopupProps> = ({ items }) => {
  const [visiblePopup, setVisiblePopup] = useState<boolean>(false);
  const sortElem = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<string>('популярности');

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutClick = (e: any) => {
    if (!e.path.includes(sortElem.current)) {
      setVisiblePopup(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutClick);
  }, []);

  const [state, setState] = useState<stateCategories>({
    activeItem: null,
  });

  const onSelectItem = (index: number) => {
    setState({ activeItem: index });
  };

  return (
    <div ref={sortElem} className="sort">
      <div className="sort__label">
        <svg
          className={visiblePopup ? 'rotated' : ''}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={toggleVisiblePopup}>{activeItem}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {items &&
              items.map((name, index) => (
                <li
                  className={state.activeItem === index ? 'active' : ''}
                  key={name}
                  onClick={() => {
                    onSelectItem(index);
                    setActiveItem(name);
                    console.log(name);
                  }}>
                  {name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};
