import React from 'react';
import { Helmet } from 'react-helmet';
import ChatLoader from '~/components/UI/ChatLoader';

const PageNotFound = () => {
  return (
    <div>
      <Helmet>
        <title>404 | Lapteller</title>
      </Helmet>
      <ChatLoader />
    </div>
  );
};
export default PageNotFound;
