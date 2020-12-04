import React from 'react';
import { useSelector } from 'react-redux';

import { SubTitle } from '../lib/Text';

const Loader = () => {
  const isLoading = useSelector(store => store.ui.isLoading);

  return (
    <>
      {isLoading && (
        <div>
          <SubTitle>LOADING...</SubTitle>
        </div>
      )}
    </>
  );
};
export default Loader;