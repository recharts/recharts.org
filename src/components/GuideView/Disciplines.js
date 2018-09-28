import React, { Component } from 'react';
import Highlight from 'utils/Highlight';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid,
} from 'recharts';
import CustomAxisTick from './CustomAxisTick';
import { localeGet } from '../../utils/LocaleUtils';


const GettingStarted = ({ locale }) => (
  <div className="mod-design-disciplines" id="Design_Disciplines">
    <h3 className="page-title" />
  </div>
);

export default GettingStarted;
