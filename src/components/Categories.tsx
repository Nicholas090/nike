import React from 'react';

interface CategoriesProps {
  items: string[];
  onClickItem: (name: number | null) => void;
  activeCategory: any;
}

export const Categories: React.FC<CategoriesProps> = React.memo(
  ({ items, onClickItem, activeCategory }) => {
    return (
      <div className="categories">
        <ul>
          <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickItem(null)}>
            All
          </li>
          {items &&
            items.map((name, index) => (
              <li
                className={activeCategory === index ? 'active' : ''}
                key={name}
                onClick={() => onClickItem(index)}>
                {name}
              </li>
            ))}
        </ul>
      </div>
    );
  },
);

export default Categories;
