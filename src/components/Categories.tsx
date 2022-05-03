import React, { useState } from 'react';

interface CategoriesProps {
  items: string[];
  onClickItem: (name: string) => void;
}

interface stateCategories {
  activeItem: null | number;
}

export const Categories: React.FC<CategoriesProps> = ({ items, onClickItem }) => {
  const [state, setState] = useState<stateCategories>({
    activeItem: null,
  });

  const onSelectItem = (index: number) => {
    setState({ activeItem: index });
  };

  return (
    <div className="categories">
      <ul>
        {items &&
          items.map((name, index) => (
            <li
              className={state.activeItem === index ? 'active' : ''}
              key={name}
              onClick={() => onSelectItem(index)}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
