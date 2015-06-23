'use strict';

import React from 'react';


const Loader = React.createClass({
  propTypes: {
    pending: React.PropTypes.bool.isRequired
  },

  render() {
    return this.props.pending && <span className='loader'>loader...</span> || this.props.children;
  }
});

export default Loader;
