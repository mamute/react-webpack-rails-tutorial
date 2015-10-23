import React from 'react';

export default class TestReactRouterRedirect extends React.Component {

  static checkAuth(nextState, replaceState) {
    const notAuthorized = true;
    if (notAuthorized) {
      replaceState({ redirectFrom: nextState.location.pathname }, '/');
    }
  }

  render() {
    return (
      <div>Nope.</div>
    );
  }

}
