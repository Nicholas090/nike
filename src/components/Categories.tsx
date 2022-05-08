import React from 'react';
import { useAppSelector } from '../redux/hooks';

interface CategoriesProps {
  items: string[];
  onClickItem: (name: number) => void;
}

export const Categories: React.FC<CategoriesProps> = React.memo(({ items, onClickItem }) => {
  const activeItem = useAppSelector((state) => state.rootReducer.filters.category);

  return (
    <div className="categories">
      <ul>
        {items &&
          items.map((name, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              key={name}
              onClick={() => onClickItem(index)}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
