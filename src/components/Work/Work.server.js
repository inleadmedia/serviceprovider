'use strict';
import React from 'react';
import Work from './Work.component';

/**
 * Render component for server use.
 *
 * @return object the object contains to properties: 'search' constains the component
 * and 'props' is a stringified version of the properties for client side export.
 */
export default function workServer(props) {
  const {pid, elements} = props;
  const work = React.renderToString(<Work pid={pid || []} elements={elements || []}/>);
  return {
    work,
    props: JSON.stringify(props)
  };
}