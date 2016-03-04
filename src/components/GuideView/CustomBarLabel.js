import React from 'react';

function CustomBarLabel({ payload, x, y }) {
  return <text x={x} y={y} fill="#666" textAnchor="middle" dy={-6}>{`${payload.name} : ${payload.value}`}</text>;
}

export default CustomBarLabel;
