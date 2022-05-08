import React, { useCallback } from 'react';
import { Categories, ShoesBlock, SortPoup } from '../components/index';
import { itemsInterface } from '../interfaces';
import { setCategoryAction } from '../redux/actions/actionCreater';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const categoryNames = ['Sale', 'Shoes', 'Clothing', 'Just Release', 'Best Seller', 'All'];

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const items: itemsInterface[] = useAppSelector((state) => state.rootReducer.shoes.items);

  const onSelectCategory = useCallback((index: number) => {
    dispatch(setCategoryAction(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categoryNames} onClickItem={onSelectCategory} />
        <SortPoup
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавит', type: 'alphabet' },
          ]}
        />
      </div>
      <h2 className="content__title">Все кроссовки</h2>
      <div className="content__items">
        {items.map((obj) => (
          <ShoesBlock key={obj.id} item={obj} />
        ))}
      </div>
    </div>
  );
};

export default Home;
