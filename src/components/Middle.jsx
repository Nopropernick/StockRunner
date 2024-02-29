import React from 'react';
import AreaChart from './AreaChart';

function Middle({ stats, historicalData }) {
  const change = stats.c - stats.o;
  // Calculate the percentage change
  const percentageChange = ((stats.c - stats.o) / stats.o) * 100;
  const downsampledData = downsample(historicalData, 50);
    return (
      <div className='flex flex-col justify-start items-center rounded-2xl flex-wrap'>
        <div className='w-full flex justify-between bg-white p-4 rounded-lg'>
          <div className='flex flex-col justify-start items-center'>
            <h1 className='text-5xl font-bold'>{stats.ticket}</h1>
            <span className='text-sm font-semibold'>NASDAQ</span>
          </div>
          <div className='text-blue-500 text-3xl flex flex-col justify-start items-center font-bold'>
            <h2>${stats.c}</h2>
            <span className='text-sm text-green-500 font-semibold'>{change.toFixed(2)}%</span>
          </div>
        </div>
        <div className='bg-white p-4 mt-20 rounded-lg'>  
        <AreaChart historicalData={downsampledData}/>
        </div>
      </div>
    );
  }

  function downsample(data, interval) {
    // Ensure data and interval are provided
    if (!data || data.length === 0 || !interval || interval <= 1) {
      return data;
    }
  
    // Calculate the stride to select a subset of data points
    const stride = Math.ceil(data.length / interval);
  
    // Initialize downsampled data array
    const downsampledData = [];
  
    // Iterate through the original data and select data points at regular intervals
    for (let i = 0; i < data.length; i += stride) {
      downsampledData.push(data[i]);
    }
  
    return downsampledData;
  }  

export default Middle;
