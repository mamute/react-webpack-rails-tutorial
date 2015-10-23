import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
  }

  render() {
    return (
      <section>
        <header>
          <ul>
            <li>
              <Link to="/">Comments</Link>
            </li>
            <li>
              <Link to="/react-router">Test React Router</Link>
            </li>
            <li>
              <Link to="/react-router/redirect">Test Redirect</Link>
            </li>
          </ul>
        </header>
        {this.props.children}
      </section>
    );
  }
}
