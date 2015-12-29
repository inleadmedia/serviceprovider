'use strict';

import {PropTypes, React} from 'react';

export default class Menu extends React.Component {
  constructor() {
    super();
  }

  render() {
    let animationClass = '';
    if (this.props.isMenuAnimated) {
      animationClass = (this.props.isMenuOpen) ? 'opened' : 'closed';
    }
    return (
        <div className={'row header--topbar-menu slider ' + animationClass} id='menu'>
          <ul>
            <li><a href='/libraries'>Åbningstider</a></li>
            <li><a href='/profile/logout'>Log ud</a></li>
          </ul>
        </div>
    );
  }
}

Menu.propTypes = {
  isMenuOpen: PropTypes.boolean,
  isMenuAnimated: PropTypes.boolean
};

Menu.displayName = 'Menu';
