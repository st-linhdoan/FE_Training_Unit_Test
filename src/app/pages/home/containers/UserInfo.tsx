import React, { useEffect, useState } from 'react';
import { getUserInfo } from '../home.action';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { useParams } from 'react-router';

const Home = (): JSX.Element => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const { dataUser } = useSelector((state: RootStateOrAny) => state.homeReducer);
  const { error, isLoading } = useSelector((state: RootStateOrAny) => state.homeReducer);
  const [isLoadingIndicator, setIsLoadingIndicator] = useState(true);
  
  useEffect (() => {
    dispatch(getUserInfo(id));
    if (!isLoading) {
      setTimeout(() => {
        setIsLoadingIndicator(false);
      }, 1000);
    }
  }, [id]);

  if (isLoadingIndicator) {
    return <div data-testid="page-loading">Loading</div>;
  }

  if(error) {
    return <div data-testid='error'>Error</div>;
  }

  return (
    <div>
      {
        dataUser &&
          <div data-testid="user-info">
            <p> {dataUser.name} </p>
            <p> {dataUser.username} </p>
            <p> {dataUser.address.suite + '' + dataUser.address.street + '' + dataUser.address.city} </p>
          </div>
      }
    </div>
  );
};

export default Home;
