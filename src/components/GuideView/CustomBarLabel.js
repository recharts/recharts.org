import React from 'react';

const CustomBarLabel = (props) => {
  const { payload, x, y } = props;

  return <text x={x} y={y} fill="#666" textAnchor="middle" dy={-6}>{`${payload.name} : ${payload.value}`}</text>;
};

export default CustomBarLabel;
