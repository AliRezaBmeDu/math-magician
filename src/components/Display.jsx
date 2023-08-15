import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ data }) => (
  <div className="row first">
    <span className="full-span">{ data }</span>
  </div>
);

Display.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Display;
