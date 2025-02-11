import React from 'react';
import { Link } from 'react-router-dom';

import { Route } from '../router';

type TErrorPageProps = {
  message?: string;
};

function ErrorPage(props: TErrorPageProps): React.ReactElement {
  const { message = 'An error occurred when loading the page. Please try again later.' } = props;

  return (
    <>
      <h1>Упс!</h1>
      <p>{message}</p>
      <Link to={Route.Characters}>Go to the main page</Link>
    </>
  );
}

export default ErrorPage;
