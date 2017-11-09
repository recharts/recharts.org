import React, { Component } from 'react';
import Highlight from 'utils/Highlight';
import CustomAxisTick from './CustomAxisTick';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { localeGet } from '../../utils/LocaleUtils';


const GettingStarted = ({ locale }) => (
  <div className="mod-design-disciplines" id="Design_Disciplines">
    <h3 className="page-title"></h3>
  </div>
);

export default GettingStarted;
