import React from 'react';

import { BarChart } from 'react-native-svg-charts';

export default function CustomBarChart({ chartData }) {
  return (
    <BarChart
      data={chartData}
      svg={{ fill: 'rgba(175,220,139,0.7)' }}
      style={{ height: 200, borderWidth: 1 }}
    />
  );
}
