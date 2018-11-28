// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Body from '../components/body';

const Hello = props => (
  <div className="container py-4 bg-white">
    <h1 className="mb-4">Hello {props.name}!</h1>
    <Body />
  </div>
);

Hello.defaultProps = {
  name: 'React',
};

Hello.propTypes = {
  name: PropTypes.string,
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="Andrew" />,
    document.body.appendChild(document.createElement('div')),
  );
});
