import React from 'react';
import { Route, Redirect } from 'react-router';

function PrivateRoutes({ component: Component, ...others }) {
  // TODO
  const isLoggedIn = true;

  return (
    <Route
      {...others}
      render={(props) => {
        if (!isLoggedIn) {
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
        }
        return <Component {...props} />;
      }}
    />
  );
}

export default PrivateRoutes;
