import React from 'react';
import { Provider } from 'react-redux';
import { match, RoutingContext } from 'react-router';

import createStore from '../stores/commentsStore';
import routes from '../routes/routes';

const App = (props, location) => {
  const store = createStore(props);

  let routeError;
  let routeRedirect;
  let routeProps;

  match({ routes, location }, (_routeError, _routeRedirect, _routeProps) => {
    routeError = _routeError;
    routeRedirect = _routeRedirect;
    routeProps = _routeProps;
  });

  if (routeError) {
    // TODO: We should handle errors from router inside `react_on_rails` gem
    //       routeError: { message: "Error message <String>" }
    throw new Error(routeError.message);
  }

  if (routeRedirect) {
    // TODO: We should handle redirects from router inside `react_on_rails` gem
    //       routeRedirect: { pathname: "Path <String>", search: "Query <String>" }
    //       redirectTo = routeRedirect.pathname + routeRedirect.search
    return { routeRedirect };
  }

  return (
    <Provider store={store}>
      <RoutingContext {...routeProps} />
    </Provider>
  );
};

export default App;
