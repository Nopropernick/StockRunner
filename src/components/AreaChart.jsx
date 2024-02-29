import React from 'react';
import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function CustomAreaChart({ historicalData }) {
  return (
    <RechartsAreaChart
      width={600}
      height={400}
      data={historicalData}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#3182CE" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#3182CE" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <Area type="monotone" dataKey="open" stroke="#3182CE" fill="url(#colorUv)" />
    </RechartsAreaChart>
  );
}

export default CustomAreaChart;