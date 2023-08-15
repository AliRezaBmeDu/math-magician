import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ data }) => (
  <div className="row first">
    <span className="full-span">{ data.join(', ') }</span>
  </div>
);

Display.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Display;
