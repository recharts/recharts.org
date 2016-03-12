import React, { PropTypes } from 'react';

function CustomBarLabel({ payload, x, y }) {
  return <text x={x} y={y} fill="#666" textAnchor="middle" dy={-6}>{`${payload.name} : ${payload.value}`}</text>;
}

CustomBarLabel.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.object,
};

export default CustomBarLabel;
