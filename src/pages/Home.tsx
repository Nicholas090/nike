/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from 'react';
import { Categories, ContentWaiting, ShoesBlock, SortPoup } from '../components/index';
import { itemsInterface } from '../interfaces';
import { setCategoryAction, setSortByAction } from '../redux/actions/actionCreater';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchShoes } from '../redux/actions/actionCreater';

const categoryNames = ['Shoes', 'Clothing', 'Just Release', 'Best Seller', 'Sale'];

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const items: itemsInterface[] = useAppSelector((state) => state.rootReducer.shoes.items);
  const isLoaded = useAppSelector((state) => state.rootReducer.shoes.isLoaded);
  const { category, sortBy } = useAppSelector((state) => state.rootReducer.filters);

  const onSelectCategory = useCallback((index: number | null) => {
    dispatch(setCategoryAction(index));
  }, []);

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchShoes(sortBy, category));
  }, [category, sortBy]);

  const onSelectSortBy = useCallback((type: any) => {
    dispatch(setSortByAction(type));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categoryNames}
          onClickItem={onSelectCategory}
          activeCategory={category}
        />
        <SortPoup
          onClickSortBy={onSelectSortBy}
          activeSortType={sortBy.type}
          items={[
            { name: 'популярности', type: 'popular', order: 'desc' },
            { name: 'цене', type: 'price', order: 'desc' },
            { name: 'алфавит', type: 'name', order: 'desc' },
          ]}
        />
      </div>
      <h2 className="content__title">Все кроссовки</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => <ShoesBlock key={obj.id} item={obj} />)
          : Array(3)
              .fill(0)
              .map((_, index) => <ContentWaiting key={index} />)}
      </div>
    </div>
  );
};

export default Home;
